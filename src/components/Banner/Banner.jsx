import React from "react";
import { stats } from "../../utils/utilities";
import { createEvent } from "../../utils/ga4";

const Banner = () => {
  return (
    <div className="mb-15 lg:mt-40 mt-20 banner bg-white relative w-full z-20 min-h-full flex flex-col items-stretch justify-stretch text-black">
      <div className="w-full z-20">
        <div className="flex md:flex-row flex-col w-full mx-auto lg:px-10 items-center pt-10  md:py-0">
          <div className="z-2 max-w-680 flex flex-col justify-between items-start pt-0   ">
            <h1 className="font-bold mb-3 text-5xl">
              Achieve more, stress less - Hire professional freelancers!
            </h1>
            <div className="mt-2 mb-5 max-w-[400px] leading-[1.6em]">
              <p className="description">
                Meet trusted & experienced freelancers for your assignments,
                projects and receive original content at your comfort.
              </p>
            </div>
            <a
              className="inline-block w-auto min-w-[250px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-blue-400  hover:-translate-y-px "
              target="_blank"
              href="https://clients.gigitise.com"
              onClick={() =>
                createEvent("Gigitise Open", "Click", "Get started")
              }
            >
              <p className="text-center">Get started</p>
            </a>
          </div>
          <div className="home-img self-end md:w-8/12  w-full pt-10 img-container img-contain md:py-0">
            <figure className="max-w-none w-full">
              <img
                src="https://img.freepik.com/premium-vector/cartoon-character-poses-african-business-woman-desk-is-working-laptop-computer_61103-1089.jpg?w=740"
                alt="Gigitise-freelancing(Writing,Essays, classwork, homework)"
                width="768"
                height="639"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
        <div className="stats md:mt-5">
          <dl className="text-center">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Banner;
