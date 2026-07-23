import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Serviços from "./pages/Servicos.tsx";
import ParaVocê from "./pages/ParaVoce.tsx";
import ParaEmpresas from "./pages/ParaEmpresas.tsx";
import Institucional from "./pages/Institucional.tsx";
import Legal from "./pages/Legal.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import Contato from "./pages/Contato.tsx";
import Consultor from "./pages/Consultor.tsx";
import NR1 from "./pages/NR1.tsx";
import ParaEntidades from "./pages/ParaEntidades.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/serviços" element={<Serviços />} />
          <Route path="/para-você" element={<ParaVocê />} />
          <Route path="/para-empresas" element={<ParaEmpresas />} />
          <Route path="/institucional" element={<Institucional />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/consultor" element={<Consultor />} />
          <Route path="/nr1" element={<NR1 />} />
          <Route path="/para-entidades" element={<ParaEntidades />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
