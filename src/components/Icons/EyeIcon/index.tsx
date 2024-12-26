import { SVGProps } from "react";

export const EyeIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_935_4986)">
        <path d="M24 38.5C14.2827 38.5 5.9719 32.4992 2.53833 24C5.9719 15.5008 14.2827 9.5 24 9.5C33.7271 9.5 42.0282 15.5007 45.4617 24C42.0282 32.4993 33.7271 38.5 24 38.5ZM13.5 24C13.5 29.7961 18.2039 34.5 24 34.5C29.7961 34.5 34.5 29.7961 34.5 24C34.5 18.2039 29.7961 13.5 24 13.5C18.2039 13.5 13.5 18.2039 13.5 24ZM18.5 24C18.5 20.9661 20.9661 18.5 24 18.5C27.0339 18.5 29.5 20.9661 29.5 24C29.5 27.0339 27.0339 29.5 24 29.5C20.9661 29.5 18.5 27.0339 18.5 24Z" />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_935_4986"
          x1="2.625"
          y1="9.38961"
          x2="36.575"
          y2="47.4149"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#189DF8" />
          <stop offset="1" stop-color="#253E7F" />
        </linearGradient>
        <clipPath id="clip0_935_4986">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
