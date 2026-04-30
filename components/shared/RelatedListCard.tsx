import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
        <AccordionItem value="item-1">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-muted-foreground">{icon}</div>
              <CardTitle className="text-base font-semibold flex items-center gap-1">
                <AccordionTrigger>
                  {title}
                  <span className="text-sm font-normal text-muted-foreground">
                    ({count})
                  </span>
                </AccordionTrigger>
              </CardTitle>
            </div>
            {action && <div>{action}</div>}
          </CardHeader>

          <CardContent>
            <AccordionContent>
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
