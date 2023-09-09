import React from "react";
import { MediumArticle } from "../interfaces/ArticleInterface";

export const NewestBlogEntry = ({ newestArticle }: MediumArticle) => {
  const renderDate = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("de-DE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const openArticle = () => {
    window.open(newestArticle?.link, "_blank");
  };

  return (
    <div
      onClick={openArticle}
      title="Artikel öffnen"
      className="cursor-pointer"
    >
      <h1 className="pb-8">Neuester Blogbeitrag - Medium.com</h1>
      <img
        src={newestArticle?.thumbnail}
        alt="MediumImage"
        height={200}
        className="rounded-lg"
      />
      <h1 className="text-3xl pt-2">{newestArticle?.title}</h1>
      <span>{renderDate(newestArticle?.pubDate)}</span>
      <p
        className="pt-4 text-ellipsis"
        dangerouslySetInnerHTML={{
          __html:
            newestArticle?.description.replace(/<[^>]+>/g, "").substr(0, 200) +
            " ...",
        }}
      />
      <p className="text-right underline pt-8">Mehr lesen -></p>
    </div>
  );
};
