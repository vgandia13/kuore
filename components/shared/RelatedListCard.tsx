import React from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

interface ColumnDef {
  header: string;
  accessorKey: string; 
}

interface RelatedListCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  action?: React.ReactNode;
  data: any[]; 
  columns: ColumnDef[];
}

const RelatedListCard = ({ 
  title, 
  count, 
  icon, 
  action, 
  data, 
  columns 
}: RelatedListCardProps) => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between py-3 px-4 border-b">
        <div className="flex items-center gap-2">
          <div className="text-muted-foreground">{icon}</div>
          <CardTitle className="text-base font-semibold flex items-center gap-1">
            {title}
            <span className="text-sm font-normal text-muted-foreground">
              ({count})
            </span>
          </CardTitle>
        </div>
        {action && <div>{action}</div>}
      </CardHeader>

      <CardContent className="p-0">
        {data.length === 0 ? (
          <div className="flex justify-center p-6 text-sm text-muted-foreground">
            No items to display
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((col) => (
                  <TableHead key={col.accessorKey} className="text-xs">
                    {col.header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((col) => (
                    <TableCell key={col.accessorKey} className="text-sm py-2">
                      {row[col.accessorKey] || "-"}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
};

export default RelatedListCard;