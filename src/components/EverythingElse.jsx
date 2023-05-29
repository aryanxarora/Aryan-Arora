import Blog from "./Blog";
import blogs from "../models/blogs";

function EverythingElse() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5 md:mx-10 md:gap-10">
      {blogs.map((blog) => (
        <Blog title={blog.title} date={blog.date} paragraph={blog.paragraph} />
      ))}
    </div>
  );
}

export default EverythingElse;
