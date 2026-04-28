import {
  PersonStanding,
  ChevronDown,
  List,
  Settings,
  RotateCw,
  Grid2X2,
  TableProperties,
  Pencil,
} from "lucide-react";
import { Button } from "../components/ui/button";

const LeadHeader = () => {
  return (
    <div className="w-full bg-background">
      <div className="w-full bg-blue-500 dark:bg-blue-700 h-2" />

      <div className="flex items-center justify-between bg-muted p-3 border-b border-border shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-blue-500 dark:bg-blue-600 p-1.5 rounded-lg flex items-center justify-center shadow-sm">
            <PersonStanding className="text-white" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-muted-foreground leading-tight">
              Leads
            </span>
            <div className="flex items-center gap-1 cursor-pointer group">
              <h1 className="text-lg font-semibold text-foreground leading-none">
                Intelligence View
              </h1>
              <ChevronDown
                size={14}
                className="text-muted-foreground mt-1 group-hover:text-foreground"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center border border-border rounded-md bg-background overflow-hidden shadow-sm mr-2">
            <Button
              variant="ghost"
              className="h-8 w-15 px-3 text-xs font-semibold border-r border-border rounded-none"
            >
              New
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 rounded-none"
            >
              <ChevronDown size={14} />
            </Button>
          </div>

          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 shadow-sm"
            >
              <RotateCw size={16} className="text-muted-foreground" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 shadow-sm"
            >
              <Pencil size={16} className="text-muted-foreground" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 shadow-sm"
            >
              <Settings size={16} className="text-muted-foreground" />
            </Button>

            <div className="flex items-center border border-border rounded-md bg-background shadow-sm ml-1 overflow-hidden">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-none bg-muted border-r border-border"
              >
                <Grid2X2 size={16} className="text-blue-500" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-none"
              >
                <TableProperties size={16} className="text-muted-foreground" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background border-b border-border px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
          <span className="cursor-pointer border-b-2 border-blue-500 text-blue-500 pb-1">
            All Leads
          </span>
          <span className="cursor-pointer hover:text-blue-500 pb-1">
            My Leads
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-xs text-blue-500 hover:text-blue-600"
        >
          <List size={14} className="mr-1" /> List View
        </Button>
      </div>
    </div>
  );
};

export default LeadHeader;
