import Blog from "./Blog";

function EverythingElse() {
  var title =
    "Naomi Skwarna Speaks with the Prolific, Trendsetting Knitter Sam Barsky About His Passion and Process";
  var date = "May 27, 2023";
  var paragraph =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus nulla aperiam nam ipsa nostrum ipsam impedit, eius harum perferendis soluta explicabo minima necessitatibus fugiat est! Animi eum nostrum odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus nulla aperiam nam ipsa nostrum ipsam impedit, eius harum perferendis soluta explicabo minima necessitatibus fugiat est! Animi eum nostrum odio.";
  return (
    <div className="gap-10 px-5 columns-1 md:columns-2 lg:columns-3 lg:px-10 my-5">
      <Blog title={title} date={date} paragraph={paragraph} />
      <Blog title={title} date={date} paragraph={paragraph} />
      <Blog title={title} date={date} paragraph={paragraph} />
      <Blog title={title} date={date} paragraph={paragraph} />
      <Blog title={title} date={date} paragraph={paragraph} />
      <Blog title={title} date={date} paragraph={paragraph} />
      <Blog title={title} date={date} paragraph={paragraph} />
      <Blog title={title} date={date} paragraph={paragraph} />
      <Blog title={title} date={date} paragraph={paragraph} />
    </div>
  );
}

export default EverythingElse;
