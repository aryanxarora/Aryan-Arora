function Blog({ title, paragraph }) {
  return (
    <div className="">
      <h1 className="font-serif text-2xl lg:text-3xl 2xl:text-3xl">{title}</h1>
      <p className="font-serif text-sm my-3">May 27, 2023</p>
      <p className="font-sans font-light py-3">{paragraph}</p>
      <hr className="border-slate-300 my-5" />
    </div>
  );
}

export default Blog;
