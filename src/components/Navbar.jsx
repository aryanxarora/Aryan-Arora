import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  const isCreatorPage = () => {
    return location.pathname === "/creator";
  };

  return (
    <nav className="sticky bg-white top-0 py-5 lg:flex lg:flex-wrap lg:items-center lg:px-0 lg:py-5 z-10">
      {/* Nav Items */}
      <div className="lg:basis-1/3">
        <ul className="flex flex-wrap text-xs font-sans justify-center lg:px-10">
          <li className="pr-5 hover:underline lg:pr-5 2xl:pr-10">
            <Link to="/projects">DEVELOPER</Link>
          </li>
          <li className="pr-5 hover:underline lg:pr-5 2xl:pr-10">
            {/* <Link to="/photography">PHOTOGRAPHY</Link> */}
            <Link to="/creator">CREATOR</Link>
          </li>
          {/* <li className="pr-5 hover:underline lg:pr-5 2xl:pr-10">
            <Link to="/everythingelse">EVERYTHING ELSE</Link>
          </li> */}
          <li className="pr-5 hover:underline lg:pr-5 2xl:pr-10">
            <Link to="/vision">VISIONARY</Link>
          </li>
          <li className="hover:underline">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
      {/* Title */}
      <div className="pt-5 font-bold lg:basis-1/3 lg:p-0">
        <Link to="/">
          {isCreatorPage() ? (
            <h1></h1>
          ) : (
            <h1 className="text-center text-xl">ARYAN ARORA</h1>
          )}
          {/* <h1 className="text-center text-xl">ARYAN ARORA</h1> */}
        </Link>
      </div>
      {/* Right */}
      <div className="lg:basis-1/3"></div>
    </nav>
  );
}

export default Nav;
