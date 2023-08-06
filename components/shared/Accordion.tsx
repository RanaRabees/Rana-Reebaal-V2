import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

/**
 *
 * A simple accordion component used at FAQ page, created by using Material UI package.
 *
 * @param {Array} questions - Array of questions, data comes from strapi. questionTitle is the title, questionDescription is the description.
 *
 */

export default function SimpleAccordion() {
  const [questions] = useState({
    questions: [
      {
        questionTitle: "According No A",
        questionDescription:
          "Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain... Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
      },
      {
        questionTitle: "According No B",
        questionDescription:
          "Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain... Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
      },
      {
        questionTitle: "According No C",
        questionDescription:
          "Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain... Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
      },
      {
        questionTitle: "According No D",
        questionDescription:
          "Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain... Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
      },
    ],
  });

  return (
    <>
      <div className="accordion-style">
        {questions.questions.map((i) => {
          return (
            <Accordion
              elevation={0}
              sx={{
                backgroundColor: "#bae374",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#2d3436" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    color: "#2d3436",
                    fontSize: "20px",
                    fontWeight: "500",
                    lineHeight: "122%",
                    fontFamily: "Visby",
                  }}
                >
                  {i.questionTitle}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    color: "#2d3436",
                    fontSize: "16px",
                    lineHeight: "122%",
                    fontFamily: "Visby",
                  }}
                >
                  {i.questionDescription}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
      <style jsx>
        {`
          .accordion-style {
            padding-top: 5vw;
          }
        `}
      </style>
    </>
  );
}
