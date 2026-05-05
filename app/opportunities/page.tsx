"use client";

import { EntityHeader } from "@/components/shared/EntityHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { Crown, ChevronDown, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const KanbanColumn = ({
  title,
  items,
  listRef,
  badgeColor,
}: {
  title: string;
  items: string[];
  listRef: React.RefObject<HTMLUListElement>;
  badgeColor: string;
}) => (
  <Card className="w-full bg-background p-0.5">
    <CardHeader>
      <CardTitle className="text-lg font-bold flex justify-center">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="border border-border rounded-xl flex flex-col gap-4 p-1">
        <ul ref={listRef} className="space-y-2 min-h-50">
          {items.map((item) => (
            <li
              key={item}
              className="list-none p-2 border rounded-md bg-card shadow-sm cursor-grab flex justify-between items-center"
            >
              {item} <Badge className={badgeColor} />
            </li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
);

const OpportunitiesPage = () => {
  const [opportunityList, opportunities] = useDragAndDrop<
    HTMLUListElement,
    string
  >(["Kuore Corp", "Get Cloudy", "John Pork & Associates", "Tim Cheese Inc"], {
    group: "kanban",
  });
  const [prospectingList, prospecting] = useDragAndDrop<
    HTMLUListElement,
    string
  >([], { group: "kanban" });
  const [investigateList, investigate] = useDragAndDrop<
    HTMLUListElement,
    string
  >([], { group: "kanban" });
  const [presentationList, presentation] = useDragAndDrop<
    HTMLUListElement,
    string
  >([], { group: "kanban" });
  const [closeList, close] = useDragAndDrop<HTMLUListElement, string>([], {
    group: "kanban",
  });

  const actions = (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        variant="ghost"
        className="h-8 px-3 text-xs font-semibold border border-border rounded-none shadow-sm bg-background"
      >
        <Plus /> Follow
      </Button>
      <div className="flex items-center border border-border rounded-md bg-background overflow-hidden shadow-sm">
        <Button variant="ghost" className="h-8 px-3 text-xs font-semibold">
          Edit
        </Button>
        <Button variant="ghost" className="h-8 px-3 text-xs font-semibold">
          Delete
        </Button>
        <Button variant="ghost" className="h-8 px-3 text-xs font-semibold">
          Clone
        </Button>
        <Button variant="ghost" size="icon" className="h-6 w-6 rounded-none">
          <ChevronDown size={14} />
        </Button>
      </div>
    </div>
  );

  const tabs = [
    {label: "Account Name", value: "Zephyr Co." },
    { label: "Close Date", value: "0/01/2018" },
    {label: "Amount", value: "$256,000"},
    {label: "Opportunity Owner", value: "Christine Mathison" },
  ]

  return (
    <>
      <EntityHeader
        title="Opportunities"
        subtitle="Opportunities"
        icon={<Crown />}
        colorClass="bg-yellow-500 dark:bg-yellow-800"
        actions={actions}
      />
      <div className="bg-muted px-4 py-3 overflow-x-auto">
          <div className="flex flex-wrap items-center gap-x-20 gap-y-2 min-w-max">
            {tabs.map((item) => (
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
      <div className="flex p-4 gap-4 bg-muted/40">
        <KanbanColumn
          title="Opportunities"
          items={opportunities}
          listRef={opportunityList}
          badgeColor="bg-red-500 w-6"
        />
        <KanbanColumn
          title="Prospecting"
          items={prospecting}
          listRef={prospectingList}
          badgeColor="bg-orange-500 w-6"
        />
        <KanbanColumn
          title="Investigate"
          items={investigate}
          listRef={investigateList}
          badgeColor="bg-yellow-500 w-6"
        />
        <KanbanColumn
          title="Presentation"
          items={presentation}
          listRef={presentationList}
          badgeColor="bg-blue-500 w-6"
        />
        <KanbanColumn
          title="Closed Win"
          items={close}
          listRef={closeList}
          badgeColor="bg-green-500 w-6"
        />
      </div>
    </>
  );
};

export default OpportunitiesPage;
