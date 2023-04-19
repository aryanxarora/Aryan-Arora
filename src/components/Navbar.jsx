function Nav() {
  return (
    <nav className="sticky bg-white top-0 py-5 lg:flex lg:flex-wrap lg:items-center lg:px-0 lg:py-5">
      {/* Nav Items */}
      <div className="lg:basis-1/3">
        <ul className="flex flex-wrap text-xs font-sans justify-center lg:px-10">
          <li className="pr-5 hover:underline lg:pr-10">
            <a href="#">PROJECTS</a>
          </li>
          <li className="pr-5 hover:underline lg:pr-10">
            <a href="#">PHOTOGRAPHY</a>
          </li>
          <li className="pr-5 hover:underline lg:pr-10">
            <a href="#">EVERYTHING ELSE</a>
          </li>
          <li className="hover:underline">
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </div>
      {/* Title */}
      <div className="pt-5 font-bold lg:basis-1/3 lg:p-0">
        <h1 className="text-center text-xl">ARYAN ARORA</h1>
      </div>
      {/* Right */}
      <div className="lg:basis-1/3"></div>
    </nav>
  );
}

export default Nav;
