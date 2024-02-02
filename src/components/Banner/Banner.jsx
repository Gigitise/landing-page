import React from 'react'

const Banner = () => {
  return (
    <div className=" bg-slate-200" style={{ position: "relative", width: "100%", zIndex: 20, minHeight: "100%", display: "flex", alignItems: "stretch", justifyContent: "stretch", color: "rgb(0, 0, 0)" }}>
  <div style={{ width: "100%", zIndex: 20 }}>
    <div className="flex md:flex-row flex-col w-full mx-auto px-8 lg:px-10 max-w-[1600px] items-center pt-10 md:py-0">
      <div className="md:w-1/2 items-center pr-8 flex-column relative z-10">
        <h1 className="text-[1em] leading-[1em] font-bold mb-3" style={{ fontSize: "80px" }}>TITLE HERE</h1>
        <div className="mt-2 mb-5 max-w-[400px] leading-[1.6em]">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint minus cum quo facilis. Ea laboriosam accusantium deleniti placeat.</p>
        </div>
        <a className="inline-block w-auto min-w-[250px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-blue-400 hover:bg-gradient-to-b dark:shadow-indigo-900 shadow-indigo-200 hover:shadow-2xl hover:shadow-indigo-400 hover:-translate-y-px " href="">
         <p className='text-center'>Get started</p> 
        </a>
      </div>
      <div className="self-end md:w-8/12 w-full pt-10 img-container img-contain md:py-0">
        <figure className="max-w-none w-full">
          <picture>
            <img src="https://img.freepik.com/free-vector/telecommuting-concept-smiley-man_23-2148497411.jpg?w=740&t=st=1706857417~exp=1706858017~hmac=a0b823ff646c0a9cd6aae69f5db1947c7ebbe6049c57fc4a30c561e79aba6ecf" alt="" width="768" height="639" loading="lazy" />
          </picture>
          <figcaption></figcaption>
        </figure>
      </div>
    </div>
  </div>
</div>

  )
}

export default Banner