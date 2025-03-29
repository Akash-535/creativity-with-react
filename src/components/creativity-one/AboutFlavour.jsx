import React from "react";

const AboutFlavour = ({ myClass }) => {
  return (
    <div className="bg-amber-800 min-h-screen w-full flex justify-center items-center">
      <div className="max-w-[1140px] mx-auto px-5">
        <div className="flex justify-between max-lg:flex-col items-center">
          <div className={` w-[41.666667%] max-lg:w-full ${myClass}`}></div>
          <div className="w-58.3333% relative z-10 max-lg:w-full pt-64 pb-40">
            <h2 className="text-2xl font-bold text-white">About flavour</h2>
            <p className="text-white text-base max-w-[780px] max-lg:max-w-[650px] pt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
              excepturi sed, itaque placeat id natus soluta veniam obcaecati qui
              a laborum laboriosam dolorem illum labore sit, voluptates commodi
              neque dolores tempore temporibus deleniti? Nobis, ratione hic
              error quis cum neque nulla laudantium nostrum sit nihil dolorum
              quisquam enim quaerat, eaque ex sequi, harum totam quia non!
              Labore, neque! Amet voluptatem illo similique recusandae! Ex
              quaerat quibusdam asperiores, ducimus tempore magni labore.
              Tenetur voluptas, quos ex repellendus provident mollitia
              laboriosam adipisci alias a impedit, cum accusamus rerum delectus
              eaque facilis veniam quia laborum incidunt ea assumenda! Eos magni
              aspernatur quod distinctio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFlavour;
