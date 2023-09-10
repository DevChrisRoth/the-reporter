import { HeadFC, Link } from "gatsby";
import * as React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1>Sorry, die angeforderte Seite konnte nicht gefunden werden</h1>
      <Link to="/" className="underline">
        Zur Startseite
      </Link>
      <img
        src="https://github.com/DevChrisRoth/the-reporter/blob/master/static/404.png"
        alt="ErrorLogo"
      />
    </div>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => (
  <title>The Reporter | Seite nicht gefunden</title>
);
