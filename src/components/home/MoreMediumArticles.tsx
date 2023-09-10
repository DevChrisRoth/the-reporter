import React from "react";
import { MediumArticle } from "../interfaces/ArticleInterface";

export const MoreMediumArticles = ({ articles }: MediumArticle[]) => {
  const renderDate = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("de-DE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const openArticle = (link: string) => {
    window.open(link, "_blank");
  };

  //generate a list with the next 3 articles in a row
  const nextArticles = articles
    .slice(1, 4)
    .map((article: MediumArticle, index: number) => (
      <div
        key={index}
        className="cursor-pointer flex flex-col h-full"
        onClick={() => openArticle(article.link)}
      >
        <img
          src={article.thumbnail}
          alt={article.title}
          className="rounded-lg object-cover h-32"
        />
        <div className="flex flex-col">
          <div className="flex flex-col justify-between">
            <h1 className="text-xl pt-2 whitespace-nowrap overflow-hidden text-ellipsis">
              {article.title}
            </h1>
            <div className="flex justify-between">
              <p className="text-sm text-gray-400">
                {renderDate(article.pubDate)}
              </p>
            </div>
          </div>
          <p
            className=" text-ellipsis"
            dangerouslySetInnerHTML={{
              __html:
                article.description.replace(/<[^>]+>/g, "").substr(0, 100) +
                " ...",
            }}
          />
        </div>
      </div>
    ));
  return (
    <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-4 pt-4">
      {nextArticles}
    </div>
  );
};
