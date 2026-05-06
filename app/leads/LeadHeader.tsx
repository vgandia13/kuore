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
import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogTitle } from "@/components/ui/dialog";

interface LeadHeaderProps {
  layoutMode: "table" | "grid";
  setLayoutMode: (mode: "table" | "grid") => void;
}

const LeadHeader = ({ layoutMode, setLayoutMode }: LeadHeaderProps) => {
  const [view, setView] = useState("Recently Viewed");

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
          <PopoverContent className="w-23 pr-1">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-8 w-18 px-3 font-semibold border-r border-border rounded-md"
                >
                  <DialogTitle className="text-sm">New Lead</DialogTitle>
                </Button>
              </DialogTrigger>
              <DialogContent aria-describedby="" className="max-w-sm">
                <DialogClose asChild>
                  <Button className="w-full">Cancel</Button>
                </DialogClose>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-8 w-18 px-3 font-semibold border-r border-border rounded-md"
                >
                  <DialogTitle className="text-sm">New View</DialogTitle>
                </Button>
              </DialogTrigger>
              <DialogContent aria-describedby="" className="max-w-sm">
                <DialogClose asChild>
                  <Button className="w-full">Cancel</Button>
                </DialogClose>
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
              <Button variant="ghost" onClick={() => setView("All Open Leads")}>
                All Open Leads
              </Button>
              <Button
                variant="ghost"
                onClick={() => setView("My Unread Leads")}
              >
                My Unread Leads
              </Button>
              <Button
                variant="ghost"
                onClick={() => setView("Recently Viewed")}
              >
                Recently Viewed
                <span className="opacity-50 text-xs">(Pinned List)</span>
              </Button>
              <Button
                variant="ghost"
                onClick={() => setView("Recently Viewed Leads")}
              >
                Recently Viewed Leads
              </Button>

              <Button variant="ghost" onClick={() => setView("Today's Leads")}>
                {/*eslint-disable-next-line react/no-unescaped-entities*/}
                Today's Leads
              </Button>
              <Button
                variant="ghost"
                onClick={() => setView("View - Custom 1")}
              >
                View - Custom 1
              </Button>
              <Button
                variant="ghost"
                onClick={() => setView("View - Custom 2")}
              >
                View - Custom 2
              </Button>
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
