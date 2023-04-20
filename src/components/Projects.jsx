import Tile from "./Tile";

function Projects() {
  return (
    <div className="lg:px-20 lg:flex lg:flex-wrap">
      <Tile
        imageUrl={
          "https://raw.githubusercontent.com/aryanxarora/portfolio/main/src/images/hr_system.png"
        }
        title={
          "HR MANAGEMENT SYSTEM TO KEEP TRACK OF TEACHERS AND STAFF PAYROLL"
        }
        tag={"Java — Swing, OOP, Files"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        }
      />
      <Tile
        imageUrl={
          "https://raw.githubusercontent.com/aryanxarora/portfolio/main/src/images/databases.png"
        }
        title={
          "WAREHOUSE INVENTORY MANAGEMENT DATABASE FOR LUXURY ONLINE RETAILER"
        }
        tag={"SQL — Datagrip, ERD, Create + Insert"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        }
      />
    </div>
  );
}

export default Projects;
