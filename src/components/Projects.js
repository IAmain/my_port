import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "Figthing-Game": {
        title: "figthing-game",
        desc:
          "A 2D sword fighting online multiplayer game that can be played with friends.",
        techStack: "JavaScript, HTML/CSS",
        link: "https://github.com/IAmain/fighting_game",
        image: "/assets/fight_game.png"
      },
      Truth: {
        title: "Pac-Man",
        desc:
          "Remake of the 1980 maze action video game developed and released by Namco for arcades",
        techStack: "JavaScript",
        link: "https://github.com/IAmain/PacMan",
        
        image: "/assets/pac_man3.png"
      },
      
     
    };
    const projects = {
      "Rest-Country-API": {
        desc:
          "Developed a GUI based application that displays info on all of the world’s countries, allowing users to filter countries as well as getting detailed information on a country.",
        techStack: "Python, Rest Country API",
        link: "https://github.com/IAmain/RestCountryAPI",
        
      },
      "Employee-Management-System": {
        desc:
          "The employee management system assists in the automation of manual operations aswell as a database that allows a user to manipulate employee and position data to create a workplace organizer.",
        techStack: "C++, SQL",
        link: "https://github.com/IAmain/Employee-Management-System",
        
      },
      "Trading Application": {
        desc:
          "Application app written in C++ that automates the buying and selling of stocks based on the current price that users set so that the loss is minimized, and good profit is made.",
        techStack: "C++",
        link:
          "https://github.com/IAmain/Trading-Application"
      },
      "Weather App": {
        desc:
          "A responsive weather web app which automatically loads weather stats based on your location using real-time API.",
        techStack: "Javascript, OpenWeatherMap API, HTML/CSS",
        link: "https://github.com/IAmain/weather_app",
        open: ""
      },
      
      "Music App": {
        desc:
          "Small scale music player that allows you to play some tunes.",
        techStack: "JavaScript, HTML/CSS",
        link: "https://github.com/IAmain/music_app",
        open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ Software-Creations</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
