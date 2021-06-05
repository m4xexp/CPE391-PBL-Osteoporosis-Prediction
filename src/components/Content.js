import React from "react";

function Content() {
  return (
    <section
      className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24"
      id="content"
    >
      <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
        <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10 rounded-md">
          <img
            src="https://res.cloudinary.com/khaokruacooking/image/upload/v1622842563/PBL/closeup-young-man-with-knee-injury_ipvuab.jpg"
            className="p-2 pl-6 pr-5 xl:pl-10 xl:pr-16"
            alt="oteropolosis"
          />
        </div>

        <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
          <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl font-kanit">
            Osteoporosis
          </h2>
          <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-500 sm:pr-12 xl:pr-32 lg:text-lg">
            Osteoporosis is a disease in which the body has a decrease in bone
            density and mass. causing the bones to deteriorate, become fragile,
            deformed, and easily broken Some people have reduced their height
            because of bone decay. Including may not be able to work or move
            normally, can withstand less weight, shock, or pressure due to the
            pain of internal cracks or a major bone fracture may occur which may
            result in disability in the spine which is the nerve center that
            controls movement.
          </p>
        </div>
      </div>
      <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
        <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
          <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
            Symptoms of osteoporosis.
          </h2>
          <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-500 sm:pr-10 lg:text-lg font-kanit">
            Osteoporosis patients are often aware that they are sick when the
            symptoms are already present. And other indications should be paid
            attention to. to be able to treat promptly as follows:
          </p>
          <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid flex">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg>
              </span>{" "}
              The wrist, arm, hip, and spine are easily fractured. even being
              hit with a mild impact
            </li>
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid flex">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg>
              </span>{" "}
              humpback, or upper spine arching downward.
            </li>
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid flex">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg>
              </span>{" "}
              height drop.
            </li>
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid flex">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg>
              </span>{" "}
              There may also be chronic back pain.
            </li>
          </ul>
        </div>
        <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
          <img
            src="https://res.cloudinary.com/khaokruacooking/image/upload/v1622844277/PBL/sportsman-having-knee-injury-problem-min_fdevkw.jpg"
            className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
            alt="Osteoporosis"
          />
        </div>
      </div>
      <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
        <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
          <img
            src="https://res.cloudinary.com/khaokruacooking/image/upload/v1622844280/PBL/woman-runner-hold-knee-pain-min_nrosiz.jpg"
            className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "
            alt="oteropolosis"
          />
        </div>

        <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
          <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl font-kanit">
            Causes of Osteoporosis.
          </h2>
          <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg font-kanit">
            Certain factors can cause osteoporosis, such as:
          </p>
          <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid flex">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>{" "}
              Age
            </li>
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid flex">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>{" "}
              Hormone
            </li>
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid flex">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>{" "}
              Congenital
            </li>
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid flex">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2 ">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>{" "}
              Disorders in the functioning of glands and organs
            </li>
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid flex">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>{" "}
              Disease and illness
            </li>
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid flex">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>{" "}
              Consumption behavior
            </li>
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid flex">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>{" "}
              Daily behavior
            </li>
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid flex">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>{" "}
              use of certain drugs
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Content;
