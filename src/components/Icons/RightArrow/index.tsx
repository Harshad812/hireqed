import { SVGProps } from "react";

export const RightArrow: React.FC<SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
    <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 1L10 9L1 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  );
};
