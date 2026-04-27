import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import LeadHeader from "./LeadHeader";

const LeadPage = () => {

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
    <>
      <LeadHeader />
      <div className="flex align-middle justify-start gap-20 bg-blue-800 text-white p-10">
        <div className="hover:bg-blue-900 rounded-sm p-2">
          Total leads: <br />
          <span className="font-bold">0</span>
        </div>
        <div className="hover:bg-blue-900 rounded-sm p-2">
          No activity <br />
          <span className="font-bold">0</span>
        </div>
        <div className="hover:bg-blue-900 rounded-sm p-2">
          Idle <br />
          <span className="font-bold">0</span>
        </div>
        <div className="hover:bg-blue-900 rounded-sm p-2">
          No upcoming <br />
          <span className="font-bold">0</span>
        </div>
        <div className="hover:bg-blue-900 rounded-sm p-2">
          Overdue <br />
          <span className="font-bold">0</span>
        </div>
        <div className="hover:bg-blue-900 rounded-sm p-2">
          Due today <br />
          <span className="font-bold">0</span>
        </div>
        <div className="hover:bg-blue-900 rounded-sm p-2">
          Upcoming <br />
          <span className="font-bold">0</span>
        </div>
      </div>
      <Table>
        <TableHeader className=" border border-black/40">
          <TableHead className="border border-black/40">Name</TableHead>
          <TableHead className="border border-black/40">Title</TableHead>
          <TableHead className="border border-black/40">Company</TableHead>
          <TableHead className="border border-black/40">Lead Status</TableHead>
          <TableHead className="border border-black/40">Lead Source</TableHead>
          <TableHead className="border border-black/40">Last Activity</TableHead>
        </TableHeader>
        <TableBody>
          {Leads.map((lead) => (
            <TableRow key={lead.name} >
              <TableCell>{lead.name}</TableCell>
              <TableCell>{lead.title}</TableCell>
              <TableCell>{lead.company}</TableCell>
              <TableCell>{lead.leadStatus}</TableCell>
              <TableCell>{lead.leadSource}</TableCell>
              <TableCell>{lead.lastActivity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default LeadPage;
