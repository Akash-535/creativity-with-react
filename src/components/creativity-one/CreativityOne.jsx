import React, { useEffect } from "react";
import Header from "../../common/Header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutFlavour from "./AboutFlavour";
import MoreBrand from "./MoreBrand";
import Hero from "./Hero";

const CreativityOne = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // gsap.to("body", {
    //   scrollTrigger: {

    //     start: "top top",
    //     end: "bottom bottom",
    //   },
    // });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pinned-div",
        start: "0% 120%",
        end: "70% 50%",
        scrub: true,
      },
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".brands-div",
        start: "0% 110%",
        end: "70% 50%",
        scrub: true,
      },
    });

    const fantaResponsive = () => {
      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        tl.to(".fanta-can", {
          top: "calc(100vh + -20%)",
          yPercent: -50,
          left: "25%",
          duration: 1,
        })
          .to(
            ".half-orange",
            {
              top: "calc(100vh + -20%)",
              yPercent: -50,
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
              width: "15%",
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
        tl2
          .to(".fanta-can", {
            top: "calc(100vh + 275%)",
            yPercent: -50,
            left: "-25%",
            duration: 21,
          })
          .to(
            ".half-orange",
            {
              top: "calc(100vh + 230%)",
              yPercent: -50,
              left: "-3.5%",
              duration: 16,
              width: "20%",
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
      <Hero
        fantaClass="fanta-can"
        leafOne="leaf-one"
        leafTwo="leaf-two"
        halfOrange="half-orange"
        fullOrange="full-orange"
      />
      <AboutFlavour myClass="pinned-div" />
      <MoreBrand myClass="brands-div" />
    </div>
  );
};

export default CreativityOne;
