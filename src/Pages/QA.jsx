import React, { useState } from "react";

const QA = (props) => {
  const { ques, ans, type } = props;
  const [expand, setExpand] = useState(false);

  const handleAcco = () => {
    setExpand(!expand);
  };

  return type === "earn" ? (
    <div
      onClick={() => handleAcco()}
      className="flex cursor-pointer flex-col w-[70vw] md:w-[60vw] gap-2 py-4 border-b-[1px] border-[#6179a5] font-fits"
    >
      <div className=" flex justify-between items-center ">
        <p className="text-base font-normal">{ques}</p>
        {expand ? (
          <div>
            <svg
              className="rotate-180"
              width="17"
              height="10"
              viewBox="0 0 17 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.1113 1.5L8.61133 9L1.11133 1.5"
                stroke="black"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        ) : (
          <div onClick={() => handleAcco()}>
            <svg
              width="17"
              height="10"
              viewBox="0 0 17 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.1113 1.5L8.61133 9L1.11133 1.5"
                stroke="black"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
      <div
        className={` ${
          expand ? `grid-rows-[1fr]` : "grid-rows-[0fr]"
        } duration-300 grid overflow-hidden text-lg font-light`}
      >
        <p className="overflow-hidden">{ans}</p>
      </div>
    </div>
  ) : (
    <div className="flex flex-col font-fits">
      <div className="flex flex-row items-center ">
        {expand ? (
          <div
            className="p-2"
            onClick={() => {
              handleAcco();
            }}
          >
            <svg
              fill="#000000"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              width="10px"
              height="20px"
              viewBox="0 0 83 83"
            >
              <g>
                <path
                  d="M81,36.166H2c-1.104,0-2,0.896-2,2v6.668c0,1.104,0.896,2,2,2h79c1.104,0,2-0.896,2-2v-6.668
		C83,37.062,82.104,36.166,81,36.166z"
                />
              </g>
            </svg>
          </div>
        ) : (
          <div
            onClick={() => {
              handleAcco();
            }}
          >
            <svg
              width="20"
              height="42"
              viewBox="0 0 20 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 20.8333H15.6667M9.83333 26.6667V15"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        )}
        <p className="text-base font-normal">{ques}</p>
      </div>
      <div
        className={` ${
          expand ? `grid-rows-[1fr]` : "grid-rows-[0fr]"
        } duration-300 grid overflow-hidden text-base font-normal text-left ml-6"`}
      >
        <p className="overflow-hidden ml-6">{ans}</p>
      </div>
    </div>
  );
};

export default QA;
