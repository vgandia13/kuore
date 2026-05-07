"use client";

import {
  PersonStanding,
  ChevronDown,
  Settings,
  RotateCw,
  Grid2X2,
  TableProperties,
  Pencil,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { EntityHeader } from "@/components/shared/EntityHeader";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export interface LeadInterface {
  id: number;
  name: string;
  title: string;
  company: string;
  leadStatus: string;
  leadSource: string;
  lastActivity: string;
}

interface LeadHeaderProps {
  layoutMode: "table" | "grid";
  setLayoutMode: (mode: "table" | "grid") => void;
  selectedView: ViewInterface;
  setSelectedView: (view: ViewInterface) => void;
  onAddLead?: (lead: LeadInterface) => void;
}

export interface ViewInterface {
  id: number;
  name: string;
  fields: string[];
}

const LeadHeader = ({
  layoutMode,
  setLayoutMode,
  selectedView,
  setSelectedView,
  onAddLead,
}: LeadHeaderProps) => {
  const [view, setView] = useState(selectedView.name);
  const [views, setViews] = useState<ViewInterface[]>([
    {
      id: 1,
      name: "All Open Leads",
      fields: ["Name", "Title", "Company", "Status", "Source", "Last Activity"],
    },
    { id: 2, name: "My Unread Leads", fields: ["Name", "Title", "Company"] },
    { id: 3, name: "Recently Viewed", fields: ["Name", "Last Activity"] },
  ]);
  const [newViewName, setNewViewName] = useState("");
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNewLead, setIsOpenNewLead] = useState(false);
  const [newLead, setNewLead] = useState<Partial<LeadInterface>>({
    name: "",
    title: "",
    company: "",
    leadStatus: "New",
    leadSource: "Web",
    lastActivity: new Date().toLocaleDateString(),
  });

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onAddLead) {
      onAddLead({
        ...newLead,
        id: Date.now(),
      } as LeadInterface);
    }
    setIsOpenNewLead(false);
    setNewLead({
      name: "",
      title: "",
      company: "",
      leadStatus: "New",
      leadSource: "Web",
      lastActivity: new Date().toLocaleDateString(),
    });
    toast.success("Lead creado exitosamente");
  };

  const handleViewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newView: ViewInterface = {
      id: Date.now(),
      name: newViewName,
      fields: selectedFields,
    };
    setViews([...views, newView]);
    setNewViewName("");
    setSelectedFields([]);
    setView(newView.name);
    setSelectedView(newView);
    setIsOpen(false);
    toast.success("Vista creada exitosamente");
  };

  const handleViewSelection = (v: ViewInterface) => {
    setView(v.name);
    setSelectedView(v);
  };

  const handleFieldToggle = (field: string) => {
    setSelectedFields((prev) =>
      prev.includes(field) ? prev.filter((f) => f !== field) : [...prev, field],
    );
  };

  const actions = (
    <>
      <div className="flex items-center border border-border rounded-md bg-background overflow-hidden shadow-sm mr-2">
        <Button
          variant="ghost"
          className="h-8 w-15 px-3 text-xs font-semibold border-r border-border rounded-none"
        >
          New
        </Button>
        <Popover>
          <PopoverTrigger className="h-6 w-6 rounded-none p-0.5 flex items-center justify-center">
            <ChevronDown size={14} />
          </PopoverTrigger>
          <PopoverContent className="w-23 px-2">
            <Dialog open={isOpenNewLead} onOpenChange={setIsOpenNewLead}>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-8 w-19 px-3 font-semibold border-r border-border rounded-md"
                >
                  <DialogTitle className="text-sm">New Lead</DialogTitle>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <form
                  onSubmit={handleLeadSubmit}
                  className="flex flex-col gap-2 p-1"
                >
                  <Field orientation={"horizontal"}>
                    <Label>Name:</Label>
                    <Input
                      value={newLead.name}
                      onChange={(e) =>
                        setNewLead({ ...newLead, name: e.target.value })
                      }
                    />
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Label>Title:</Label>
                    <Input
                      value={newLead.title}
                      onChange={(e) =>
                        setNewLead({ ...newLead, title: e.target.value })
                      }
                    />
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Label>Company:</Label>
                    <Input
                      value={newLead.company}
                      onChange={(e) =>
                        setNewLead({ ...newLead, company: e.target.value })
                      }
                    />
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Label>Status:</Label>
                    <Input
                      value={newLead.leadStatus}
                      onChange={(e) =>
                        setNewLead({ ...newLead, leadStatus: e.target.value })
                      }
                    />
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Label>Source:</Label>
                    <Input
                      value={newLead.leadSource}
                      onChange={(e) =>
                        setNewLead({ ...newLead, leadSource: e.target.value })
                      }
                    />
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Label>Last Activity:</Label>
                    <Input
                      type="date"
                      value={newLead.lastActivity}
                      onChange={(e) =>
                        setNewLead({ ...newLead, lastActivity: e.target.value })
                      }
                    />
                  </Field>
                  <Button variant={"secondary"} type="submit">
                    Create Lead
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-8 w-19 font-semibold border-r border-border rounded-md"
                >
                  <DialogTitle className="text-sm">New View</DialogTitle>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <form
                  onSubmit={handleViewSubmit}
                  className="flex flex-col gap-2 p-1"
                >
                  <Field orientation={"horizontal"}>
                    <Label>View Name:</Label>
                    <Input
                      type="text"
                      value={newViewName}
                      onChange={(e) => setNewViewName(e.target.value)}
                    />
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Checkbox
                      id="name-checkbox"
                      checked={selectedFields.includes("Name")}
                      onCheckedChange={() => handleFieldToggle("Name")}
                    />
                    <Label htmlFor="name-checkbox">Name</Label>
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Checkbox
                      id="title-checkbox"
                      checked={selectedFields.includes("Title")}
                      onCheckedChange={() => handleFieldToggle("Title")}
                    />
                    <Label htmlFor="title-checkbox">Title</Label>
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Checkbox
                      id="company-checkbox"
                      checked={selectedFields.includes("Company")}
                      onCheckedChange={() => handleFieldToggle("Company")}
                    />
                    <Label htmlFor="company-checkbox">Company</Label>
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Checkbox
                      id="status-checkbox"
                      checked={selectedFields.includes("Status")}
                      onCheckedChange={() => handleFieldToggle("Status")}
                    />
                    <Label htmlFor="status-checkbox">Status</Label>
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Checkbox
                      id="source-checkbox"
                      checked={selectedFields.includes("Source")}
                      onCheckedChange={() => handleFieldToggle("Source")}
                    />
                    <Label htmlFor="source-checkbox">Source</Label>
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Checkbox
                      id="lastActivity-checkbox"
                      checked={selectedFields.includes("Last Activity")}
                      onCheckedChange={() => handleFieldToggle("Last Activity")}
                    />
                    <Label htmlFor="lastActivity-checkbox">Last Activity</Label>
                  </Field>
                  <Button variant={"secondary"} type="submit">
                    Create View
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </PopoverContent>
        </Popover>
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
            className={`h-8 w-8 rounded-none border-r border-border ${
              layoutMode === "grid" ? "bg-muted" : ""
            }`}
            onClick={() => setLayoutMode("grid")}
          >
            <Grid2X2
              size={16}
              className={
                layoutMode === "grid"
                  ? "text-blue-500"
                  : "text-muted-foreground"
              }
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`h-8 w-8 rounded-none ${
              layoutMode === "table" ? "bg-muted" : ""
            }`}
            onClick={() => setLayoutMode("table")}
          >
            <TableProperties
              size={16}
              className={
                layoutMode === "table"
                  ? "text-blue-500"
                  : "text-muted-foreground"
              }
            />
          </Button>
        </div>
      </div>
    </>
  );

  const tabs = <></>;

  return (
    <EntityHeader
      icon={<PersonStanding />}
      title={
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="px-0 font-extrabold">
              {view} <ChevronDown size={9} />
            </Button>
          </PopoverTrigger>
          <PopoverContent side="bottom" align="start" className="w-auto">
            <div className="flex flex-col items-start justify-start">
              {views.map((v) => (
                <Button
                  key={v.id}
                  variant="ghost"
                  onClick={() => handleViewSelection(v)}
                >
                  {v.name}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      }
      subtitle="Leads"
      actions={actions}
      tabs={tabs}
      colorClass="bg-blue-500 dark:bg-blue-600"
    />
  );
};

export default LeadHeader;
