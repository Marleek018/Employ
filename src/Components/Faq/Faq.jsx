import React from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";

const Faq = () => {
     const [expanded, setExpanded] = React.useState(false);

     const handleExpansion = () => {
       setExpanded((prevExpanded) => !prevExpanded);
     };
  return (
    <section className="flex font-DmSans">
      <div>
        <h3 className="font-light text-[16px] text-orange border-[1px] bg-lightorange text-center w-[83px] py-[10px] rounded-[10px]">
          FAQs
        </h3>
        <h3 className="font-black text-[60px] leading-[78px]">
          Frequently <br /> Asked <br /> Questions
        </h3>
      </div>
      <div>
        <Accordion
          expanded={expanded}
          onChange={handleExpansion}
          slots={{ transition: Fade }}
          slotProps={{ transition: { timeout: 400 } }}
          sx={{
            "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
            "& .MuiAccordionDetails-root": {
              display: expanded ? "block" : "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>How do I get onboarded as a jobseeker?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can download from playstore, create an account, check your
              email <br /> for your OTP and fill it in space provided on the mobile
              app. Then build <br /> your profile to be easily seen by a recruiter,
              access jobs, apply for jobs <br /> easily, get application review updates
              and recruiter feedbacks when <br /> you don’t land a job. You would also
              get several job updates as time <br /> goes on.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Default transition using Collapse</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
}

export default Faq