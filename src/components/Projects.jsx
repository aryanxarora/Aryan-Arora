import Tile from "./Tile";

function Projects() {
  return (
    <div className="lg:px-20 lg:flex lg:flex-wrap">
      <Tile
        imageUrl={
          "https://drive.google.com/uc?export=view&id=13XgvKXnXB4neG4yXixqc-b9iaJch0roL"
        }
        title={
          "HR MANAGEMENT SYSTEM TO KEEP TRACK OF TEACHERS AND STAFF PAYROLL"
        }
        tag={"Java -- Swing"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        }
      />
      <Tile
        imageUrl={
          "https://drive.google.com/uc?export=view&id=1pPjNyBmk4SzwczoO6qgqHpJuY3o8goUY"
        }
        title={
          "WAREHOUSE INVENTORY MANAGEMENT DATABASE FOR LUXURY ONLINE RETAILER"
        }
        tag={"SQL -- Datagrip"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        }
      />
    </div>
  );
}

export default Projects;
