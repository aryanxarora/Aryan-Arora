function Tile() {
  return (
    <div className="p-5 lg:flex lg:flex-wrap lg:w-2/4">
      {/* Image */}
      <div className="pb-5 lg:pb-0 lg:basis-1/2 cursor-ne-resize">
        <img src={require("../images/hr_system.png")} />
      </div>
      {/* Body */}
      <div className="lg:basis-1/2 lg:pl-5">
        {/* Title */}
        <p className="font-sans lg:text-2xl hover:underline cursor-ne-resize">
          HR MANAGEMENT SYSTEM TO KEEP TRACK OF TEACHERS AND STAFF PAYROLL
        </p>
        {/* Tag */}
        <p className="font-serif text-base">Java -- Swing</p>
        {/* Description */}
        <p className="font-serif lg:pt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
}

export default Tile;
