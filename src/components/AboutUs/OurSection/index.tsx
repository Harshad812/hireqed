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
            <div className="pb-[100px]">
                <div className="container">
                    <div className="w-full mx-auto max-w-[1156px]">
                        <div className="grid grid-cols-2 gap-6">
                            {ourCardData.map((items, index) => (
                                <div key={index} className="shadow-card rounded-lg pt-10 px-10 pb-14 flex flex-col gap-6">
                                    <h2 className="text-[28px] inline-block font-semibold bg-primary-gradient bg-clip-text text-fill-transparent">{items.title}</h2>
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
