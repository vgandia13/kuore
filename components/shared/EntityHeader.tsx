import React from "react";

interface EntityHeaderProps {
  icon: React.ReactNode;
  title: string | React.ReactNode;
  subtitle: string;
  actions?: React.ReactNode;
  tabs?: React.ReactNode;
  // Usamos colores de Tailwind que mapean a variables globales (ej. primary)
  // o colores específicos si es necesario.
  colorClass?: string;
}

export const EntityHeader = ({
  icon,
  title,
  subtitle,
  actions,
  tabs,
  colorClass = "bg-primary",
}: EntityHeaderProps) => {
  return (
    <div className="w-full bg-background">
      <div className={`w-full ${colorClass} h-2`} />

      <div className="flex items-center justify-between bg-muted p-4 border-b border-border shadow-sm">
        <div className="flex items-center gap-3">
          <div
            className={`${colorClass} dark:opacity-80 p-1.5 rounded-lg flex items-center justify-center shadow-sm`}
          >
            {React.isValidElement(icon) &&
              React.cloneElement(icon, {
                className: "text-white",
                size: 24,
              } as React.SVGAttributes<SVGElement>)}
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-muted-foreground leading-tight">
              {subtitle}
            </span>
            <h1 className="text-lg font-semibold text-foreground leading-none">
              {title}
            </h1>
          </div>
        </div>

        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>

      {tabs && (
        <div className="bg-background border-b border-border px-6 py-2 flex items-center justify-between">
          {tabs}
        </div>
      )}
    </div>
  );
};
