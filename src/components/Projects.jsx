import Tile from "./Tile";

function Projects() {
  return (
    <div className="lg:flex lg:flex-wrap lg:px-10 2xl:px-20">
      <Tile
        imageUrl={
          "https://raw.githubusercontent.com/aryanxarora/Aryan-Arora/main/src/images/ergofix.png"
        }
        title={"ERGOFIX PHILIPPINES ECOMMERCE STORE"}
        tag={"HTML/CSS/JS"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        }
        repo={"https://ergofix.ph/"}
      />
      <Tile
        imageUrl={
          "https://raw.githubusercontent.com/aryanxarora/Aryan-Arora/main/src/images/hr_system.png"
        }
        title={
          "HR MANAGEMENT SYSTEM TO KEEP TRACK OF TEACHERS AND STAFF PAYROLL"
        }
        tag={"Java — Swing, OOP, Files"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        }
        repo={"https://github.com/aryanxarora/project-hr-management-system"}
      />
      <Tile
        imageUrl={
          "https://raw.githubusercontent.com/aryanxarora/Aryan-Arora/main/src/images/databases.png"
        }
        title={"WAREHOUSE INVENTORY MANAGEMENT DATABASE"}
        tag={"SQL — Datagrip, ERD"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        }
        repo={"https://github.com/aryanxarora/project-hr-management-system"}
      />
      <Tile
        imageUrl={
          "https://raw.githubusercontent.com/aryanxarora/Aryan-Arora/main/src/images/alpha_phi.png"
        }
        title={"ALPHA PHI BETA FRATERNITY WEBSITE"}
        tag={"HTML/CSS/JS"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        }
        repo={"https://alpha-phi-beta.netlify.app/index.html"}
      />
      <Tile
        imageUrl={
          "https://raw.githubusercontent.com/aryanxarora/Aryan-Arora/main/src/images/ai.png"
        }
        title={"SMALL ARTIFICIAL INTELLIGENCE GAMES"}
        tag={"Python — OOP"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        }
        repo={"https://github.com/aryanxarora/dlsu-ai-projects"}
      />
      <Tile
        imageUrl={
          "https://raw.githubusercontent.com/aryanxarora/Aryan-Arora/main/src/images/first.png"
        }
        title={"MY FIRST EVER WEBSITE"}
        tag={"HTML/CSS/JS, Firebase, Netlify"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        }
        repo={"https://aryanxarora.github.io/"}
      />
    </div>
  );
}

export default Projects;
