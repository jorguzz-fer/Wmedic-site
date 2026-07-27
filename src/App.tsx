import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Sobre from "./pages/Sobre.tsx";
import OQueFazemos from "./pages/OQueFazemos.tsx";
import FrentesDeAtuacao from "./pages/FrentesDeAtuacao.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import Contato from "./pages/Contato.tsx";
import Legal from "./pages/Legal.tsx";
import AplicacaoMarca from "./pages/AplicacaoMarca.tsx";
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
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/o-que-fazemos" element={<OQueFazemos />} />
          <Route path="/frentes-de-atuacao" element={<FrentesDeAtuacao />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/legal" element={<Legal />} />
          {/* Página interna de aplicação de marca — não exposta no menu (consulta das equipes) */}
          <Route path="/aplicacao-marca" element={<AplicacaoMarca />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
