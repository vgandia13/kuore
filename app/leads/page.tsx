import { PersonStanding, ChevronDown, List, Settings, RotateCw, Grid2X2, TableProperties, Pencil } from "lucide-react";
import { Button } from "../components/ui/button";

const LeadPage = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      <div className="w-full bg-blue-500 h-2" />

      
      <div className="flex items-center justify-between bg-[#F3F3F3] p-3 border-b border-gray-300 shadow-sm">
        
        <div className="flex items-center gap-3">
          <div className="bg-blue-500 p-1.5 rounded-lg flex items-center justify-center shadow-sm">
            <PersonStanding className="text-white" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-gray-600 leading-tight">Leads</span>
            <div className="flex items-center gap-1 cursor-pointer group">
              <h1 className="text-lg font-semibold text-gray-900 leading-none">Intelligence View</h1>
              <ChevronDown size={14} className="text-gray-500 mt-1 group-hover:text-black" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center border border-gray-300 rounded-md bg-white overflow-hidden shadow-sm mr-2">
            <Button variant="ghost" className="h-8 px-3 text-xs font-semibold border-r border-gray-300 rounded-none hover:bg-gray-100">
              New
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none hover:bg-gray-100">
              <ChevronDown size={14} />
            </Button>
          </div>

          <div className="flex items-center gap-0.5">
            <Button variant="outline" size="icon" className="h-8 w-8 bg-white border-gray-300 shadow-sm">
              <RotateCw size={16} className="text-gray-600" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 bg-white border-gray-300 shadow-sm hover:bg-gray-100">
                <Pencil size={16} className="text-gray-600" />
              </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 bg-white border-gray-300 shadow-sm">
              <Settings size={16} className="text-gray-600" />
            </Button>
            
            <div className="flex items-center border border-gray-300 rounded-md bg-white shadow-sm ml-1 overflow-hidden">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none bg-gray-100 border-r border-gray-300">
                <Grid2X2 size={16} className="text-blue-600" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none hover:bg-gray-100">
                <TableProperties size={16} className="text-gray-600" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200 px-6 py-2 flex items-center justify-between">
         <div className="flex items-center gap-4 text-sm text-gray-600 font-medium">
            <span className="cursor-pointer border-b-2 border-blue-600 text-blue-600 pb-1">All Leads</span>
            <span className="cursor-pointer hover:text-blue-600 pb-1">My Leads</span>
         </div>
         <Button variant="ghost" size="sm" className="text-xs text-blue-600 hover:bg-blue-50">
           <List size={14} className="mr-1" /> List View
         </Button>
      </div>
    </div>
  );
};

export default LeadPage;