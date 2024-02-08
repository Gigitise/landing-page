import React from "react";

const Steps = () => {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="text-center mb-5">
          <h2 className="intro__heading">Placing your first gig?</h2>
        </header>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4 items-center justify-center">
          <div>
            <div className="relative">
              <div className="flex items-center text-sm font-semibold leading-6 text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Step 1
                <span
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-blue-400 sm:-ml-3 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                ></span>
              </div>
            </div>
            <p className="mt-6 text-lg font-semibold leading-8 tracking-wide">
              Create your gig
            </p>
            <p className="mx-auto mt-2 max-w-md text-gray-500">
              Fill a form about your gig. Some of the details we need details
              like instructions, and deadline.
            </p>
          </div>
          <div>
            <div className="relative">
              <div className="flex items-center text-sm font-semibold leading-6 text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                Step 2
                <span
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-blue-400 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                ></span>
              </div>
              <span
                className="absolute hidden -ml-2 h-px w-screen -translate-x-full bg-blue-400 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              ></span>
            </div>
            <div className="mb-6">
              <p className="mt-6 text-lg font-semibold tracking-wide">
                Assign freelancer
              </p>
              <p className="mx-auto mt-2 max-w-md text-gray-500">
                View freelancer's profile, review and allocate them the gig you
                created.
              </p>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="flex items-center text-sm font-semibold leading-6 text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Step 3
              </div>
            </div>
            <p className="mt-6 text-lg font-semibold leading-8 tracking-wide">
              Get task done
            </p>
            <p className="mx-auto mt-2 max-w-md text-gray-500">
              Freelancers complete the task on time and upload it. Download the
              solution and check out on satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
