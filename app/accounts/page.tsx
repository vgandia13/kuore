import { Building, ChevronDown, Plus } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { EntityHeader } from "@/app/components/shared/EntityHeader";

const AccountsPage = () => {
  const accountData = [
    { label: "Type", value: "Customer-Direct" },
    { label: "Phone", value: "(336) 222-7000" },
    { label: "Website", value: "www.burlington.com" },
    { label: "Account Owner", value: "Brian Hays" },
    { label: "Account Site", value: "-" },
    { label: "Industry", value: "Apparel" },
  ];

  const actions = (
    <div className="flex items-center gap-2">
      <div className="flex items-center border border-border rounded-md bg-background overflow-hidden shadow-sm mr-2">
        <Button
          variant="ghost"
          className="h-8 px-10 text-xs font-semibold border-r border-border rounded-none"
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
        <div className="flex justify-start items-center align-middle gap-16">
          {accountData.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-1 cursor-pointer hover:text-primary transition-colors"
            >
              <span className="text-xs text-muted-foreground font-medium">
                {item.label}
              </span>
              <span className="text-sm font-semibold text-foreground">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountsPage;
