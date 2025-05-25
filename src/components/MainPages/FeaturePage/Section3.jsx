export const Section3 = () => {
  const insightCards = [
    {
      image: "/assets/icons/insight-1.png",
      key: "insight-1",
      heading: "Better Insights",
      description:
        "Visualize where people are posting using your hashtag made. Visualize where people are posting using your hashtag made.",
    },
    {
      image: "/assets/icons/insight-2.png",
      key: "insight-2",
      heading: "Better Insights",
      description:
        "Visualize where people are posting using your hashtag made. Visualize where people are posting using your hashtag made.",
    },
    {
      image: "/assets/icons/insight-3.png",
      key: "insight-3",
      heading: "Better Insights",
      description:
        "Visualize where people are posting using your hashtag made. Visualize where people are posting using your hashtag made.",
    },
    {
      image: "/assets/icons/insight-4.png",
      key: "insight-4",
      heading: "Better Insights",
      description:
        "Visualize where people are posting using your hashtag made. Visualize where people are posting using your hashtag made.",
    },
  ];

  return (
    <div className="mx-auto px-5 sm:px-[3.5rem] max-w-[80rem] py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6">
        {insightCards.map(({ image, key, heading, description }) => (
          <div key={key} className=" p-3 sm:p-[30px] ">
            <div className="size-[56px] mb-6 bg-[#D8E6F3] rounded-[8px] flex justify-center items-center">
              <img src={image} alt={heading} className="size-[24px] " />
            </div>
            <h3 className="text-[#10243E] font-hanken text-base leading-6 font-semibold lg:text-2xl lg:leading-8">
              {heading}
            </h3>
            <p className="text-[#1A314E] font-hanken text-sm mt-2 font-normal  ">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
