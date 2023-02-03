import React from "react";
import style from "../styles/aboutus.module.css";
import Accordian from "./Accordian";
import FixedNavbar from "./FixedNavbar";
import HeroSection from "./HeroSection";
import Heading from "./utils/Heading";

const AboutUs = () => {
  const FAQ = [
    {
      title: "How can I let recruiters know that I am open to job offers?",
      description:
        "You can get started by creating your profile and setting your mode to ‘actively looking.’ Once you do that, you’ll get the option to select info like work experience, expected salary, desired job type, and more. This will help companies with relevant job opportunities to contact you.",
    },
    {
      title:
        "Does Coffeee also cater to people looking for part-time or freelance jobs?",
      description:
        "Yes! When you set your mode to ‘Actively Looking,’ you’ll get the option to select your desired job types - full-time, part-time, freelance, and internships. ",
    },
    {
      title: "How do I know that I have been shortlisted for a job?",
      description:
        "Once you have been shortlisted for a job opportunity, the recruiter will directly get in touch with you via your registered mobile phone number and email address. So make sure your contact info is always up-to-date!",
    },
    {
      title:
        "What if I don’t score well on my assessments - can I retake them?",
      description:
        "Don’t stress! You can retake an assessment after a mandatory waiting period of 30 days. We’ve done this to give you enough time to prepare for the test again. Our learning modules will help you ace it! ",
    },
    {
      title: "Can I hide my assessment scores from my profile?",
      description:
        "Sorry! Your test scores will remain visible on your profile. However, if you’re not happy with your performance, you have the option to retake the test after a waiting period of 30 days.",
    },
    {
      title: "I need more answers - how do I get in touch?",
      description:
        "Please write to us at support@coffeee.io, and you’ll hear from us within 48 hours.",
    },
  ];
  return (
    <>
      <FixedNavbar />
      <HeroSection
        title={"Kickstart Your Successful Career As a"}
        coloredTitle={"Developer."}
      />
      <div className={style.aboutus}>
        <div className={style.ourStory}>
          <Heading title={"Our Story"} />
          <p>
            Not too long back, we were a group of young techies just like you,
            with the goal to build an amazing career. While making our way
            through a competitive job market, we wished for a way to find all
            our answers in one place - where we could upskill, get hired, and
            connect with others going through the same journey.
          </p>

          <p>
            We couldn’t find something like that when we needed it - so we
            created it for you!
          </p>

          <p>
            Coffeee is not your typical job portal - it’s a community for you to
            grow, learn, collaborate, and get recruited by your dream company.
            Join in and unlock exciting opportunities - take assessment tests to
            get shortlisted, get advice from experts, or simply chill with
            fellow coders. It’s got everything you need to stay at the top of
            your game.
          </p>
          <img
            className={style.abotusImage}
            src="https://www.coffeee.io/aboutusimg3.png"
            alt=""
          />
        </div>

        {/* frequently asked questions accordian */}
        <div>
          <Heading title={"Frequently Asked Questions"} />
          {FAQ.map((question, index) => {
            return (
              <Accordian
                key={index}
                title={question.title}
                description={question.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
