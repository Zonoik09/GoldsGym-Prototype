import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import CountryHills from "./pages/CountryHills";
{/*import Douglasdale from "./pages/Douglasdale";
import Northgate from "./pages/Northgate";
import BuffaloRun from "./pages/BuffaloRun";
import VillageSquare from "./pages/VillageSquare";
import NotFound from "./pages/NotFound";*/}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/country-hills" element={<CountryHills />} />
          {/*<Route path="/douglasdale" element={<Douglasdale />} />
          <Route path="/northgate" element={<Northgate />} />
          <Route path="/buffalo-run" element={<BuffaloRun />} />
          <Route path="/village-square" element={<VillageSquare />} />
          <Route path="*" element={<NotFound />} />*/}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
