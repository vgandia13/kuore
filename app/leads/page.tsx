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

  const Leads = [
    {
      name: "John Steele",
      title: "Senior VIP",
      company: "BigLife Inc.",
      leadStatus: "Working",
      leadSource: "Trade Show",
      lastActivity: "4/16/2025",
    },
    {
      name: "John Steele",
      title: "Senior VIP",
      company: "BigLife Inc.",
      leadStatus: "Working",
      leadSource: "Trade Show",
      lastActivity: "4/16/2025",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <LeadHeader />

      <div className="flex items-center justify-between bg-blue-800 text-white px-8 py-4">
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
          <span>6 items</span>
          <span className="text-slate-400">•</span>
          <span>Filtered by Created Date, Me, Total leads</span>
        </div>
        <div className="border border-black/60 rounded-full flex items-center bg-white overflow-hidden">
          <Button variant={"link"} className="text-blue-600 px-4 h-9">
            Add to campaign
          </Button>
          <span className="h-6 border-r border-black/60" />
          <Button variant={"link"} className="text-blue-600 px-4 h-9">
            Change Status
          </Button>
          <span className="h-6 border-r border-black/60" />
          <Button variant={"link"} className="text-blue-600 px-4 h-9">
            Change Owner
          </Button>
          <span className="h-6 border-r border-black/60" />
          <Button variant={"link"} className="text-blue-600 px-4 h-9">
            Assign
          </Button>
        </div>
      </div>
      <div className="p-2">
        <Table className="border border-slate-200">
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead className="font-bold text-slate-700">
                <div className="flex items-center gap-1">
                  Name <ChevronDown size={14} />
                </div>
              </TableHead>

              <TableHead className="font-bold text-slate-700">
                <div className="flex items-center gap-2">
                  <Bookmark fill="gray" className="text-gray-600" size={14} />
                  Title <ChevronDown size={14} />
                </div>
              </TableHead>

              <TableHead className="font-bold text-slate-700">
                <div className="flex items-center gap-1">
                  Company <ChevronDown size={14} />
                </div>
              </TableHead>

              <TableHead className="font-bold text-slate-700">
                <div className="flex items-center gap-1">
                  Status <ChevronDown size={14} />
                </div>
              </TableHead>

              <TableHead className="font-bold text-slate-700">
                <div className="flex items-center gap-1">
                  Source <ChevronDown size={14} />
                </div>
              </TableHead>

              <TableHead className="font-bold text-slate-700">
                <div className="flex items-center gap-1">
                  Last Activity <ChevronDown size={14} />
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Leads.map((lead, index) => (
              <TableRow key={index} className="hover:bg-slate-50">
                <TableCell className="font-medium text-blue-600">
                  {lead.name}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Bookmark size={14} /> {lead.title}
                  </div>
                </TableCell>
                <TableCell>{lead.company}</TableCell>
                <TableCell>
                  <Badge variant={"outline"}>{lead.leadStatus}</Badge>
                </TableCell>
                <TableCell>{lead.leadSource}</TableCell>
                <TableCell>{lead.lastActivity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LeadPage;
