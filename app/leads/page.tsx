import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Bookmark } from "lucide-react";
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
            className="hover:bg-blue-800 rounded-md p-2 transition-colors cursor-pointer"
          >
            <p className="text-xs text-blue-200 uppercase font-semibold">
              {stat.label}
            </p>
            <p className="text-xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="flex align-middle w-full justify-between p-3 bg-slate-50">
        <span className="ml-2 flex items-center gap-6">
          6 items <li>Filtered by Created Date, Me, Total leads</li>
        </span>
        <div className="border border-black/60 rounded-4xl flex items-center divide-x divide-solid divide-black/60">
          <Button variant={"link"} className="text-blue-600 px-4">
            Add to campaign
          </Button>
          <span className="h-8 border-r border-black/60" />
          <Button variant={"link"} className="text-blue-600 px-4">
            Change Status
          </Button>
          <span className="h-8 border-r border-black/60" />
          <Button variant={"link"} className="text-blue-600 px-4">
            Change Owner
          </Button>
          <span className="h-8 border-r border-black/60" />
          <Button variant={"link"} className="text-blue-600 px-4">
            Assign
          </Button>
        </div>
      </div>
      <div className="p-2">
        <Table className="border border-slate-200">
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead className="font-bold text-slate-700">Name</TableHead>
              <TableHead className="font-bold text-slate-700">
                <div className="flex items-center gap-2">
                  <Bookmark fill="gray" className="text-gray-600" size={14} />
                  Title
                </div>
              </TableHead>
              <TableHead className="font-bold text-slate-700">
                Company
              </TableHead>
              <TableHead className="font-bold text-slate-700">Status</TableHead>
              <TableHead className="font-bold text-slate-700">Source</TableHead>
              <TableHead className="font-bold text-slate-700 text-right">
                Last Activity
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Leads.map((lead) => (
              <TableRow key={lead.name} className="hover:bg-slate-50">
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
                <TableCell className="text-right">
                  {lead.lastActivity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LeadPage;
