import { MainImage } from "gatsby-plugin-image";
import React from "react";
import { MediumArticle } from "./interfaces/ArticleInterface";

const MediumCard = ({ article }: MediumArticle) => {
  const renderDate = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("de-DE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  return (
    <div className="border border-gray-300 rounded-lg h-auto">
      <MainImage
        src={article.thumbnail}
        alt={article.title}
        loading="lazy"
        onClick={() => window.open(article.link, "_blank")}
        className="bg-cover cursor-pointer rounded-t-lg m-auto w-full"
      />
      <div className="px-6 py-4">
        <div className="bg-gray-300/50 p-1 rounded-md w-fit">
          <p className="mb-0">{renderDate(article.pubDate)}</p>
        </div>

        <h3>{article.title}</h3>
        <div className="bg-inherit w-fit rounded-lg py-2 px-6 border border-slate-500 mt-8">
          <a href={article.link}>Mehr lesen</a>
        </div>
      </div>
    </div>
  );
};

export default MediumCard;
