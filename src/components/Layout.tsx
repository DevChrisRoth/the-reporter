import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import "../styles/global.scss";

export default function Layout({ children }: any) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `);
  const { copyright } = data.site.siteMetadata;

  return (
    <div className="layout">
      <div className="content">{children}</div>
      <footer>
        <p>{copyright}</p>
      </footer>
    </div>
  );
}
