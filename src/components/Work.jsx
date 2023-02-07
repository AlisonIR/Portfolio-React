import React from "react";
import shop from "../assets/shop.png";
import photo from "../assets/photo-gal.png";
import Todo from "../assets/to-do-list.png";
import Budget from "../assets/budget.png";
import UI from "../assets/UI.png"

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-[#63283f] bg-[#f0ecf0] ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#8892b0] border-[#f17667]">
            Work
          </p>
          <p className="py-6">//Check out some of my recent work.</p>
        </div>

        {/*Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

          {/*Grid item */}
          <div
            style={{ backgroundImage: `url(${UI})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
          >
            {/*Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                UI Three JS Design
              </span>

              <div className="pt-8 text-center">
                <a href="https://sphere-threejs.netlify.app" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="https://github.com/alsstyles/UI-Three.js-Design/tree/master" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>



          {/*Grid item */}
          <div
            style={{ backgroundImage: `url(${shop })` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
          >
            {/*Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Old Rare BookStore React JS Application
              </span>

              <div className="pt-8 text-center">
                <a href="https://oldrare.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/alsstyles/Shopping-React-Proyect/tree/master"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*Grid item */}
          <div
            style={{ backgroundImage: `url(${Budget})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
          >
            {/*Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Budget Calculator React JS Application
              </span>

              <div className="pt-8 text-center">
                <a href="https://get-your-budget.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/alsstyles/Budget-Calculator-ReactJS/tree/master"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*Grid item */}
          <div
            style={{ backgroundImage: `url(${photo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center  items-center mx-auto content-div "
          >
            {/*Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                Pixis React JS Application
              </span>

              <div className="pt-8 text-center">
                <a href="https://pixiss.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/alsstyles/Photo-Gallery-React/tree/master"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          

          {/*Grid item */}
          <div
            style={{ backgroundImage: `url(${Todo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
          >
            {/*Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                Plan the Day React JS Application
              </span>

              <div className="pt-8 text-center ">
                <a href="https://plantheday.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/alsstyles/To-Do-React/tree/master"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
