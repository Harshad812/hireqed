import { SVGProps } from "react";

export const GoalIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M23.9999 2.39992C19.7422 2.39443 15.5788 3.65413 12.0383 6.01912L8.61594 2.59672C8.52103 2.50313 8.4006 2.43965 8.26975 2.41424C8.13891 2.38884 8.00347 2.40263 7.88043 2.4539C7.75739 2.50516 7.65223 2.59162 7.57814 2.70242C7.50405 2.81322 7.46432 2.94343 7.46394 3.07672V7.46392H3.07674C2.94345 7.4643 2.81324 7.50402 2.70244 7.57812C2.59164 7.65221 2.50518 7.75737 2.45392 7.88041C2.40265 8.00345 2.38886 8.13889 2.41427 8.26973C2.43967 8.40058 2.50315 8.52101 2.59674 8.61592L6.01914 12.0383C3.35346 16.0465 2.10301 20.8302 2.4663 25.6301C2.82959 30.43 4.78581 34.971 8.02441 38.5323C11.263 42.0936 15.5984 44.471 20.3423 45.2872C25.0863 46.1033 29.9669 45.3115 34.2095 43.0373C38.452 40.7631 41.8134 37.137 43.7599 32.7345C45.7064 28.3319 46.1266 23.4054 44.9537 18.7368C43.7808 14.0682 41.082 9.92525 37.2858 6.9655C33.4897 4.00575 28.8136 2.39886 23.9999 2.39992ZM12.8639 8.75512V11.9087L8.81274 7.85752V4.70392L12.8639 8.75512ZM19.2575 20.2127C18.2882 21.4274 17.8206 22.9671 17.9508 24.5158C18.081 26.0644 18.7992 27.5044 19.9578 28.5402C21.1164 29.5759 22.6276 30.1289 24.181 30.0854C25.7345 30.042 27.2124 29.4054 28.3114 28.3065C29.4103 27.2076 30.0468 25.7297 30.0902 24.1762C30.1337 22.6227 29.5808 21.1116 28.545 19.9529C27.5092 18.7943 26.0692 18.0762 24.5206 17.946C22.972 17.8158 21.4322 18.2833 20.2175 19.2527L16.1231 15.1583C18.4281 13.1032 21.4436 12.0276 24.5289 12.1602C27.6142 12.2927 30.5263 13.6229 32.6466 15.8681C34.7668 18.1134 35.9282 21.0968 35.884 24.1846C35.8398 27.2725 34.5935 30.2214 32.4099 32.4051C30.2262 34.5887 27.2773 35.835 24.1894 35.8792C21.1016 35.9234 18.1182 34.762 15.8729 32.6417C13.6277 30.5215 12.2975 27.6094 12.165 24.5241C12.0324 21.4388 13.108 18.4233 15.1631 16.1183L19.2575 20.2127ZM22.7039 23.6591C22.6237 23.9512 22.6423 24.2617 22.7569 24.5421C22.8715 24.8226 23.0756 25.0572 23.3375 25.2095C23.5994 25.3619 23.9043 25.4233 24.2047 25.3842C24.5051 25.3451 24.7842 25.2078 24.9984 24.9936C25.2126 24.7794 25.35 24.5003 25.389 24.1999C25.4281 23.8995 25.3667 23.5946 25.2144 23.3327C25.0621 23.0708 24.8274 22.8667 24.547 22.7521C24.2665 22.6375 23.9561 22.6189 23.6639 22.6991L21.1871 20.2223C22.1475 19.5047 23.344 19.1774 24.5359 19.3063C25.7278 19.4352 26.8266 20.0107 27.6114 20.9171C28.3961 21.8234 28.8084 22.9933 28.7653 24.1914C28.7223 25.3895 28.2271 26.5268 27.3794 27.3746C26.5317 28.2223 25.3943 28.7175 24.1962 28.7605C22.9982 28.8036 21.8282 28.3912 20.9219 27.6065C20.0155 26.8218 19.44 25.723 19.3111 24.5311C19.1822 23.3391 19.5095 22.1427 20.2271 21.1823L22.7039 23.6591ZM7.85754 8.81272L11.9087 12.8639H8.75514L4.70394 8.81272H7.85754ZM23.9999 44.2511C20.3585 44.2551 16.7835 43.2763 13.652 41.4178C10.5206 39.5594 7.94871 36.8902 6.20777 33.692C4.46682 30.4937 3.62133 26.8848 3.76047 23.246C3.89961 19.6073 5.01824 16.0735 6.99834 13.0175L7.99674 14.0159C8.05988 14.0787 8.13477 14.1284 8.21714 14.1621C8.2995 14.1959 8.38772 14.2131 8.47674 14.2127H13.2767L14.2367 15.1727C11.9312 17.7286 10.7152 21.0839 10.848 24.5234C10.9808 27.9629 12.4519 31.2145 14.9476 33.585C17.4433 35.9555 20.7662 37.2574 24.208 37.2131C27.6498 37.1688 30.9381 35.7819 33.372 33.348C35.8059 30.9141 37.1928 27.6257 37.2371 24.184C37.2814 20.7422 35.9795 17.4192 33.609 14.9235C31.2385 12.4278 27.9869 10.9568 24.5474 10.824C21.1079 10.6912 17.7526 11.9072 15.1967 14.2127L14.2367 13.2527V8.45272C14.2371 8.3637 14.2199 8.27548 14.1862 8.19312C14.1524 8.11075 14.1027 8.03585 14.0399 7.97272L13.0415 6.97432C15.6878 5.27299 18.6942 4.21175 21.8221 3.87479C24.95 3.53783 28.1134 3.93442 31.0613 5.0331C34.0092 6.13178 36.6605 7.90232 38.8049 10.2042C40.9493 12.5062 42.5278 15.2762 43.4151 18.2944C44.3024 21.3127 44.4741 24.4963 43.9166 27.5925C43.3591 30.6887 42.0878 33.6124 40.2034 36.1316C38.3191 38.6508 35.8736 40.6963 33.061 42.1057C30.2483 43.5151 27.1459 44.2497 23.9999 44.2511Z" fill="url(#paint0_linear_861_4494)" />
      <defs>
        <linearGradient id="paint0_linear_861_4494" x1="3.01553" y1="2.96094" x2="50.483" y2="39.2124" gradientUnits="userSpaceOnUse">
          <stop stop-color="#189DF8" />
          <stop offset="1" stop-color="#253E7F" />
        </linearGradient>
      </defs>
    </svg>

  );
};
