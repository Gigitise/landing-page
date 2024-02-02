import React from 'react'

const Services = () => {
  return (
    <div className=" py-16 sm:py-11">
    <div className="mx-auto px-6 lg:px-8 ">
    <header className="text-center mb-20">
          <h2 className="text-2xl font-bold text-gray-600 sm:text-3xl">Our Services</h2>
          <p className="mx-auto mt-4 max-w-md text-gray-500">
            It is a long established fact that a reader will be distracted by the readable
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-cover rounded-sm w-full h-[50%]" src="https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/62220881d4738752c8db161a_writing-marketing-plan.jpg" alt="Product" />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View service</button>
                    </div>
                </div>
                <h3 className="text-xl  text-gray-600 text-center mt-4 font-inter font-bold">Service 1</h3>
                <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                    ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
                <div className="flex items-center justify-center mt-4">
                    <a href='' className="text-sky-600  py-2 px-4 ">Learn more</a>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="relative overflow-hidden">
                    <img className="object-cover w-full h-full" src="https://static.startuptalky.com/2021/10/Best-Practices-for-Finding-and-Hiring-Freelancers-startuptalky.jpg" alt="Product" />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View service</button>
                    </div>
                </div>
                <h3 className="text-xl  text-gray-600 text-center mt-4">Service 2</h3>
                <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                    ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
                <div className="flex items-center justify-center mt-4">
                    <a href='' className="text-sky-600 py-2 px-4  ">Learn more</a>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-cover w-full h-full" src="https://freelancinghacks.com/wp-content/uploads/2020/06/try-freelance-part-time.jpg" alt="Product" />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Service</button>
                    </div>
                </div>
                <h3 className="text-xl  text-gray-600 text-center mt-4">Service 3</h3>
                <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                    ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
                <div className="flex items-center justify-center mt-4">
                    <a href='' className="text-sky-600  py-2 px-4   ">Learn more</a>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Services
