import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

export type SyntaxAction =
  | {
      type: "wrap";
      prefix: string;
      suffix: string;
      placeholder: string;
    }
  | {
    type: "prefix";
    prefix: string;
    placeholder: string;
    addNewline?: boolean;
  }
  | {
      type: "insert";
      text: string;
    };

export type ButtonAction = {
  icon: ComponentType<LucideProps>;
  label: string;
  action: SyntaxAction;
};
