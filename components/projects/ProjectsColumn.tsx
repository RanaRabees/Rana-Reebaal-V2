import React, { useState } from "react";

/**
 *
 * Projects Column from the Work section. Only for mobile
 *
 * @param {Array} projects - All the projects person has done. It has 6 attributes: backgroundColor for background color of the bubble. Type for type of the projects. Title and subtitle of the project. Techs the technologies projects has used. Links is a json with 2 attributes github and website.
 * 
 *
 */
function ProjectsColumn() {
  const [texts] = useState({
    projects: [
      {
        backgroundColor: `#dfe6e940`,
        type: `Website`,
        title: `<strong>O Dine Market</strong>`,
        subtitle:
          "Next.js e-commerce website with a user-friendly interface built with many latest libraries and frameworks",
        techs: "NextJS ReactJs TailwindCSS Ui Shadcn Ui Chakra Vercel TypeScript Javascript",
        links: {
          github: "https://github.com/RanaRabees/Fullstack-Ecommerce-Site",
          website: "https://fullstack-ecommerce-site.vercel.app",
        },
      },
      {
        backgroundColor: `#E4FAFE`,
        type: `Website`,
        title: `<strong>Ecommerce Store</strong>`,
        subtitle:
          "Fully-featured e-commerce platform with Stripe integration and a headless CMS built with Sanity and Drizzle.",
        techs: "NextJs ReactJs TailwindCSS Ui Stripe Sanity Drizzle",
        links: {
          github: "https://github.com/RanaReebaal/Rana-Reebaal-Hackathon",
          website: "https://rana-reebaal-hackathon.vercel.app",
        },
      },
      {
        backgroundColor: `#CCFAED`,
        type: `Website`,
        title: `<strong>Achieve With Me</strong>`,
        subtitle:
          "Achieve With Me is a beautiful website that is designed to help people achieve their dreams.",
        techs: "NextJS ReactJs TailwindCSS Ui Shadcn Ui Typescript Vercel",
        links: {
          github: "https://github.com/RanaReebaal/achieve-with-me",
          website:
            "https://achieve-with-me.vercel.app",
        },
      },
      {
        backgroundColor: `#D5EAFF`,
        type: `Website`,
        title: `<strong>All In One Shopping Mart</strong>`,
        subtitle:
          "Responsive e-commerce website with a modern UI built with Next.js, React.js, and TailwindCSS.",
        techs: "NextJS ReactJs TailwindCSS Ui Shadcn Ui Typescript Vercel",
        links: {
          github: "https://github.com/RanaRabees/All-In-One-Shopping-Mart",
          website: "https://a-i-o-shopping-mart.vercel.app/",
        },
      },
    ],
  });

  /// Returns the items from the projects array.
  return (
    <>
      <div className="column">
        {texts.projects.map((item, i) => {
          return (
            <div
              className="item"
              style={{ backgroundColor: item.backgroundColor }}
            >
              <h1
                dangerouslySetInnerHTML={{
                  __html: item.type,
                }}
              ></h1>
              <h2
                dangerouslySetInnerHTML={{
                  __html: item.title,
                }}
              ></h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: item.subtitle,
                }}
              ></p>
              <span
                dangerouslySetInnerHTML={{
                  __html: item.techs,
                }}
              ></span>
              <div className="row-of-logos">
                {item.links.github != "" ? (
                  <a href="">
                    <img src="/logos/github-mark.png" alt="" />
                  </a>
                ) : null}
                {item.links.website != "" ? (
                  <a href="">
                    <img src="/logos/website.png" alt="" />
                  </a>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .column {
          display: flex;
          flex-direction: column;
          margin-top: 16px;
        }
        h1 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 20px;
          margin-bottom: 5px;
        }
        h2 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 20px;
          margin-bottom: 25px;
        }

        p {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 15px;
          line-height: 20px;
          color: #61616a;
          margin-bottom: 25px;
        }
        .item {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 4vw;
          border-radius: 2vw;
          margin-bottom: 25px;
        }
        .item .row-of-logos {
          display: flex;
          flex-direction: row;
          margin-top: 25px;
        }
        .item .row-of-logos img {
          width: 40px;
          height: 25px;
          object-fit: contain;
        }
      `}</style>
    </>
  );
}

export default ProjectsColumn;
