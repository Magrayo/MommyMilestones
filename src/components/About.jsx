import React from 'react'
import Navbar from './Navbar'

const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Employees', value: '37' },
  { label: 'Countries', value: '12' },
  { label: 'Raised', value: '$25M' },
]

const About = () => {
  return (
    <div>
      <Navbar />
  
     <div className="py-3 sm:py-32 mt-[-48px]">
      <div className="container text-center bg-blue h-[339px] py-6">
        <h2 className="text-[15px] leading-[26px] font-normal tracking-tight text-white sm:text-5xl py-[20px] font-Roboto">About Us</h2>
      </div>
     </div>

    <div className="bg-grey py-24 sm:py-32 text-center mr-[120px] ml-[120px] rounded-lg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
         

                <div className="bg-white pl-[15px] rounded-lg shadow-lg w-[435px] h-[620px]">
              <h1 className="text-5xl text-blue-500">28+</h1>
              <p className="text-gray-700">Years of experience</p>
              <ul className="mt-4 space-y-8 text-center">
                {['Our Mission', 'Our Vission', 'Our Values'].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="bg-gray-200 p-2 rounded-full">»</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1 className="mt-2 text-[48px] font-bold text-black font-News leading-[56px]">
              Mommy Mile's Blog is best healthy pregnancy fertility center.
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                  vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                  erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                  semper sed amet vitae sed turpis id.
                </p>
                <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie
                  auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
                  hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
                <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie
                  auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
                  hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div key={statIdx}>
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                  <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex">
              <a href="#" className="text-base font-semibold leading-7 text-indigo-600">
                Learn more about our company <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  )
}

export default About
