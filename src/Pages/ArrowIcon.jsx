import React from "react";

const ArrowIcon = (props) => {
  const { val } = props;
  return (
    <svg
      id="hello"
      className={val}
      width="13"
      height="9"
      viewBox="0 0 13 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-[#123678] group-hover:fill-[#52b5b6]"
        d="M6.74316 0.657648L12.7432 6.65623L10.7422 8.65576L6.74316 4.6567L2.74411 8.65576L0.743165 6.65623L6.74316 0.657648Z"
      />
    </svg>
  );
};

export default ArrowIcon;
