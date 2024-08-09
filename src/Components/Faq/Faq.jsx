import React from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import Fade from "@mui/material/Fade";

const Faq = () => {
     const [expanded, setExpanded] = React.useState(false);

     const handleExpansion = () => {
       setExpanded((prevExpanded) => !prevExpanded);
     };
  return (
    // <section className="xs:block xmd:flex font-DmSans bg-lightorange xs:pt-[120px] xmd:pt-[89px]">
    <section className="xs:block xmd:flex justify-between font-DmSans bg-lightorange xs:pt-[120px] xmd:pt-[89px]">
      <div>
        <div className="flex xs:justify-center xmd:justify-start">
          <h3 className="font-light text-[16px] text-orange border-[1px] bg-lightorange text-center w-[83px] py-[10px] rounded-[10px]">
            FAQs
          </h3>
        </div>

        <h3 className="xs:pt-[24px] xsm:pt-[28px] xs:pb-[94px] xmd:pb-[0px] xmd:pt-[16px] xmd:w-[350px] font-black xs:text-[30px] xsm:text-[36px] xmd:text-[60px] xs:leading-[39px] xsm:leading-[45px]  xmd:leading-[78px] xs:text-center xmd:text-left">
          Frequently Asked Questions
        </h3>
      </div>
      <div className="w-[651px]">
        <Accordion
          className=""
          expanded={expanded}
          onChange={handleExpansion}
          slots={{ transition: Fade }}
          slotProps={{ transition: { timeout: 400 } }}
          sx={{
            width: "100%",
            backgroundColor: "#FFF9F7",
            "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
            "& .MuiAccordionDetails-root": {
              display: expanded ? "block" : "none",
            },
          }}
        >
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            expandIcon={<AddIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h3 className="font-bold text-[14px] w-[268px] font-DmSans">
              How do I get onboarded as a jobseeker?
            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="font-DmSans text-[12px] font-normal w-[527px] leading-[19px]">
              You can download from playstore, create an account, check your
              email for your OTP and fill it in space provided on the mobile
              app. Then build your profile to be easily seen by a recruiter,
              access jobs, apply for jobs easily, get application review updates
              and recruiter feedbacks when you don’t land a job. You would also
              get several job updates as time goes on.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <h3>How do I get onboarded as a recruiter?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p></p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <h3>How can I logout of my account?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p></p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <h3>What if I don't have a CV ?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p></p>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
}

export default Faq