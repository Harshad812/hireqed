export const OurCulture = () => {
  const ourCardData = [
    {
      id: 1,
      title: "Inclusive",
      description:
        "Diversity is our strength. We celebrate differences and work to create an environment where everyone feels respected and valued.",
    },
    {
      id: 2,
      title: "Collaborative",
      description:
        "We encourage teams to work together, crossing boundaries to share ideas. Success is a collective effort where every voice matters.",
    },
    {
      id: 3,
      title: "Innovative",
      description:
        "Curiosity fuels us. We embrace fresh ideas, challenge the status quo, and continually push ourselves to innovate.",
    },
    {
      id: 4,
      title: "Goal-Oriented",
      description:
        "We are committed to nurturing the professional and personal growth of our employees. As they grow, so does our collective success.",
    },
  ];
  return (
    <section>
      <div className="py-[100px]">
        <div className="container">
          <div className="flex flex-col gap-12">
            <div className="text-center">
              <h2 className="text-5xl leading-[62px] inline-block font-semibold text-center bg-primary-gradient bg-clip-text text-fill-transparent">
                Our Culture: People always first
              </h2>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {ourCardData.map((items, index) => (
                <div
                  key={index}
                  className="shadow-card rounded-lg py-7 px-4 flex flex-col gap-6 hover:bg-primary-gradient group min-h-[224px]"
                >
                  <h2 className="text-[28px] leading-[36px] inline-block font-semibold bg-primary-gradient bg-clip-text text-fill-transparent group-hover:text-fill-unset group-hover:text-white">
                    {items.title}
                  </h2>
                  <p className="text-gray-600 text-base font-source font-normal group-hover:text-white">
                    {items.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
