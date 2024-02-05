import React from 'react'

const stats = [
  { id: 1, name: 'Projects completed daily', value: '850' },
  { id: 2, name: 'Total value of contracts', value: '25,000' },
  { id: 3, name: 'New freelancers joined annually', value: '15,000' },
];

const Banner = () => {
  return (
    <div className=" bg-white relative w-full z-20 min-h-full flex flex-col items-stretch justify-stretch text-black" >
  <div className='w-full z-20'>
    <div className="flex md:flex-row flex-col w-full mx-auto px-8 lg:px-10 max-w-[1600px] items-center pt-10 md:py-0">
      <div className="md:w-1/2 items-center pr-8 flex-column relative z-10">
        <h1 className="text-[1em] leading-[1em] font-bold mb-3 text-5xl" >TITLE HERE</h1>
        <div className="mt-2 mb-5 max-w-[400px] leading-[1.6em]">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint minus cum quo facilis. Ea laboriosam accusantium deleniti placeat.</p>
        </div>
        <a className="inline-block w-auto min-w-[250px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-blue-400  hover:-translate-y-px " href="">
         <p className='text-center'>Get started</p> 
        </a>
      </div>
      <div className="self-end md:w-8/12 w-full pt-10 img-container img-contain md:py-0">
        <figure className="max-w-none w-full">
          <picture>
            <img src="https://img.freepik.com/premium-vector/cartoon-character-poses-african-business-woman-desk-is-working-laptop-computer_61103-1089.jpg?w=740" alt="" width="768" height="639" loading="lazy" />
          </picture>
          <figcaption></figcaption>
        </figure>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
</div>

  )
}

export default Banner