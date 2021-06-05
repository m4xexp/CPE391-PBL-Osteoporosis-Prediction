import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

function Landing() {
  const { t } = useTranslation();
  //   const changeLang = () => {
  //     i18n.changeLanguage("th");
  //   };

  return (
    <section className="px-2 py-12 bg-white md:px-0" id="home">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl text-left">
                <span className="block my-4">{t("Welcome to Diagnos")}</span>
                <span className="block my-4 text-blue-500 xl:inline" id="">
                  The osteoporosis prediction.
                </span>
              </h1>

              <p
                className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl text-left"
                id=""
              >
                Osteoporosis is now a national problem that is increasing day by
                day due to the increasing number of the elderly population. It
                is truly a "silent threat" because patients are unaware that
                they have osteoporosis. Since they did not find any symptoms
                until they fell and had a "broken bone", so they knew they have
                "Osteoporosis"
              </p>
              <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                <Link
                  to="predict"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-blue-500 rounded-md sm:mb-0 hover:bg-blue-700 sm:w-auto cursor-pointer"
                >
                  Analytics
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19" className=""></polyline>
                  </svg>
                </Link>
                <Link
                  to="content"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600 cursor-pointer"
                >
                  About
                </Link>
                {/* <button onClick={changeLang}>TH</button> */}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full h-auto overflow-hidden rounded-md sm:rounded-xl">
              <img
                src="https://res.cloudinary.com/khaokruacooking/image/upload/v1622844466/PBL/Doctor_1_iemc41.svg"
                className=""
                id=""
                alt="home-chibli"
              />
            </div>
          </div>
        </div>
        {/* <div>{Done ? null : <LoadingAni w={300} h={300} />}</div> */}
      </div>
    </section>
  );
}

export default Landing;
