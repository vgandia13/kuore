"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";

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
              {item} <Badge className={badgeColor}/>
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
  >(["Kuore Corp", "Get Cloudy", "John Pork & Associates"], {
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

  return (
    <>
      <div className="flex p-4 gap-4 bg-muted/20 min-h-screen">
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
          title="Close"
          items={close}
          listRef={closeList}
          badgeColor="bg-green-500 w-6"
        />
      </div>
    </>
  );
};

export default OpportunitiesPage;
