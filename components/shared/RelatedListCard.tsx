import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Separator } from "../ui/separator";

export interface ColumnDef<T> {
  header: string;
  accessorKey: keyof T;
}

interface RelatedListCardProps<T> {
  title: string;
  count: number;
  icon: React.ReactNode;
  action?: React.ReactNode;
  data: T[];
  columns: ColumnDef<T>[];
}

const RelatedListCard = <T,>({
  title,
  count,
  icon,
  action,
  data,
  columns,
}: RelatedListCardProps<T>) => {
  return (
    <Card className="shadow-md">
      <Accordion type="single" collapsible>
        {/* Le quitamos el 'relative' al AccordionItem */}
        <AccordionItem value="item-1">
          {/* NUEVO: Contenedor relativo exclusivo para la zona de la cabecera */}
          <div className="relative">
            {/* La acción se posiciona y se centra SOLO respecto a la altura de este div */}
            {action && (
              <div className="absolute right-12 top-0 bottom-0 flex items-center z-10">
                {action}
              </div>
            )}

            <AccordionTrigger className="w-full hover:no-underline py-4 px-6 pr-32">
              <div className="flex items-center gap-2">
                <div className="text-muted-foreground">{icon}</div>
                <CardTitle className="text-base font-semibold flex items-center gap-1">
                  {title}
                  <span className="text-sm font-normal text-muted-foreground">
                    ({count})
                  </span>
                </CardTitle>
              </div>
            </AccordionTrigger>
          </div>

          <CardContent>
            <AccordionContent className="h-auto">
              <Separator className="my-2" />
              {data.length === 0 ? (
                <div className="flex justify-center p-6 text-sm text-muted-foreground">
                  No items to display
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      {columns.map((col: ColumnDef<T>) => (
                        <TableHead
                          key={col.accessorKey as string}
                          className="text-xs"
                        >
                          {col.header}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.map((row: T, rowIndex: number) => (
                      <TableRow key={rowIndex}>
                        {columns.map((col: ColumnDef<T>) => (
                          <TableCell key={col.accessorKey as string}>
                            {String(row[col.accessorKey] ?? "-")}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </AccordionContent>
          </CardContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default RelatedListCard;
