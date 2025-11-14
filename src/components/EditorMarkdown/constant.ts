import type { Editor } from '@tiptap/react';
import type { SyntaxAction } from './Toolbar/types';

export const initialContent = `
<h1>Bienvenido a tu nuevo editor Markdown</h1>
<p>Escribe usando la sintaxis de <strong>Markdown</strong> y observa cómo se transforma al instante.</p>
<h2>Características</h2>
<ul>
  <li>Vista previa en tiempo real</li>
  <li>Estilos inspirados en shadcn/ui</li>
  <li>Compatible con <em>código</em>, listas, enlaces y más</li>
</ul>
<h3>Ejemplo de código</h3>
<pre><code class="language-ts">function saludo(nombre: string) {
  return \`Hola, \${nombre}!\`;
}</code></pre>
<blockquote>Consejo: usa los atajos de tu editor para escribir más rápido.</blockquote>
`;

const insertWithWrap = (editor: Editor, action: Extract<SyntaxAction, { type: "wrap" }>) => {
  if (!editor) return;
  const { from, to } = editor.state.selection;
  const hasSelection = from !== to;
  const selectedText = editor.state.doc.textBetween(from, to, "\n");
  const content = hasSelection ? selectedText : action.placeholder;
  const wrapped = `${action.prefix}${content}${action.suffix}`;

  editor.chain().focus().insertContentAt({ from, to }, wrapped).run();

  if (!hasSelection) {
    const start = from + action.prefix.length;
    editor
      .chain()
      .focus()
      .setTextSelection({ from: start, to: start + content.length })
      .run();
  }
};

const insertWithPrefix = (editor: Editor, action: Extract<SyntaxAction, { type: "prefix" }>) => {
  if (!editor) return;
  const { from, to } = editor.state.selection;
  const hasSelection = from !== to;
  const selectedText = editor.state.doc.textBetween(from, to, "\n");
  const baseText = hasSelection ? selectedText : action.placeholder;

  const prefixed = baseText
    .split("\n")
    .map((line) => `${action.prefix}${line}`)
    .join("\n");
  const shouldAddNewline = action.addNewline && !hasSelection;
  const content = shouldAddNewline ? `${prefixed}\n` : prefixed;

  editor.chain().focus().insertContentAt({ from, to }, content).run();

  if (!hasSelection) {
    const start = from + action.prefix.length;
    editor
      .chain()
      .focus()
      .setTextSelection({ from: start, to: start + baseText.length })
      .run();
  }
};

const insertPlainText = (editor: Editor, text: string) => {
  if (!editor) return;
  editor.chain().focus().insertContent(text).run();
};

export const actionsInsert = {
  wrap: insertWithWrap,
  prefix: insertWithPrefix,
  insert: insertPlainText,
};
