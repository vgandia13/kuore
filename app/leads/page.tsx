import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Bookmark } from "lucide-react";
import LeadHeader from "./LeadHeader";

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

      {/* Tabla con diseño más limpio */}
      <div className="p-4">
        <Table className="border border-slate-200">
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead className="font-bold text-slate-700">Name</TableHead>
              <TableHead className="font-bold text-slate-700">
                <div className="flex items-center gap-2">
                  <Bookmark size={14} />
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
                <TableCell>{lead.title}</TableCell>
                <TableCell>{lead.company}</TableCell>
                <TableCell>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                    {lead.leadStatus}
                  </span>
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
