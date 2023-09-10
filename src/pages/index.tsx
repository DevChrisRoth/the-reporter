import { Link, type PageProps } from "gatsby";
import * as React from "react";
import { useEffect, useState } from "react";
import "../assets/fonts.css";
import { MainContent } from "../components/MainContent";
import { Navbar } from "../components/Navbar";
import { UeberMich } from "../components/UeberMich";
import { MoreMediumArticles } from "../components/home/MoreMediumArticles";
import { NewestBlogEntry } from "../components/home/NewestBlogEntry";
import { MediumArticle } from "../components/interfaces/ArticleInterface";
const IndexPage: React.FC<PageProps> = () => {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [newestArticle, setNewestArticle] = useState<MediumArticle>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@DevChris01"
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.items);
        setNewestArticle(data.items[0]);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <Navbar />
      <div className="pt-2 flex justify-center flex-col md:flex-row mx-8">
        <div className="invisible">
          <UeberMich />
        </div>
        <MainContent>
          {loading ? (
            <div className="flex justify-center flex-col items-center h-64">
              <img
                src="https://github.com/DevChrisRoth/the-reporter/blob/master/static/loader.gif?raw=true"
                alt="LoadingSpinner"
              />
            </div>
          ) : (
            <div>
              <NewestBlogEntry newestArticle={newestArticle} />
              <div className="pt-12">
                <hr className="border-t-2 mb-1 border-dotted border-[#3C4043]" />
                <hr className="border-t-2 mb-1 border-dotted border-[#3C4043]" />
                <hr className="border-t-2 mb-1 border-dotted border-[#3C4043]" />
              </div>
              <p className="text-center py-2">Mehr Artikel</p>
              <MoreMediumArticles articles={articles} />
              <a
                href="https://medium.com/@DevChris01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center block mt-4 font-normal underline"
              >
                Mehr ansehen
              </a>
            </div>
          )}
        </MainContent>
        <UeberMich />
      </div>
      <Link to="/impressum" className="flex justify-center pt-64 pb-4">
        Impressum
      </Link>
    </main>
  );
};

export default IndexPage;
export function Head() {
  return (
    <>
      <html lang="de" />
      <title>TheReporter | Startseite</title>
    </>
  );
}
