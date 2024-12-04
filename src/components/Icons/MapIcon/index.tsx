import { SVGProps } from "react";

export const MapIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"{...props}>
      <g clip-path="url(#clip0_861_4474)">
        <path d="M47.04 3.83996V27.84C47.04 27.84 41.9779 30.72 35.52 30.72C24.0681 30.72 20.2857 26.88 12.48 26.88C4.6742 26.88 0.959961 28.8 0.959961 28.8V2.87996C0.959961 2.87996 2.96156 0.959961 12.48 0.959961C21.9984 0.959961 25.9651 6.71996 35.52 6.71996C41.5497 6.71996 46.2048 4.29212 47.04 3.83996Z" stroke="url(#paint0_linear_861_4474)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
        <path d="M0.959961 2.87988V47.0399" stroke="url(#paint1_linear_861_4474)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      </g>
      <defs>
        <linearGradient id="paint0_linear_861_4474" x1="1.61451" y1="1.34645" x2="35.0391" y2="40.8692" gradientUnits="userSpaceOnUse">
          <stop stop-color="#189DF8" />
          <stop offset="1" stop-color="#253E7F" />
        </linearGradient>
        <linearGradient id="paint1_linear_861_4474" x1="0.974165" y1="3.45339" x2="2.71319" y2="3.48346" gradientUnits="userSpaceOnUse">
          <stop stop-color="#189DF8" />
          <stop offset="1" stop-color="#253E7F" />
        </linearGradient>
        <clipPath id="clip0_861_4474">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};
