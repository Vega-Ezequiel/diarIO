import type { ToolbarProps } from "./interface";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { toolbarButtons } from "./constants";
import type { ButtonAction } from "./types";

const Toolbar = ({ onInsert, onPublish }: ToolbarProps) => {
  return (
    <div className="flex items-center justify-between border-b border-border bg-card px-4 py-2">
      <div className="flex items-center gap-1">
        {toolbarButtons.map((button: ButtonAction, index: number) => {
          const Icon = button.icon;
          return (
            <div key={button.label} className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onInsert(button)}
                className="h-8 w-8 text-foreground hover:bg-secondary hover:text-foreground"
                aria-label={button.label}
              >
                <Icon className="h-4 w-4" />
              </Button>
              {(index === 1 || index === 4 || index === 6 || index === 8) && (
                <Separator orientation="vertical" className="mx-1 h-6" />
              )}
            </div>
          );
        })}
      </div>
      <Button
        onClick={onPublish}
        className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
      >
        Publicar
      </Button>
    </div>
  );
};

export default Toolbar;
