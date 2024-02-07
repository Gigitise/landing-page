import React from "react";

const Services = () => {
  return (
    <div className=" py-16 sm:py-11">
      <div className="mx-auto px-6 lg:px-8 ">
        <header className="text-center mb-5">
          <h2 className="intro__heading">Discover our top rated services</h2>
          <p className=" mx-auto mt-4 max-w-md text-gray-500">
            Find expert freelancers where skilled professional awat to tackle
            your assignments
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="relative overflow-hidden">
              <img
                className="object-cover rounded-sm w-full h-[350px]"
                src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1670.jpg?w=740&t=st=1707137251~exp=1707137851~hmac=4e2f77ccf8496680f55b67fce0c937cfa9e1e80fdb56b555c25077adb4f4084e"
                alt="Product"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                  View service
                </button>
              </div>
            </div>
            <h3 className="text-xl  text-gray-600 text-center mt-4 font-inter font-bold">
              Essay writing
            </h3>
            <p className=" text-center text-gray-500 text-sm mt-2">
              Get ahead in academia with our essay writing service. Our
              customers deliver top-notch custom essay tailored to your unique
              needs
            </p>
            <div className="flex items-center justify-center mt-4">
              <a href="" className="text-sky-600  py-2 px-4 ">
                View more
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="relative overflow-hidden">
              <img
                className="object-cover w-full  h-[350px]"
                src="https://img.freepik.com/free-vector/flat-illustration-secretary-s-day-celebration_23-2150190983.jpg?w=740&t=st=1707137979~exp=1707138579~hmac=e027156697d50c8977f9c2e3bbedfc90c2fb6a8045b2371b321eed458386311d"
                alt="Product"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                  View service
                </button>
              </div>
            </div>
            <h3 className="text-xl  text-gray-600 text-center mt-4 font-inter font-bold">
              Programming & Technicals
            </h3>
            <p className="text-center text-gray-500 text-sm mt-2">
              Your premier destination for top-tier coding solutions. Whether
              you need a web app or software solutions, achieve it with our
              programmers.
            </p>
            <div className="flex items-center justify-center mt-4">
              <a href="" className="text-sky-600 py-2 px-4  ">
                View more
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="relative overflow-hidden">
              <img
                className="object-cover  h-[350px]"
                src="https://img.freepik.com/free-vector/blog-post-concept-illustration_114360-244.jpg?w=740&t=st=1707137289~exp=1707137889~hmac=d545fef803c86d9f27e94f755984d0833a4ddcdf1e994f82d9556a27b4ad0437"
                alt="Product"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                  View Service
                </button>
              </div>
            </div>
            <h3 className="text-xl  text-gray-600 text-center mt-4 font-inter font-bold">
              Homework & assignments
            </h3>
            <p className="text-center text-gray-500 text-sm mt-2">
              Excel yoour academic journey with our comprehensive assignment
              assistance. Our academic experts provide tailored solutions
              accross diverse subjects
            </p>
            <div className="flex items-center justify-center mt-4">
              <a href="" className="text-sky-600  py-2 px-4   ">
                View more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
