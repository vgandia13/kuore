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
import { Button } from "@/app/components/ui/button";
import { EntityHeader } from "@/app/components/shared/EntityHeader";

const LeadHeader = () => {
  const actions = (
    <>
      <div className="flex items-center border border-border rounded-md bg-background overflow-hidden shadow-sm mr-2">
        <Button
          variant="ghost"
          className="h-8 w-15 px-3 text-xs font-semibold border-r border-border rounded-none"
        >
          New
        </Button>
        <Button variant="ghost" size="icon" className="h-6 w-6 rounded-none">
          <ChevronDown size={14} />
        </Button>
      </div>

      <div className="flex items-center gap-1">
        <Button variant="outline" size="icon" className="h-8 w-8 shadow-sm">
          <RotateCw size={16} className="text-muted-foreground" />
        </Button>
        <Button variant="outline" size="icon" className="h-8 w-8 shadow-sm">
          <Pencil size={16} className="text-muted-foreground" />
        </Button>
        <Button variant="outline" size="icon" className="h-8 w-8 shadow-sm">
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
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
            <TableProperties size={16} className="text-muted-foreground" />
          </Button>
        </div>
      </div>
    </>
  );

  const tabs = (
    <>
      <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
        <span className="cursor-pointer border-b-2 border-primary text-primary pb-1">
          All Leads
        </span>
        <span className="cursor-pointer hover:text-primary pb-1 transition-colors">My Leads</span>
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="text-xs text-primary hover:text-primary/90"
      >
        <List size={14} className="mr-1" /> List View
      </Button>
    </>
  );

  return (
    <EntityHeader
      icon={<PersonStanding />}
      title="Intelligence View"
      subtitle="Leads"
      actions={actions}
      tabs={tabs}
    />
  );
};

export default LeadHeader;
