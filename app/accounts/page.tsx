import { Building, ChevronDown, Plus } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { EntityHeader } from "@/app/components/shared/EntityHeader";

const AccountsPage = () => {
  const actions = (
    <div className="flex items-center gap-2">
      <div className="flex items-center border border-border rounded-md bg-background overflow-hidden shadow-sm mr-2">
        <Button
          variant="ghost"
          className="h-8 font-semibold border-r border-border rounded-none"
        >
          <Plus className="mr-2 h-4 w-4" />
          Follow
        </Button>
      </div>

      <div className="flex items-center gap-1">
        <Button variant="outline" className="h-8 shadow-sm">
          Create Tasks for Contacts
        </Button>
        <Button variant="outline" className="h-8 shadow-sm">
          New Contact
        </Button>
        <Button variant="outline" className="h-8 shadow-sm">
          New Case
        </Button>

        <div className="flex items-center border border-border rounded-md bg-background shadow-sm ml-1 overflow-hidden">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none bg-muted border-r border-border"
          >
            <ChevronDown size={16} />
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-background">
      <EntityHeader
        icon={<Building />}
        title="Burlington Textiles Corp of America"
        subtitle="Accounts"
        actions={actions}
        colorClass="bg-blue-500 dark:bg-blue-600"
      />

      <div className="bg-muted px-6 py-3">
        <div className="flex align-middle justify-start gap-15">
          <div className="flex flex-col  cursor-pointer hover:text-primary transition-colors">
            <span className="text-xs text-muted-foreground font-medium">Type</span>
            <span className="text-sm font-semibold text-foreground">Customer-Direct</span>
          </div>
          <div className="flex flex-col cursor-pointer hover:text-primary transition-colors">
            <span className="text-xs text-muted-foreground font-medium">Phone</span>
            <span className="text-sm font-semibold text-foreground">(336) 222-7000</span>
          </div>
          <div className="flex flex-col cursor-pointer hover:text-primary transition-colors">
            <span className="text-xs text-muted-foreground font-medium">Website</span>
            <span className="text-sm font-semibold text-foreground">www.burlington.com</span>
          </div>
          <div className="flex flex-col cursor-pointer hover:text-primary transition-colors">
            <span className="text-xs text-muted-foreground font-medium">Account Owner</span>
            <span className="text-sm font-semibold text-foreground">Brian Hays</span>
          </div>
          <div className="flex flex-col cursor-pointer hover:text-primary transition-colors">
            <span className="text-xs text-muted-foreground font-medium">Account Site</span>
            <span className="text-sm font-semibold text-foreground">-</span>
          </div>
          <div className="flex flex-col cursor-pointer hover:text-primary transition-colors">
            <span className="text-xs text-muted-foreground font-medium">Industry</span>
            <span className="text-sm font-semibold text-foreground">Apparel</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountsPage;
