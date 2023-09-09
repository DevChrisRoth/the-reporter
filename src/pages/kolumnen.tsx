import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { MainContent } from "../components/MainContent";
import { Navbar } from "../components/Navbar";

const KolumnPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-4 flex justify-center">
        <MainContent>
          <h1>Kolumnen</h1>
        </MainContent>
        <div className="ml-4">
          <h2>Über mich</h2>
        </div>
      </div>
    </main>
  );
};

export default KolumnPage;

export const Head: HeadFC = () => <title>TheReporter | Kolumnen</title>;
