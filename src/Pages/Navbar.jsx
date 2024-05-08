import React, { useEffect, useRef, useState } from "react";
import icon from "../assets/image 8.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import char from "../assets/Vector (1).png";
import ArrowIcon from "./ArrowIcon";

const Navbar = () => {
  const navigate = useNavigate();
  const divRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, false);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event) => {
    console.log(event.target.id, "heee");
    if (event.target.id !== "hello") {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setDrop(false);
        setShowNav("");
      }
    }
  };

  const [showNav, setShowNav] = useState(false);
  const [drop, setDrop] = useState(false);
  const [mobNav, setMobNav] = useState("");
  const navContent = ["Trade", "Earn", "Academy", "More", "Support"];
  const Trade = [
    { title: "Spot", description: "Lorem ipsum dolor sit amet consectetur." },
    { title: "Margin", description: "Lorem ipsum dolor sit amet consectetur." },
    { title: "Swap", description: "Lorem ipsum dolor sit amet consectetur." },
    {
      title: "Derivatives",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
  ];
  const Academy = [
    { title: "Blogs", description: "Lorem ipsum dolor sit amet consectetur." },
    {
      title: "Tutorials",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  const More = [
    {
      title: "Coin Listing",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      title: "B2B Capital",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
  ];
  const handleNav = (item) => {
    if (item === "Earn") {
      navigate("/earn");
    } else if (item === "login") {
      navigate("/login");
    } else if (item === "Blogs") {
      navigate("/academy");
    } else if (item === "signUp") {
      navigate("/signup");
    } else if (item === "Support") {
      navigate("/support");
    } else if (item === "home") {
      navigate("/");
    } else if (item === "Coin Listing") {
      navigate("/more");
    }
    setShowNav(false);
    setDrop(false);
    setMobNav("");
  };

  const handleDrop = (item) => {
    console.log(item, showNav, "itemmmm");

    if (item === showNav) {
      setShowNav("");
      setDrop(false);
    } else {
      console.log("itemmmm");
      setShowNav(item);
      setDrop(true);
    }
  };
  const handleDrop1 = (item) => {
    if (item === mobNav) {
      setMobNav("");
    } else {
      setMobNav(item);
    }
  };
  console.log("itemmmm ", drop);

  return (
    <>
      {/* // web view// */}
      <motion.div className="md:flex justify-around w-screen bg-[#DCF0F0] fixed top-0 z-50 h-[90px] font-fits font-normal py-4 hidden">
        <div className="fixed w-fit bottom-20 right-20">
          <img src={char} alt="chat" className="" />
        </div>
        <div className="flex items-center cursor-pointer">
          <img
            onClick={() => handleNav("home")}
            src={icon}
            alt="ICON"
            className="lg:w-[160px] lg:h-[44px] w-[150px] h-[35px]"
          />
        </div>
        <div className="text-black text-base flex items-center lg:gap-10 gap-3 relative">
          {drop && (
            <motion.div
              ref={divRef}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.6, ease: "easeIn" }}
              className={`absolute top-[100px] ${
                showNav === "Trade"
                  ? " px-6 py-4"
                  : showNav === "Academy"
                  ? " left-1/2 -translate-x-1/4 px-6 py-4"
                  : showNav === "More"
                  ? " left-3/4 -translate-x-1/4 px-6 py-4"
                  : ""
              }  flex flex-col z-[500] w-[350px] origin-top bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]  rounded-lg gap-5 font-fits text-xl`}
            >
              {showNav === "Trade"
                ? Trade.map((data) => {
                    return (
                      <motion.div
                        className="flex flex-col p-3 rounded cursor-pointer hover:bg-[#123678] text-[#242424]  hover:text-white group"
                        onClick={() => {
                          handleNav(data.title);
                        }}
                      >
                        <p>{data.title}</p>
                        <p className="text-[#828282] group-hover:text-white">
                          {data.description}
                        </p>
                      </motion.div>
                    );
                  })
                : showNav === "Academy"
                ? Academy.map((data) => {
                    return (
                      <motion.div
                        className="flex flex-col p-3 rounded cursor-pointer hover:bg-[#123678] text-[#242424]  hover:text-white group"
                        onClick={() => {
                          handleNav(data.title);
                        }}
                      >
                        <p>{data.title}</p>
                        <p className="text-[#828282] group-hover:text-white">
                          {data.description}
                        </p>
                      </motion.div>
                    );
                  })
                : showNav === "More"
                ? More.map((data) => {
                    return (
                      <motion.div
                        onClick={() => {
                          handleNav(data.title);
                        }}
                        className="flex flex-col p-3 rounded cursor-pointer hover:bg-[#123678] text-[#242424]  hover:text-white group"
                      >
                        <p>{data.title}</p>
                        <p className="text-[#828282] group-hover:text-white">
                          {data.description}
                        </p>
                      </motion.div>
                    );
                  })
                : null}
            </motion.div>
          )}

          {navContent.map((item, index) => {
            return item === "Trade" || item === "Academy" || item === "More" ? (
              <motion.div
                id="hello"
                key={item}
                className="cursor-pointer overflow-x-hidden text-[#123678] font-bold hover:text-[#52b5b6] items-center flex gap-2 group"
                onClick={() => {
                  handleDrop(item);
                }}
              >
                <p id="hello">{item}</p>
                <ArrowIcon
                  val={`${
                    item === showNav
                      ? "rotate-0 duration-200 stroke-[#123678] font-bold group-hover:stroke-[#52b5b6]"
                      : "rotate-180 duration-200 text-[#123678] font-bold hover:text-[#52b5b6]"
                  } `}
                />
              </motion.div>
            ) : (
              <motion.p
                key={item}
                className="cursor-pointer overflow-x-hidden text-[#123678] font-bold hover:text-[#52b5b6]"
                onClick={() => {
                  handleNav(item);
                }}
              >
                {item}
              </motion.p>
            );
          })}
        </div>

        <div className="flex lg:gap-6 gap-3 overflow-x-hidden">
          <motion.button
            onClick={() => {
              handleNav("login");
            }}
            className="bg-transparent hover:bg-[#123678]  hover:text-white border-[#123678] border-4 text-[#123678] lg:px-10 px-4 lg:py-[14px] py-2 rounded-lg"
          >
            Login
          </motion.button>
          <motion.button
            onClick={() => {
              handleNav("signUp");
            }}
            className="bg-[#123678] hover:bg-white text-white border-[#123678] border-4 hover:text-[#123678] lg:px-10 px-4 lg:py-[14px] py-2 rounded-lg"
          >
            Sign Up
          </motion.button>
        </div>
      </motion.div>
      {/* mobile view */}
      <div className="flex fixed top-0 z-[400] h-[70px] w-screen md:hidden justify-around bg-[#DCF0F0] font-fits font-normal py-4">
        <div className="fixed w-fit bottom-20 right-10">
          <img src={char} alt="chat" className="" />
        </div>
        <div className="flex items-center cursor-pointer">
          <img
            onClick={() => handleNav("home")}
            src={icon}
            alt="ICON"
            className="lg:w-[160px] lg:h-[44px] w-[150px] h-[35px]"
          />
        </div>
        <div className="flex cursor-pointer">
          <button
            onClick={() => {
              handleNav("signUp");
            }}
            className="bg-[#123678] text-white px-3 py-1 rounded-lg"
          >
            Sign Up
          </button>
        </div>
        <div
          className="flex items-center justify-center flex-col my-auto"
          onClick={() => setShowNav(!showNav)}
        >
          <svg
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_146_1445)">
              <path
                d="M5.5 1.89185H23"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M5.5 10.8918H23"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M5.5 19.8918H23"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_146_1445"
                x="0"
                y="0.391846"
                width="28.5"
                height="29"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_146_1445"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_146_1445"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      {showNav && (
        <div className=" flex md:hidden  flex-col w-screen fixed bg-white z-[900] top-[70px] left-0  py-3 px-5 gap-4  font-fits text-xl rounded-lg shadow-custom overflow-y-scroll h-full">
          {navContent.map((item, index) => {
            return (
              <div
                onClick={() =>
                  ["Support", "Earn"].includes(item)
                    ? handleNav(item)
                    : handleDrop1(item)
                }
                className="p-2 rounded cursor-pointer z-20"
              >
                <p className="flex justify-between items-center text-[#123678] font-bold hover:text-[#52b5b6]">
                  {item}
                  {["Trade", "Academy", "More"].includes(item) && (
                    <ArrowIcon
                      val={`${
                        item === mobNav
                          ? "rotate-0 duration-200"
                          : "rotate-180 duration-200"
                      } `}
                    />
                  )}
                </p>
                {mobNav === "Trade" && item === mobNav
                  ? Trade.map((data) => {
                      return (
                        <div
                          onClick={() => {
                            handleNav(data.title);
                          }}
                          className="flex flex-col p-3 rounded cursor-pointer hover:bg-[#123678] text-[#242424]  hover:text-white"
                        >
                          <p>{data.title}</p>
                          <p className="text-[#828282]">{data.description}</p>
                        </div>
                      );
                    })
                  : mobNav === "Academy" && item === mobNav
                  ? Academy.map((data) => {
                      return (
                        <div
                          onClick={() => {
                            handleNav(data.title);
                          }}
                          className="flex flex-col p-3 rounded cursor-pointer hover:bg-[#123678] text-[#242424]  hover:text-white"
                        >
                          <p>{data.title}</p>
                          <p className="text-[#828282]">{data.description}</p>
                        </div>
                      );
                    })
                  : mobNav === "More" && item === mobNav
                  ? More.map((data) => {
                      return (
                        <div
                          onClick={() => {
                            handleNav(data.title);
                          }}
                          className="flex flex-col p-3 rounded cursor-pointer hover:bg-[#123678] text-[#242424]  hover:text-white"
                        >
                          <p>{data.title}</p>
                          <p className="text-[#828282]">{data.description}</p>
                        </div>
                      );
                    })
                  : null}
              </div>
            );
          })}
          <p
            onClick={() => handleNav("login")}
            className="text-[#123678] font-bold p-2 rounded cursor-pointer z-20"
          >
            {" "}
            Login{" "}
          </p>
        </div>
      )}
    </>
  );
};

export default Navbar;
