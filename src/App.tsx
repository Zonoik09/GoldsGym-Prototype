import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LocationProvider } from "./contexts/LocationContext";

import Index from "./pages/Index";
import CountryHills from "./pages/countryhills";
import Douglasdale from "./pages/douglasdale";
import Northgate from "./pages/northgate";
import BuffaloRun from "./pages/buffalo-run";
import VillageSquare from "./pages/village-square";
import PlansMemberships from "./pages/plans-memberships";
import PersonalTraining from "./pages/personal-training";
import Hyrox from "./pages/Hyrox";
import Payment from "./pages/payment";
import Classes from "./pages/classes";
import Tour from "./pages/tour";
import Services from "./pages/services";
import Testimony from "./pages/testimony";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LocationProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/douglasdale" element={<Douglasdale />} />
            <Route path="/countryhills" element={<CountryHills />} />
            <Route path="/northgate" element={<Northgate />} />
            <Route path="/buffalo-run" element={<BuffaloRun />} />
            <Route path="/village-square" element={<VillageSquare />} />
            <Route path="/:location/plans-memberships" element={<PlansMemberships />} />
            <Route path="/:location/personal-training" element={<PersonalTraining />} />
            <Route path="/:location/classes" element={<Classes />} />
            <Route path="/:location/tour" element={<Tour />} />
            <Route path="/:location/services" element={<Services />} />
            <Route path="/:location/testimony" element={<Testimony />} />
            <Route path="/:location/hyrox" element={<Hyrox/>} />
            <Route path="/payment-plans" element={<Payment />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LocationProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
