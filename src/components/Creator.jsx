import aryan from "../images/aryan.gif";
import oscarwylee from "../images/covers/oscarwylee.gif";
import noize from "../images/covers/noize.gif";
import { useState, useEffect } from "react";

function Creator() {
  const [modalOpen, setModalOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0); // State to store scroll position
  const content = {};
  const [curretContent, setCurrentContent] = useState(null);

  const openModal = (item) => {
    setCurrentContent(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
      window.scrollTo(0, scrollPosition);
    }
  }, [modalOpen, scrollPosition]);

  return (
    <div>
      {modalOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 flex justify-center z-50 pt-12 lg:pt-0 lg:items-center"
          onClick={closeModal}
        >
          <div className="relative">
            <iframe
              src="https://player.vimeo.com/video/892819096?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="360"
              height="640"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Aryan Arora"
            ></iframe>
          </div>
        </div>
      )}
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
        {/* {content.map((item) => (
          <a onClick={openModal(item)} className="cursor-alias">
            <img
              className="rounded-xs p-[2px] lg:p-[5px]"
              src={item.gif}
              alt={item.title}
            />
          </a>
        ))} */}

        <a onClick={openModal} className="cursor-alias">
          <img
            className="rounded-xs p-[2px] lg:p-[5px]"
            src={oscarwylee}
            alt=""
          />
        </a>

        <a onClick={openModal}>
          <img
            className="rounded-xs p-[2px] lg:p-[5px]"
            src="https://freight.cargo.site/w/360/q/94/i/67f21427ba619a42cd7d65e85c867769c902c6799092859d4e7220b2a3af892c/Mel-Walker---Portfolio---Rhode-low.gif"
            alt=""
          />
        </a>
        <a onClick={openModal}>
          <img
            className="rounded-xs p-[2px] lg:p-[5px]"
            src="https://freight.cargo.site/w/360/q/94/i/ebad506045b39267bee95a59d8956f45742a018cc59fb60a7bfeb5342e32753f/Mel-Walker---Portfolio---UNI.gif"
            alt=""
          />
        </a>
        <a onClick={openModal}>
          <img className="rounded-xs p-[2px] lg:p-[5px]" src={noize} alt="" />
        </a>
        <a onClick={openModal}>
          <img
            className="rounded-xs p-[2px] lg:p-[5px]"
            src="https://freight.cargo.site/w/360/q/94/i/2744e6e347340e4f54071efa2cc40a84dbb44aa2588ef16192bdb018f685303e/Mel-Walker---Portfolio---Rhode---Strawberry-Lip-Peptide.gif"
            alt=""
          />
        </a>
      </div>
      <div></div>
    </div>
  );
}

export default Creator;
