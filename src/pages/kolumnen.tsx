import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import "../assets/fonts.css";
import { MainContent } from "../components/MainContent";
import { Navbar } from "../components/Navbar";
import { UeberMich } from "../components/UeberMich";

const KolumnPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-2 flex justify-center flex-col md:flex-row mx-8">
        <div className="invisible">
          <UeberMich />
        </div>
        <MainContent>
          <h1>Kolumnen</h1>
        </MainContent>
        <UeberMich />
      </div>
    </main>
  );
};

export default KolumnPage;

export const Head: HeadFC = () => <title>TheReporter | Kolumnen</title>;
