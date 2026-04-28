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
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <LeadHeader />

      <div className="flex items-center justify-between bg-blue-800 text-white px-8 py-4 overflow-x-auto">
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

      <div className="flex items-center w-full justify-between p-3 bg-slate-50 border-b border-slate-200">
        <div className="ml-2 flex items-center gap-2 text-sm text-slate-600">
          <span className="font-medium text-slate-900">6 items</span>
          <span className="text-slate-400" aria-hidden="true">
            •
          </span>
          <span>Filtered by Created Date, Me, Total leads</span>
        </div>

        <div className="border border-black/60 rounded-full flex items-center bg-white overflow-hidden shadow-sm">
          <Button
            variant="link"
            className="text-blue-600 px-4 h-9 hover:no-underline hover:bg-slate-100"
          >
            Add to campaign
          </Button>
          <span className="h-6 border-r border-black/60" aria-hidden="true" />
          <Button
            variant="link"
            className="text-blue-600 px-4 h-9 hover:no-underline hover:bg-slate-100"
          >
            Change Status
          </Button>
          <span className="h-6 border-r border-black/60" aria-hidden="true" />
          <Button
            variant="link"
            className="text-blue-600 px-4 h-9 hover:no-underline hover:bg-slate-100"
          >
            Change Owner
          </Button>
          <span className="h-6 border-r border-black/60" aria-hidden="true" />
          <Button
            variant="link"
            className="text-blue-600 px-4 h-9 hover:no-underline hover:bg-slate-100"
          >
            Assign
          </Button>
        </div>
      </div>

      <div className="p-4">
        <div className="rounded-lg border border-slate-200 overflow-hidden shadow-sm">
          <Table className="border-collapse [&_th]:border [&_td]:border [&_th]:border-slate-200 [&_td]:border-slate-200">
            <TableHeader className="bg-slate-50">
              <TableRow>
                {[
                  "Name",
                  "Title",
                  "Company",
                  "Status",
                  "Source",
                  "Last Activity",
                ].map((h) => (
                  <TableHead key={h} className="font-bold text-slate-700">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-slate-900">
                      {h === "Title" && (
                        <Bookmark
                          fill="gray"
                          className="text-gray-600 mr-1"
                          size={14}
                        />
                      )}
                      {h} <ChevronDown size={14} className="text-slate-400" />
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.map((lead) => (
                <TableRow
                  key={lead.id}
                  className="hover:bg-slate-50/80 transition-colors"
                >
                  <TableCell className="font-medium text-blue-600 cursor-pointer hover:underline">
                    {lead.name}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Bookmark size={14} className="text-slate-400" />
                      {lead.title}
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-600">
                    {lead.company}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="font-normal border-slate-300"
                    >
                      {lead.leadStatus}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-600">
                    {lead.leadSource}
                  </TableCell>
                  <TableCell className="text-slate-500 text-sm">
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
