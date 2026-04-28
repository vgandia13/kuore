"use client";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Bookmark, ChevronDown } from "lucide-react";
import LeadHeader from "./LeadHeader";
import { Button } from "../components/ui/button";

const LeadPage = () => {
  const stats = [
    { label: "Total leads", value: 0 },
    { label: "No activity", value: 0 },
    { label: "Idle", value: 0 },
    { label: "No upcoming", value: 0 },
    { label: "Overdue", value: 0 },
    { label: "Due today", value: 0 },
    { label: "Upcoming", value: 0 },
  ];

  const leads = [
    {
      id: 1,
      name: "John Steele",
      title: "Senior VIP",
      company: "BigLife Inc.",
      leadStatus: "Working",
      leadSource: "Trade Show",
      lastActivity: "4/16/2025",
    },
    {
      id: 2,
      name: "Jane Doe",
      title: "Director",
      company: "TechCorp",
      leadStatus: "New",
      leadSource: "Web",
      lastActivity: "4/17/2025",
    },
    {
      id: 3,
      name: "John Pork",
      title: "CEO",
      company: "BigLife Inc.",
      leadStatus: "Working",
      leadSource: "Trade Show",
      lastActivity: "4/18/2025",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <LeadHeader />

      {/* Stats bar — mantiene su identidad visual de color marca */}
      <div className="flex items-center justify-between bg-blue-800  dark:bg-blue-950 text-white px-8 py-4 overflow-x-auto">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="hover:bg-blue-700/50 rounded-md p-2 transition-colors cursor-pointer px-5"
          >
            <p className="text-xs text-blue-200 uppercase font-semibold">
              {stat.label}
            </p>
            <p className="text-xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center w-full justify-between p-3 bg-muted border-b border-border">
        <div className="ml-2 flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">6 items</span>
          <span className="text-muted-foreground" aria-hidden="true">•</span>
          <span>Filtered by Created Date, Me, Total leads</span>
        </div>

        <div className="border border-border rounded-full flex items-center bg-background overflow-hidden shadow-sm">
          <Button
            variant="link"
            className="text-blue-500 px-4 h-9 hover:no-underline hover:bg-muted"
          >
            Add to campaign
          </Button>
          <span className="h-6 border-r border-border" aria-hidden="true" />
          <Button
            variant="link"
            className="text-blue-500 px-4 h-9 hover:no-underline hover:bg-muted"
          >
            Change Status
          </Button>
          <span className="h-6 border-r border-border" aria-hidden="true" />
          <Button
            variant="link"
            className="text-blue-500 px-4 h-9 hover:no-underline hover:bg-muted"
          >
            Change Owner
          </Button>
          <span className="h-6 border-r border-border" aria-hidden="true" />
          <Button
            variant="link"
            className="text-blue-500 px-4 h-9 hover:no-underline hover:bg-muted"
          >
            Assign
          </Button>
        </div>
      </div>

      <div className="p-4">
        <div className="rounded-lg border border-border overflow-hidden shadow-sm">
          <Table className="border-collapse [&_th]:border [&_td]:border [&_th]:border-border [&_td]:border-border">
            <TableHeader className="bg-muted">
              <TableRow>
                {["Name", "Title", "Company", "Status", "Source", "Last Activity"].map(
                  (h) => (
                    <TableHead key={h} className="font-bold text-foreground">
                      <div className="flex items-center gap-1 cursor-pointer hover:text-foreground/80">
                        {h === "Title" && (
                          <Bookmark
                            fill="currentColor"
                            className="text-muted-foreground mr-1"
                            size={14}
                          />
                        )}
                        {h} <ChevronDown size={14} className="text-muted-foreground" />
                      </div>
                    </TableHead>
                  )
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.map((lead) => (
                <TableRow
                  key={lead.id}
                  className="hover:bg-muted/50 transition-colors"
                >
                  <TableCell className="font-medium text-blue-500 cursor-pointer hover:underline">
                    {lead.name}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Bookmark size={14} className="text-muted-foreground" />
                      {lead.title}
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {lead.company}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-normal">
                      {lead.leadStatus}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {lead.leadSource}
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {lead.lastActivity}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default LeadPage;
