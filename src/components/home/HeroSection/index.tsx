import BgHome from "@/images/hero.jpg";

export const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center h-[400px]"
      style={{ backgroundImage: `url(${BgHome.src})` }}
    ></div>
  );
};
