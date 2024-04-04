import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
        <div>
          <span>{props.link ? props.link : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
    { logoSrc: "bullet.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "MySQL,MongoDB", ratingPercentage: 85 },
    { skill: "Node/Express", ratingPercentage: 89 },
    { skill: "Python", ratingPercentage: 89 },
    { skill: "AWS", ratingPercentage: 70 },
    { skill: "Jenkins,Docker", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "Python", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "A Personal Portfolio website to showcase my Work Experience, Project and Educational details at one place.",
      subHeading: "The website used a frontend email service(EmailJs) and a link to download my resume alongside visiting my linkedIn,Github profiles",
      link:<a target='_blank'
      rel='noopener noreferrer' href="https://chandrimakabiraj.github.io/Portfolio/">Portfolio</a>
    },
    {
      title: "Todo App ",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "This is a CRUD application hosted on AWS cloud (using S3,lambda,API gateway and DynamoDB) and built using React(frontend) and Node(backend).",
      subHeading:
        "Implemented Auth0 authentication through login and logout with frontend hosted on Github pages and backend on cloud",
      link:<a target='_blank'
        rel='noopener noreferrer' href="https://chandrimakabiraj.github.io/Todo-App/">Todo App</a>
    },
    {
      title: "OenAIAPI-React Integration ",
      duration: { fromDate: "2023", toDate: "2024" },
      description:
        "This is created with integration of OpenAI's API with a react frontend application which lets us query prompt to generate proper responses. Hosted on Github pages and the application calls to lambda handler through an API Gateway.",
      subHeading:
        "Next to implement JWT authentication as the use of OpenAI's API requires a paid subscription",
      link:<a target='_blank'
        rel='noopener noreferrer' href="https://chandrimakabiraj.github.io/React-OpenAIAPI-integration/">Todo App</a>
      }
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"St. Thomas' College of Engineering and Technology"}
        subHeading={"BACHELOR OF TECHNOLOGY"}
        description={"Overall CGPA : 8.80 | Location: Kolkata,West Bengal,India"}
        fromDate={"2017"}
        toDate={"2021"}
      />

      <ResumeHeading
        heading={"High School "}
        subHeading={"Bidya Bharati Girls' High School"}
        description={"Overall percentage : 80% | Location: Kolkata,West Bengal,India"}
        fromDate={"2005"}
        toDate={"2017"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="scroll">
      <ResumeHeading
          heading={"THOMSON REUTERS"}
          subHeading={"SOFTWARE ENGINEER"}
          description={`Frontend developer crafting visually appealing and highly responsive user interface that hosts media content and live videos from channels across the Globe.
          I've implemented stream processing solutions using Kafka and Kinesis, enabling real-time data(video) processing for high-throughput application.`}
          fromDate={"Nov,2023"}
          toDate={"Present"}
        />
        <ResumeHeading
          heading={"ELLUCIAN"}
          subHeading={"SOFTWARE ENGINEER I"}
          description={`Working on a product that automates the process of provisioning users from our ERP systems to directory
          servers such as Azure AD, Okta, OpenLdap, AD etc. It provides support for near realtime provisioning as well
          as bulk provisioning.Designing UI components and automation scripts using Playwright to automate enabling,edit,configuring and disabling of extensions.`}
          fromDate={"Nov,2022"}
          toDate={"Nov,2023"}
        />
         <ResumeHeading
          heading={"COGNIZANT"}
          subHeading={"PROGRAMMER ANALYST"}
          description={`Integrated connection to databases both SQL or NoSQL using ORM/ODM clients for efficient and robust backend API’s.
          Designing test automation scripts (invoking UI elements/intercepting API responses) using Playwright to automate regression.Created web applications using Express.js and using it to render a website with live API data.`}
          fromDate={"Sept,2021"}
          toDate={"Oct,2022"}
        />

      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      <div className="scroll">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
          link={projectsDetails.link}
        />
      ))}
      </div>
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/bullet.svg`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
