import React from "react";
import { layoutStyle } from "../styles/layout";

const Hero = () => {
  return (
    <section className="w-full justify-center flex relative overflow-x-hidden">
      <div className={`${layoutStyle} flex flex-col-reverse md:flex-row gap-4`}>
        <div className="flex flex-col">
          <div className="font-bold text-7xl">Life is short, should the link does.</div>
          <div>
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </div>
          <div>Get Started</div>
        </div>
        <img className="relative -right-[3rem] md:-right-[15rem]" src="/public/illustration-working.svg"/>
      </div>
    </section>
  );
};

export default Hero;
