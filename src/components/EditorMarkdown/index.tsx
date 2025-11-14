import type { ButtonAction } from "./Toolbar/types";

import { useEffect } from "react";

import { Editor, EditorContent, useEditor } from "@tiptap/react";
import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";
import Typography from "@tiptap/extension-typography";
import Heading from "@tiptap/extension-heading";

import { actionsInsert, initialContent } from "./constant";
import Toolbar from "./Toolbar";
import { useActionsVisual } from "../../store/visual/hooks";
import { useActionsEditor } from "../../store/editor/hooks";

const MarkdownEditor = () => {
  const { setSnackbar } = useActionsVisual();
  const { setEditor } = useActionsEditor();

  const editor: Editor | null = useEditor({
    extensions: [
      StarterKit.configure({
        blockquote: {
          HTMLAttributes: {
            class: "border-1-4 border-muted pl-4 italic text muted-foreground",
          },
        },
        codeBlock: {
          HTMLAttributes: {
            class: "rounded-lg bg-muted px-4 py-3 font-mono text-sm text-muted-foreground",
          },
        },
      }),
      Heading.extend({
        renderHTML({ node, HTMLAttributes }) {
          const level = node.attrs.level as number;
          const sizeClasses: Record<number, string> = {
            1: "text-4xl",
            2: "text-3xl",
            3: "text-2xl",
          };
          const sizeClass = sizeClasses[level] || "text-2xl";
          return [
            `h${level}`,
            {
              ...HTMLAttributes,
              class: `font-bold ${sizeClass} ${HTMLAttributes.class || ""}`.trim(),
            },
            0,
          ];
        },
      }).configure({
        levels: [1, 2, 3],
      }),
      Typography,
      Placeholder.configure({
        placeholder: "Escribe aqui y utiliza los atajos de Markdown al estilo Notion...",
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "tiptap prose prose-stone dark:prose-invert max-w-none min-h-[420px] w-full bg-transparent p-4 focus:outline-none focus-visible:ring-0",
        "aria-label": "Area de edicion de Markdown con vista RichText en Real Time",
      },
    },
    autofocus: "end",
    immediatelyRender: false,
  });

  useEffect(() => {
    if (!editor) {
      // TODO: Se debe revisar este codigo para evitar pasar por el if mientras se esta cargando el componente.
      // Debe chequear el if SOLO cuando el componente se carga y el editor no cargo
      setSnackbar({
        type: "error",
        message: "Editor or MarkdownManager not available",
      });
      return;
    }

    setEditor(editor);

    try {
      editor.commands.setContent(initialContent);
    } catch (err) {
      console.error(err);
      setSnackbar({
        type: "error",
        message: `Error parsing markdown: ${err instanceof Error ? err.message : String(err)}`,
      });
    }
  }, [editor, setEditor, setSnackbar]);

  const handleInsert = (button: ButtonAction) => {
    if (!editor) return;
    console.log("Insertar")
  };

  const handlePublish = () => {
    if (!editor) return;
    const content = editor.getHTML();
    console.log("Publicando contenido:", content);
    setSnackbar({
      type: "info",
      message: "Contenido publicado exitosamente",
    });
  };

  return (
    <section className="w-full h-dvh flex flex-col">
      <div className="flex-1 flex flex-col rounded-lg border bg-background overflow-hidden">
        <Toolbar onInsert={handleInsert} onPublish={handlePublish} />
        <div className="flex-1 overflow-auto px-10 py-5">
          {editor ? <EditorContent editor={editor} /> : null}
        </div>
      </div>
    </section>
  );
};

export default MarkdownEditor;
