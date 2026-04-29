import { Building, ChevronDown, Crown, Plus, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EntityHeader } from "@/components/shared/EntityHeader";
import RelatedListCard from "@/components/shared/RelatedListCard";

const AccountsPage = () => {
  const accountData = [
    { label: "Type", value: "Customer-Direct" },
    { label: "Phone", value: "(336) 222-7000" },
    { label: "Website", value: "www.burlington.com" },
    { label: "Account Owner", value: "Brian Hays" },
    { label: "Account Site", value: "-" },
    { label: "Industry", value: "Apparel" },
  ];

  const contactsData = [
    { id: 1, name: "Mark Steele", title: "CEO", email: "mark@example.com" },
    { id: 2, name: "John Pork", title: "Manager", email: "pork@example.com" },
    { id: 3, name: "Tim Cheese", title: "Engineer", email: "tim@example.com" },
  ];

  const opportunitiesData = [
    {
      stage: "Qualification",
      name: "John Doe",
      title: "Sales Assistant",
      email: "mark@example.com",
    },
    {
      stage: "Qualification",
      name: "Michael Mouse",
      title: "CEO",
      email: "mike@example.com",
    },
  ];

  const contacsColumn = [
    { header: "Name", accessorKey: "name" },
    { header: "Title", accessorKey: "title" },
    { header: "Email", accessorKey: "email" },
  ];

  const opportunitiesColumn = [
    { header: "Stage", accessorKey: "stage" },
    { header: "Name", accessorKey: "name" },
    { header: "Title", accessorKey: "title" },
    { header: "Email", accessorKey: "email" },
  ];

  const actions = (
    <div className="flex items-center gap-2">
      <div className="flex items-center border border-border rounded-md bg-background overflow-hidden shadow-sm mr-2">
        <Button
          variant="ghost"
          className="h-8 px-3 text-xs font-semibold border-r border-border rounded-md"
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
    <>
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
      <div className="h-2 bg-blue-600" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 bg-muted/30">
        <div className="lg:col-span-2 flex flex-col gap-4">
          <RelatedListCard
            title={"Contacts"}
            count={contactsData.length}
            icon={<User size={18} />}
            action={
              <Button variant="outline" size={"sm"}>
                New
              </Button>
            }
            data={contactsData}
            columns={contacsColumn}
          />
          <RelatedListCard
            title={`Opportunities`}
            count={opportunitiesData.length}
            icon={<Crown size={18} />}
            action={
              <Button variant="outline" size={"sm"}>
                New
              </Button>
            }
            data={opportunitiesData}
            columns={opportunitiesColumn}
          />
        </div>
        <div className="lg:cols-span-1"></div>
      </div>
    </>
  );
};

export default AccountsPage;
