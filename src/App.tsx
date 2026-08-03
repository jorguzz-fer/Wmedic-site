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
import LegalDoc from "./pages/LegalDoc.tsx";
import AplicacaoMarca from "./pages/AplicacaoMarca.tsx";
import QuemSomos from "./pages/QuemSomos.tsx";
import NossaMissao from "./pages/NossaMissao.tsx";
import NossosValores from "./pages/NossosValores.tsx";
import InovacaoEmSaude from "./pages/InovacaoEmSaude.tsx";
import OndeEstamos from "./pages/OndeEstamos.tsx";
import Parceiros from "./pages/Parceiros.tsx";
import ParaEmpresas from "./pages/ParaEmpresas.tsx";
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
          {/* Páginas legais individuais (conteúdo compartilhado com /legal) */}
          <Route path="/termos-de-uso" element={<LegalDoc slug="termos-de-uso" />} />
          <Route path="/politica-de-privacidade" element={<LegalDoc slug="politica-de-privacidade" />} />
          <Route path="/contrato-do-cliente" element={<LegalDoc slug="contrato-do-cliente" />} />
          <Route path="/codigo-de-conduta" element={<LegalDoc slug="codigo-de-conduta" />} />
          <Route path="/seguranca-de-dados" element={<LegalDoc slug="seguranca-de-dados" />} />
          {/* Páginas institucionais (base Wow+) */}
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/nossa-missao" element={<NossaMissao />} />
          <Route path="/nossos-valores" element={<NossosValores />} />
          <Route path="/inovacao-em-saude" element={<InovacaoEmSaude />} />
          <Route path="/onde-estamos" element={<OndeEstamos />} />
          <Route path="/parceiros" element={<Parceiros />} />
          <Route path="/para-empresas" element={<ParaEmpresas />} />
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
