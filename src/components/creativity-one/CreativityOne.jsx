import React, { useEffect } from "react";
import Header from "../../common/Header";
import fantaCan from "../../assets/images/creativity-one-img/fanta-can.webp";
import fantaFixedLeaf from "../../assets/images/creativity-one-img/fanta-fixed-leaf.webp";
import fantaLeafOne from "../../assets/images/creativity-one-img/fanta-leaf.webp";
import fantaLeafTwo from "../../assets/images/creativity-one-img/fanta-leaf-two.webp";
import fantaCutOrange from "../../assets/images/creativity-one-img/orange.webp";
import fantaFullOrange from "../../assets/images/creativity-one-img/full-orange.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CreativityOne = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pinned-div",
        start: "0% 120%",
        end: "70% 50%",
        scrub: true,
      },
    });
    const fantaResponsive = () => {
      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        tl.to(".fanta-can", {
          top: "calc(100vh + 10%)",
          yPercent: -100,
          left: "25%",
          duration: 1,
        })
          .to(
            ".half-orange",
            {
              top: "calc(100vh + -10%)",
              yPercent: -110,
              left: "30%",
              duration: 1,
            },
            "<"
          )
          .to(
            ".full-orange",
            {
              top: "calc(100vh + 20%)",
              yPercent: -100,
              right: "35%",
              width: "20%",
              duration: 1,
            },
            "<"
          );
      } else {
        tl.to(".fanta-can", {
          top: "calc(100vh + 65%)",
          yPercent: -50,
          left: "-25%",
          duration: 1,
        })
          .to(
            ".half-orange",
            {
              top: "calc(100vh + 70%)",
              yPercent: -50,
              left: "9%",
              duration: 1,
            },
            "<"
          )
          .to(
            ".full-orange",
            {
              top: "calc(100vh + 80%)",
              yPercent: -50,
              right: "10%",
              width: "15%",
              duration: 1,
            },
            "<"
          )
          .to(
            ".leaf-one",
            {
              top: "calc(100vh + 20%)",
              yPercent: -50,
              rotate: "150deg",
              left: "45%",
              duration: 1,
            },
            "<"
          )
          .to(
            ".leaf-two",
            {
              top: "calc(100vh + 80%)",
              yPercent: -50,
              rotate: "65deg",
              left: "12%",
              duration: 1,
            },
            "<"
          );
      }
    };

    fantaResponsive();
    window.addEventListener("resize", fantaResponsive);

    return () => {
      window.removeEventListener("resize", fantaResponsive);
    };
  }, []);

  return (
    <div className="min-h-screen bg-orange-600 w-full overflow-hidden">
      <Header />
      <div className="bg-gradient-to-l from-red-400 to-orange-500 min-h-screen flex items-center justify-center relative">
        <img
          className="w-[20%] fixed-leaf absolute top-[10%] right-0"
          src={fantaFixedLeaf}
          alt="fixed leaf"
        />
        <div className="relative">
          <img
            className="w-[60%] fanta-can absolute z-[2] common-transition top-[20%] left-[20%] max-lg:left-[30%]"
            src={fantaCan}
            alt="fanta can"
          />
          <img
            className="w-[18%] leaf-one common-transition absolute top-[-10%] left-0 rotate-[60deg] max-lg:hidden"
            src={fantaLeafOne}
            alt="leaf one"
          />
          <img
            className="w-[12%] leaf-two common-transition absolute top-[70%] left-[80%] -rotate-90 max-lg:hidden"
            src={fantaLeafTwo}
            alt="leaf two"
          />
          <img
            className="w-[15%] half-orange common-transition absolute top-[10%] left-[500%] z-[1]"
            src={fantaCutOrange}
            alt="half orange"
          />
          <img
            className="w-[50%] full-orange common-transition absolute top-[55%] right-[500%]"
            src={fantaFullOrange}
            alt="full orange"
          />
          <h1 className="fanta-text text-white text-[250px] font-medium max-xl:text-[200px] max-lg:text-[180px] max-md:text-[120px] px-5">
            FANTA
          </h1>
        </div>
      </div>
      <div className="bg-amber-800 min-h-screen w-full flex justify-center items-center">
        <div className="max-w-[1140px] mx-auto px-5">
          <div className="flex justify-between max-lg:flex-col items-center">
            <div className="w-[41.666667%] pinned-div max-lg:w-full"></div>
            <div className="w-58.3333% relative z-10 max-lg:w-full pt-64 pb-40">
              <h2 className="text-2xl font-bold text-white">About flavour</h2>
              <p className="text-white text-base max-w-[780px] max-lg:max-w-[650px] pt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam, excepturi sed, itaque placeat id natus soluta veniam
                obcaecati qui a laborum laboriosam dolorem illum labore sit,
                voluptates commodi neque dolores tempore temporibus deleniti?
                Nobis, ratione hic error quis cum neque nulla laudantium nostrum
                sit nihil dolorum quisquam enim quaerat, eaque ex sequi, harum
                totam quia non! Labore, neque! Amet voluptatem illo similique
                recusandae! Ex quaerat quibusdam asperiores, ducimus tempore
                magni labore. Tenetur voluptas, quos ex repellendus provident
                mollitia laboriosam adipisci alias a impedit, cum accusamus
                rerum delectus eaque facilis veniam quia laborum incidunt ea
                assumenda! Eos magni aspernatur quod distinctio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativityOne;
