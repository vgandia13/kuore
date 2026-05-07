"use client";

import { EntityHeader } from "@/components/shared/EntityHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, ChevronDown, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  useDroppable,
  DragOverlay,
  DragStartEvent,
  defaultDropAnimationSideEffects,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export interface opportunityInterface {
  id: string;
  name: string;
  amount: number;
  enterpriseName: string;
  stage: string;
}

const OpportunityCard = ({ item }: { item: opportunityInterface }) => (
  <div className="p-2 border rounded-md bg-card shadow-sm flex flex-col gap-1 cursor-grab opacity-100">
    <div className="font-bold">{item.name}</div>
    <div className="text-sm">€{item.amount.toLocaleString()}</div>
    <div className="text-xs text-muted-foreground">{item.enterpriseName}</div>
  </div>
);

const SortableCard = ({ item }: { item: opportunityInterface }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.3 : 1,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="list-none"
    >
      <OpportunityCard item={item} />
    </li>
  );
};

const KanbanColumn = ({
  title,
  items,
  badgeColor,
  columnId,
}: {
  title: string;
  items: opportunityInterface[];
  badgeColor: string;
  columnId: string;
}) => {
  // Esto convierte la columna en una zona de drop válida
  const { setNodeRef, isOver } = useDroppable({ id: columnId });

  return (
    <Card className="w-full bg-background p-0.5">
      <CardHeader>
        <CardTitle className="text-lg font-bold flex justify-center items-center gap-2">
          <div className={`h-3 w-3 rounded-full ${badgeColor}`} />
          {title}
          <span className="text-sm font-normal text-muted-foreground">
            ({items.length})
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className={`border border-border rounded-xl flex flex-col gap-4 p-1 transition-colors ${
            isOver ? "bg-muted/60" : ""
          }`}
        >
          <SortableContext
            items={items.map((i) => i.id)}
            strategy={verticalListSortingStrategy}
          >
            {/* ref aquí para que toda la columna sea droppable */}
            <ul ref={setNodeRef} className="space-y-2 min-h-50">
              {items.map((item) => (
                <SortableCard key={item.id} item={item} />
              ))}
            </ul>
          </SortableContext>
        </div>
      </CardContent>
    </Card>
  );
};

const COLUMNS = [
  { id: "Opportunities", label: "Opportunities", color: "bg-red-500" },
  { id: "Prospecting", label: "Prospecting", color: "bg-orange-500" },
  { id: "Investigate", label: "Investigate", color: "bg-yellow-500" },
  { id: "Presentation", label: "Presentation", color: "bg-blue-500" },
  { id: "Closed Win", label: "Closed Win", color: "bg-green-500" },
];

const OpportunitiesPage = () => {
  const [items, setItems] = useState<opportunityInterface[]>([
    {
      id: "1",
      name: "Kuore Corp",
      amount: 50000,
      enterpriseName: "Zephyr Co",
      stage: "Opportunities",
    },
    {
      id: "2",
      name: "Get Cloudy",
      amount: 25000,
      enterpriseName: "Cloudy Inc",
      stage: "Opportunities",
    },
  ]);

  const [activeItem, setActiveItem] = useState<opportunityInterface | null>(
    null,
  );

  const totalAmount = items.reduce((acc, item) => acc + item.amount, 0);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const draggedItem = items.find((i) => i.id === active.id);
    if (draggedItem) {
      setActiveItem(draggedItem);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveItem(null);
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    const activeItem = items.find((i) => i.id === activeId);
    if (!activeItem) return;

    // ¿Se soltó sobre una columna directamente?
    const overColumn = COLUMNS.find((c) => c.id === overId);
    if (overColumn) {
      // Cambiar de stage si es distinto
      if (activeItem.stage !== overColumn.id) {
        setItems((prev) =>
          prev.map((item) =>
            item.id === activeId ? { ...item, stage: overColumn.id } : item,
          ),
        );
      }
      return;
    }

    // ¿Se soltó sobre otra tarjeta?
    const overItem = items.find((i) => i.id === overId);
    if (!overItem) return;

    if (activeItem.stage === overItem.stage) {
      // Reordenar dentro de la misma columna
      setItems((prev) => {
        const oldIndex = prev.findIndex((i) => i.id === activeId);
        const newIndex = prev.findIndex((i) => i.id === overId);
        return arrayMove(prev, oldIndex, newIndex);
      });
    } else {
      // Mover a otra columna y colocar junto a la tarjeta destino
      setItems((prev) =>
        prev.map((item) =>
          item.id === activeId ? { ...item, stage: overItem.stage } : item,
        ),
      );
    }
  };
  const handleDragCancel = () => {
    setActiveItem(null);
  };
  const tabs = [
    { label: "Account Name", value: "Zephyr Co." },
    { label: "Close Date", value: "01/01/2018" },
    { label: "Amount", value: `€${totalAmount}` },
    { label: "Opportunity Owner", value: "Christine Mathison" },
  ];

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
      <div className="h-2 w-screen bg-yellow-500 dark:bg-yellow-800" />

      <div className="p-4 bg-muted/40">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragCancel={handleDragCancel}
          onDragEnd={handleDragEnd}
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {COLUMNS.map((col) => (
              <KanbanColumn
                key={col.id}
                columnId={col.id}
                title={col.label}
                items={items.filter((i) => i.stage === col.id)}
                badgeColor={col.color}
              />
            ))}
          </div>
          <DragOverlay
            dropAnimation={{
              sideEffects: defaultDropAnimationSideEffects({
                styles: { active: { opacity: "0.5" } },
              }),
            }}
          >
            {activeItem ? <OpportunityCard item={activeItem} /> : null}
          </DragOverlay>
        </DndContext>
      </div>
    </>
  );
};

export default OpportunitiesPage;
