"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

type AccordionProps = {
  type?: "single" | "multiple";
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ItemState = Record<string, boolean>;

const AccordionContext = React.createContext<{
  type: "single" | "multiple";
  collapsible: boolean;
  state: ItemState;
  toggleItem: (value: string) => void;
} | null>(null);

function useAccordion() {
  const ctx = React.useContext(AccordionContext);
  if (!ctx) throw new Error("Accordion compound components must be used within Accordion");
  return ctx;
}

function Accordion({ type = "single", collapsible = true, className, children }: AccordionProps) {
  const [state, setState] = React.useState<ItemState>({});
  const toggleItem = React.useCallback(
    (value: string) => {
      setState((prev) => {
        const isOpen = !!prev[value];
        if (type === "single") {
          if (isOpen && collapsible) return { [value]: false };
          return { [value]: true };
        }
        return { ...prev, [value]: !isOpen };
      });
    },
    [type, collapsible]
  );
  return (
    <AccordionContext.Provider value={{ type, collapsible, state, toggleItem }}>
      <div className={cn("divide-y rounded-md border", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({
  value,
  className,
  children,
}: {
  value: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { state } = useAccordion();
  const open = !!state[value];
  return (
    <div data-open={open} className={cn("data-[open=true]:bg-accent/30", className)}>
      {children}
    </div>
  );
}

function AccordionTrigger({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { toggleItem, state } = useAccordion();
  const open = !!state[value];
  return (
    <button
      type="button"
      aria-expanded={open}
      onClick={() => toggleItem(value)}
      className={cn(
        "flex w-full items-center justify-between gap-3 p-4 text-left text-sm font-medium hover:bg-accent/40 transition",
        className
      )}
    >
      <span>{children}</span>
      <ChevronDown className={cn("size-4 shrink-0 transition-transform", open && "rotate-180")} />
    </button>
  );
}

function AccordionContent({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { state } = useAccordion();
  const open = !!state[value];
  return (
    <div
      role="region"
      className={cn(
        "grid overflow-hidden transition-all",
        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        className
      )}
    >
      <div className="min-h-0 px-4 pb-4 text-sm text-muted-foreground">{children}</div>
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

