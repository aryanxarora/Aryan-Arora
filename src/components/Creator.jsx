import aryan from "../images/aryan.gif";
import oscarwylee from "../images/covers/oscarwylee.gif";
import noize from "../images/covers/noize.gif";

function Creator() {
  window.scrollTo(0, 0);
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full px-5 lg:px-10">
        <img className="lg:w-2/3 py-5" src={aryan} alt="" />
        <div className="flex justify-between w-full text-[#1412E2] font-mono leading-4 text-sm">
          <div>
            <p>Montreal Based</p>
            <p>Creator</p>
            <p>Editor</p>
            <p>Creative Director</p>
            <p>
              <a href="mailto:aryanxarora@gmail.com">
                <br />
                <strong>work@aryanarora.ca</strong>
              </a>
            </p>
          </div>
          <div className="text-right">
            <p>Content Creation</p>
            <p>Partnerships</p>
            <p>Ad Campaigns</p>
            <p>Production</p>
            <p>Creative Direction</p>
          </div>
        </div>
      </div>
      <div className="px-2 lg:px-8 py-10 lg:py-20 gap-0 columns-5 w-full">
        <a href="https://vimeo.com/892819096">
          <img
            className="rounded-xs p-[2px] lg:p-[5px]"
            src={oscarwylee}
            alt=""
          />
        </a>

        <a href="#">
          <img
            className="rounded-xs p-[2px] lg:p-[5px]"
            src="https://freight.cargo.site/w/360/q/94/i/67f21427ba619a42cd7d65e85c867769c902c6799092859d4e7220b2a3af892c/Mel-Walker---Portfolio---Rhode-low.gif"
            alt=""
          />
        </a>
        <a href="#">
          <img
            className="rounded-xs p-[2px] lg:p-[5px]"
            src="https://freight.cargo.site/w/360/q/94/i/ebad506045b39267bee95a59d8956f45742a018cc59fb60a7bfeb5342e32753f/Mel-Walker---Portfolio---UNI.gif"
            alt=""
          />
        </a>
        <a href="#">
          <img className="rounded-xs p-[2px] lg:p-[5px]" src={noize} alt="" />
        </a>
        <a href="#">
          <img
            className="rounded-xs p-[2px] lg:p-[5px]"
            src="https://freight.cargo.site/w/360/q/94/i/2744e6e347340e4f54071efa2cc40a84dbb44aa2588ef16192bdb018f685303e/Mel-Walker---Portfolio---Rhode---Strawberry-Lip-Peptide.gif"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default Creator;
