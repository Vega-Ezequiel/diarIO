import {
  Bold,
  Italic,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Link,
  Code,
  Quote,
  Image,
} from "lucide-react";

import type { ButtonAction } from "./types";

export const toolbarButtons: ButtonAction[] = [
  {
    icon: Bold,
    label: "Negrita",
    action: { type: "wrap", prefix: "**", suffix: "**", placeholder: "texto en negrita" },
  },
  {
    icon: Italic,
    label: "Cursiva",
    action: { type: "wrap", prefix: "*", suffix: "*", placeholder: "texto en cursiva" },
  },
  {
    icon: Heading1,
    label: "Título 1",
    action: { type: "prefix", prefix: "#", placeholder: "Título 1", addNewline: true },
  },
  {
    icon: Heading2,
    label: "Título 2",
    action: { type: "prefix", prefix: "##", placeholder: "Título 2", addNewline: true },
  },
  {
    icon: Heading3,
    label: "Título 3",
    action: { type: "prefix", prefix: "###", placeholder: "Título 3", addNewline: true },
  },
  {
    icon: List,
    label: "Lista",
    action: { type: "prefix", prefix: "-", placeholder: "Elemento de lista", addNewline: true },
  },
  {
    icon: ListOrdered,
    label: "Lista numerada",
    action: { type: "prefix", prefix: "1.", placeholder: "Elemento numerado", addNewline: true },
  },
  {
    icon: Link,
    label: "Enlace",
    action: { type: "wrap", prefix: "[", suffix: "](url)", placeholder: "texto" },
  },
  {
    icon: Code,
    label: "Código",
    action: { type: "wrap", prefix: "`", suffix: "`", placeholder: "código" },
  },
  {
    icon: Quote,
    label: "Cita",
    action: { type: "prefix", prefix: ">", placeholder: "Cita", addNewline: true },
  },
  {
    icon: Image,
    label: "Imagen",
    action: { type: "insert", text: "![alt](url)" },
  },
];
