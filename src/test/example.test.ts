import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

describe("WMedic routes", () => {
  const app = readFileSync("src/App.tsx", "utf-8");

  it("registers the new WMedic routes", () => {
    for (const path of ["/sobre", "/o-que-fazemos", "/frentes-de-atuacao", "/blog", "/contato", "/legal"]) {
      expect(app).toContain(`path="${path}"`);
    }
  });

  it("does not reference removed Wowmais pages", () => {
    for (const gone of ["ParaVoce", "ParaEmpresas", "ParaEntidades", "Consultor", "NR1", "Servicos"]) {
      expect(app).not.toContain(gone);
    }
  });
});
