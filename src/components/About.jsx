import React from 'react'
import Navbar from './Navbar'
import Doctor from '../images/Doctor.jpg'
import Footer from './Footer'
import Doctors from './Doctors'
const About = () => {
  return (
    
    <div>
      <Navbar />
  
     <div className="py-3 sm:py-32 mt-[-48px]">
      <div className="container text-center bg-blue h-[339px] py-6">
        <h2 className="text-[15px] leading-[26px] font-normal tracking-tight text-white sm:text-5xl py-[20px] font-Roboto">About Us</h2>
      </div>
     </div>

      {/* About the Blog */}

    <div className="bg-grey py-24 sm:py-32 text-center mr-[120px] ml-[120px] rounded-lg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="bg-white pl-[15px] rounded-lg shadow-lg w-[435px] h-[600px] ml-[35px]">
              <h1 className="text-blue font-semibold text-[65px] leading-[65px] font-News text-center mt-[26px]">28+</h1>
              <p className="text-gray-700">Years of experience</p>
              <ul className="mt-4 space-y-10 text-center">
                {['Our Mission', 'Our Vission', 'Our Values'].map((item, index) => (
                   <div key={index} className="bg-grey text-black text-[25px] font-News font-medium leading-[26px] rounded-md w-[350px] h-[59px] ml-[30px] mt-[80px] p-[10px] hover:bg-blue overflow-hidden hover:translate-x-2 transition-transform">
                  <li key={index} className="flex items-center space-2">
                    <span className="bg-grey p-2 rounded-full">»</span>
                    <span>{item}</span>
                  </li>
                  </div>
                ))}
              </ul>
            </div>
            
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1 className="mt-20 text-[48px] font-bold text-black font-News leading-[56px]">
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
        </div>
    </div>
    </div>

      {/* Appointment Section */}
    < div className="flex mt-[60px] w-[900px] ml-[290px] mb-[54px] h-[700px]">
      <img src={Doctor} alt="Doctor picture" className='w-[450px]' />
    <div className='ml-[160px]'>
    <form className="mt-[50px] ml-[-30px] bg-blue w-[459px] h-[680px] rounded-[60px] p-12 ">
               <h1 className="font-News text-[39px] font-semibold leading-[56px] text-white ml-[35px]"  >Need your help? </h1>
              <h4 className="font-News text-[39px] font-light leading-[56px] text-white mb-[6px]">Make an appoinment</h4> 
              <div className="grid gap-x-2 gap-y-6">
                <div className="col-span-full">
                  <div className="mt-1">
                    <input
                      type="Name"
                      id="Name"
                      name="Name"
                      autoComplete="Name"
                      placeholder='Your Name'
                      className="block w-[363px] px-[18px] h-[60px] rounded-md text-[17px] text-white placeholder-white bg-blue font-Roboto font-normal border-grey border-[1px] shadow-sm focus:border-white focus:ring-white sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <div className="mt-1">
                    <input
                      type="Email"
                      id="Email"
                      name="Email"
                      autoComplete="Email"
                      placeholder='Your Email'
                      className="block w-[363px] h-[60px] px-[18px] rounded-md text-[17px] text-white placeholder-white bg-blue font-Roboto font-normal border-grey border-[1px] shadow-sm focus:border-white focus:ring-white sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-full flex space-x-4">
                  <div className="mt-1 flex-1">
                    <input
                      type="text"
                      id="doctor"
                      name="doctor"
                      autoComplete="doctor"
                      placeholder='Doctor'
                      className="block w-[200px] h-[60px] px-[18px] rounded-md text-[17px] text-white bg-blue placeholder-white font-Roboto font-normal border-grey border-[1px] shadow-sm focus:border-white focus:ring-white sm:text-sm"
                    />
                  </div>
              
                <div className="mt-1 flex-1">
                    <input
                      type="Date"
                      id="date"
                      name="date"
                      autoComplete="Date"
                      placeholder="Date"
                      className="block w-[150px] h-[60px] px-[18px] rounded-md text-[17px] bg-blue text-white placeholder-white font-Roboto font-normal border-grey border-[1px] shadow-sm focus:border-white focus:ring-white sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-full">
                  <div className="mt-3">
                    <input
                      type="Text"
                      id="text"
                      name="text"
                      autoComplete="text"
                      placeholder='Write your present condition......'
                      className="block w-[365px] h-[150px] pb-[90px] px-[28px] rounded-md text-[17px] bg-blue text-white placeholder-white font-Roboto font-normal border-grey border-[1px] shadow-sm focus:border-white focus:ring-white sm:text-sm"
                    />
                  </div>
                </div>
              <button
                type="submit"
                className="mt-6 ml-[90px] w-[150px] h-[60px] rounded-md text-[20px] font-Roboto font-normal border border-transparent bg-white px-4 py-2 text-sm  text-blue shadow-sm hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Book Now
              </button>
            </form>
            </div>
    </div>
    <>
    <Doctors />
    </>
    <>
    <Footer />
    </>
    </div>
   
  )
}
export default About
