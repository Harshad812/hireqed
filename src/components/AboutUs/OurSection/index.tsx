export const OurSection = () => {
    const ourCardData = [
        {
            id: 1,
            title: "Our Mission",
            description: "HireQED is committed to simplifying the complexities of hiring, leveraging advanced technology to streamline processes and ensure that every organization, whether a startup or enterprise, has access to top talent. We believe in creating lasting partnerships that empower businesses to innovate and grow sustainably.",
        },
        {
            id: 2,
            title: "Our Vision",
            description: "We envision a world where businesses and individuals grow together, empowered by the right resources at the right time. Through innovative hiring and data-driven insights, we aim to be the bridge between potential and achievement.",
        },
    ]

    return (
        <section>
            <div className="2xl:pb-[80px] xl:pb-[70px] md:pb-[60px] pb-[50px]">
                <div className="container">
                    <div className="w-full mx-auto 2xl:px-0 sm:px-5 px-[18px] max-w-[1156px]">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            {ourCardData.map((items, index) => (
                                <div key={index} className="shadow-card sm:rounded-lg rounded xl:pt-10 lg:pt-9 pt-7 xl:px-10 lg:px-9 sm:px-6 px-4 pb-14 flex flex-col xl:gap-6 lg:gap-5 sm:gap-4 gap-3">
                                    <h2 className="lg:text-[28px] text-2xl inline-block font-semibold bg-primary-gradient bg-clip-text text-fill-transparent">{items.title}</h2>
                                    <p className="text-gray-600 text-base font-source font-normal">
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
