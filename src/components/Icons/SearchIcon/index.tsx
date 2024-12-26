import { SVGProps } from "react";

export const SearchIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 25C20.0751 25 25 20.0751 25 14C25 7.92487 20.0751 3 14 3C7.92487 3 3 7.92487 3 14C3 20.0751 7.92487 25 14 25Z"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30 30L22 22"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1231_3041"
          x1="3.3125"
          y1="3.28571"
          x2="27.4853"
          y2="21.7456"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#189DF8" />
          <stop offset="1" stop-color="#253E7F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1231_3041"
          x1="22.1136"
          y1="22.1039"
          x2="30.9037"
          y2="28.8166"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#189DF8" />
          <stop offset="1" stop-color="#253E7F" />
        </linearGradient>
      </defs>
    </svg>
  );
};
