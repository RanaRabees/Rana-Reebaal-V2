/**
 *
 * Footer
 *
 * @param {String} text - Footer text
 *
 */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { footer } from "./lib/global";
import Image from "next/image";


export default function CommonFooter() {
  return (
    <>
      {/* <footer className="flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg">
        <div className="w-full max-w-4xl m-auto grid grid-cols-2 sm:grid-cols-3 justify-between items-start">
          {footer.columns.map((item: any, index: any) => {
            return (
              <div key={index} className="text-left mb-5 sm:mb-0">
                <h4 className="uppercase text-fun-gray text-sm font-bold">
                  {item.title}
                </h4>
                <div>
                  {item.links.map((item: any, index: any) => {
                    return (
                      <div key={index} className="my-4">
                        {item.leavesWebsite ? (
                          <a
                            href={item.link}
                            target="_blank"
                            className="items-center flex"
                          >
                            {item.icon && (
                              <span className="pr-2 -mb-1">
                                <Image src={item.icon} width={20} height={20} alt={""} />
                              </span>
                            )}
                            {item.name}
                          </a>
                        ) : (
                          <Link href={item.link}>{item.name}</Link>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div className="text-center col-span-2 sm:col-auto sm:text-left pt-8 sm:mt-0 sm:pt-0 text-fun-gray border-t border-fun-pink-dark sm:border-0">
            <h4 className="uppercase text-fun-gray text-sm font-bold">
              Support My Work
            </h4>
            <div className="space-y-2 mt-4 w-full flex items-center sm:items-start flex-col">
              {footer.support.buymeacoffee !== "" && (
                <div>
                  <a
                    href={`https://buymeacoffee.com/${footer.support.buymeacoffee}`}
                    target="_blank"
                  >
                    <img
                      src="/misc/buy-me-a-coffee.svg"
                      className="h-12 mr-2 hover:opacity-80 opacity-100 transition-opacity"
                    />
                  </a>
                </div>
              )}
              <p className="text-fun-gray text-xs pt-1">
                {footer.support.message}
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark">
          <p className="flex flex-col items-center justify-center ">
            <div className="mt-2 text-md ">
              Made by{" "}
              <a
                href="mailto:YourName@gmail.com"
                className="text-fun-gray-light font-medium"
              >
                Rana Reebaal
              </a>
              . All rights reserved.
            </div>
          </p>
        </div>
      </footer> */}
      <footer>
        <hr className="solid" />
        <h2>Built by Rana Reebaal.</h2>
      </footer>
      <style jsx>{`
        footer {          
          padding-bottom: 10px;
          margin: auto;
          text-align: center;
        }

        footer h2 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 200;
          font-size: 0.8873vw;
          line-height: 140%;
          color: #2d3436;
          padding-top: 1vw;
        }

        @media screen AND (max-width: 526px) {
          footer {
            width: 100%;
            padding: 0;
            padding-top: 2vh;
          }
          footer h2 {
            font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
              Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji";
            font-style: normal;
            font-weight: 200;
            font-size: 2.8873vw;
            line-height: 140%;
            color: #2d3436;
            padding-top: 1vw;
          }
        }
      `}</style>
      <style global jsx>
        {`
          footer .page-links .col a {
            color: var(--title-color);
            flex: 1;
            // margin-bottom: 8px;
          }

          footer div.store-links a img {
            height: 38px;
          }
        `}
      </style>
    </>
  );
}
