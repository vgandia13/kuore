import { Building, ChevronDown, Crown, Plus, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EntityHeader } from "@/components/shared/EntityHeader";
import RelatedListCard from "@/components/shared/RelatedListCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

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
      <div className="h-2 bg-blue-600 dark:bg-blue-700/80" />
      <div className="p-4 bg-muted/30 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Columna izquierda: Ocupa 2 columnas, contiene Tabs (Related, Details, News) */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="related" className="w-full">
            <TabsList className="border border-border/30 mb-4">
              <TabsTrigger value="related">Related</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
            </TabsList>
            <TabsContent value="related" className="flex flex-col gap-4">
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
            </TabsContent>
            <TabsContent value="details">
              <div className="p-4 bg-background border rounded-lg">
                <p className="text-muted-foreground">
                  Details information will be displayed here.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="news">
              <div className="p-4 bg-background border rounded-lg">
                <p className="text-muted-foreground">
                  News feed will be displayed here.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Columna derecha: Ocupa 1 columna, contiene Tabs (Activity, Chatter) */}
        <div className="lg:col-span-1">
          <Tabs defaultValue="activity" className="w-full">
            <TabsList className="border border-border/30 w-full justify-start mb-4">
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="chatter">Chatter</TabsTrigger>
            </TabsList>
            <TabsContent value="activity">
              <Tabs defaultValue="newTask" className="w-full">
                <TabsList className="border border-border/30 mb-4">
                  <TabsTrigger value="newTask">New Task</TabsTrigger>
                  <TabsTrigger value="logCall">Log a Call</TabsTrigger>
                  <TabsTrigger value="newEvent">New Event</TabsTrigger>
                  <TabsTrigger value="email">Email</TabsTrigger>
                </TabsList>
                <TabsContent value="newTask">
                  <div className="p-4 bg-background border rounded-lg">
                    <Card className="w-full"></Card>
                  </div>
                </TabsContent>
                <TabsContent value="logCall">
                  <div className="p-4 bg-background border rounded-lg">
                    <p className="text-muted-foreground">
                      Log a Call will be displayed here.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="newEvent">
                  <div className="p-4 bg-background border rounded-lg">
                    <p className="text-muted-foreground">
                      New Event will be displayed here.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="email">
                  <div className="p-4 bg-background border rounded-lg">
                    <p className="text-muted-foreground">
                      Email will be displayed here.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </TabsContent>
            <TabsContent value="chatter">
              <div className="p-4 bg-background border rounded-lg">
                <p className="text-muted-foreground text-sm">
                  Chatter feed will be displayed here.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default AccountsPage;
