import { ColumnDef } from "@/components/shared/RelatedListCard";
import {
  ChevronDown,
  Plus,
  Crown,
  Funnel,
  IdCard,
  BriefcaseBusiness,
  Target,
  Files,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { EntityHeader } from "@/components/shared/EntityHeader";
import RelatedListCard from "@/components/shared/RelatedListCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  InputGroup,
  InputGroupInput,
  InputGroupButton,
} from "@/components/ui/input-group";
import {
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { ButtonGroup } from "@/components/ui/button-group";

const ContactsPage = () => {
  const accountData = [
    { label: "Title", value: "Sales Manager" },
    { label: "Account Name", value: "Get Cloudy" },
    { label: "Phone", value: "775-555-5309" },
    { label: "Email", value: "alan@gogetcloudy.com" },
    { label: "Contact Owner", value: "Pavan Kumar B C" },
  ];

  const opportunitiesData = [
    {
      stage: "Qualification",
      name: "Daquavious Pork",
      title: "Lieutenant",
      email: "pork@example.com",
    },
  ];

  const opportunitiesColumn: ColumnDef<any>[] = [
    { header: "Stage", accessorKey: "stage" },
    { header: "Name", accessorKey: "name" },
    { header: "Title", accessorKey: "title" },
    { header: "Email", accessorKey: "email" },
  ];

  const actions = (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex items-center border border-border rounded-md bg-background overflow-hidden shadow-sm">
        <Button variant="ghost" className="h-8 px-3 text-xs font-semibold">
          <Plus className="mr-2 h-4 w-4" />
          Follow
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-1">
        <Button variant="outline" size="sm" className="h-8 shadow-sm text-xs">
          Edit
        </Button>
        <Button variant="outline" size="sm" className="h-8 shadow-sm text-xs">
          New Case
        </Button>
        <Button variant="outline" size="sm" className="h-8 shadow-sm text-xs">
          New Note
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-md border border-border"
        >
          <ChevronDown size={16} />
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <div className="w-full bg-background">
        <EntityHeader
          icon={<IdCard />}
          title="Alan Johnson"
          subtitle="Contacts"
          actions={actions}
          colorClass="bg-purple-700 dark:bg-purple-500"
        />

        <div className="bg-muted px-4 py-3 overflow-x-auto">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 min-w-max">
            {accountData.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-0.5 cursor-pointer hover:text-primary transition-colors"
              >
                <span className="text-[10px] text-muted-foreground font-semibold uppercase">
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
      <div className="p-4 bg-muted/30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Columna izquierda: Ocupa 2 columnas, contiene Tabs (Related, Details, News) */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="related" className="w-full">
            <TabsList className="border border-border/30 mb-4">
              <TabsTrigger value="related">Related</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
            </TabsList>
            <TabsContent value="related" className="flex flex-col gap-4">
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
              <RelatedListCard
                title={`Cases`}
                count={0}
                icon={<BriefcaseBusiness size={18} />}
                action={
                  <Button variant="outline" size={"sm"}>
                    New
                  </Button>
                }
                data={[]}
                columns={[]}
              />
              <RelatedListCard
                title={`Campaign History`}
                count={0}
                icon={<Target size={18} />}
                action={
                  <Button variant="outline" size={"sm"}>
                    New
                  </Button>
                }
                data={[]}
                columns={[]}
              />
              <RelatedListCard
                title={`Notes & Attachments`}
                count={0}
                icon={<Files size={18} />}
                action={
                  <Button variant="outline" size={"sm"}>
                    New
                  </Button>
                }
                data={[]}
                columns={[]}
              />
            </TabsContent>
            <TabsContent value="details">
              <div className="p-4 bg-background border rounded-lg">
                <p className="text-muted-foreground">
                  Details information will be displayed here.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Columna derecha: Ocupa 1 columna, contiene Tabs (Activity, Chatter) */}
        <div className="md:col-span-1">
          <Tabs defaultValue="activity" className="w-full">
            <TabsList className="border border-border/30 w-full justify-start mb-4">
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="chatter">Chatter</TabsTrigger>
            </TabsList>
            <TabsContent value="activity">
              <div className="bg-background border rounded-lg">
                <Card className="w-full">
                  <CardHeader>
                    <ButtonGroup>
                        
                    </ButtonGroup>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center align-bottom justify-end gap-3">
                      <span>
                        Filters: All time • All activities • All types
                      </span>
                      <Button className="bg-background-muted border border-border py-0.5 px-2">
                        <Funnel
                          fill="muted-foreground"
                          size={9}
                          className="text-border dark:font-extrabold"
                        />
                      </Button>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="upcoming">
                        <AccordionTrigger className="hover:no-underline ml-2">
                          Upcoming & Overdue
                        </AccordionTrigger>
                        <AccordionContent className="h-full flex flex-col items-center">
                          <span className="font-light opacity-60">
                            No next steps.
                          </span>
                          <span className="font-light opacity-60">
                            To get things moving, add a task or set up a
                            meeting.
                          </span>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
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

export default ContactsPage;
