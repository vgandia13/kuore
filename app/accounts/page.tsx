import {
  Building,
  ChevronDown,
  Network,
  Plus,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";

const AccountsPage = () => {
  return (
    <div className="w-full bg-background">
      <div className="w-full bg-blue-500 dark:bg-blue-700 h-2" />

      <div className="flex items-center justify-between bg-muted p-3 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-blue-400 dark:bg-blue-600 p-1.5 rounded-lg flex items-center justify-center shadow-sm">
            <Building className="text-white" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-muted-foreground leading-tight">
              Accounts
            </span>
            <div className="flex items-center gap-1 cursor-pointer group">
              <h1 className="text-lg font-semibold text-foreground leading-none">
                Burlington Textiles Corp of America
              </h1>
              <Network
                size={25}
                className="text-muted-foreground mt-1 group-hover:text-foreground bg-gray-200 p-1 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center border border-border rounded-md bg-background overflow-hidden shadow-sm mr-2">
            <Button
              variant="ghost"
              className="h-8 w-15 px-10 text-xs font-semibold border-r border-border rounded-none "
            >
              <Plus />
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
      </div>

      <div className="bg-muted px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-16 text-sm text-muted-foreground font-medium">
          <span className="flex flex-col cursor-pointer hover:text-blue-500 pb-1">
            Type<br />Customer-Direct
          </span>
          <span className="flex flex-col cursor-pointer hover:text-blue-500 pb-1">
            Phone <br />(336) 222-7000
          </span>
          <span className="flex flex-col cursor-pointer hover:text-blue-500 pb-1">
            Website<br /> www.burlington.com
          </span>
          <span className="flex flex-col cursor-pointer hover:text-blue-500 pb-1">
            Account Owner<br />Brian Hays
          </span>
          <span className="flex flex-col cursor-pointer hover:text-blue-500 pb-1">
            Account Site<br />
          </span>
          <span className="flex flex-col cursor-pointer hover:text-blue-500 pb-1">
            Industry<br />Apparel
          </span>
        </div>
      </div>
    </div>
  );
};

export default AccountsPage;
