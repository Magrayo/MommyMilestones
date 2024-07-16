import React from "react";
import BreadCrumbs from "./BreadCrumbs";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Doctors from "./Doctors";

const breadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "About", link: "/About" },
];

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="pb-3 xs:py-32 mt-[-100px]">
        <div className="text-center w-full bg-blue lg:h-[300px] h-[339px] py-6">
          <h2 className="text-7xl text-center leading-[26px]  tracking-tight text-white   py-[100px] font-Roboto">
            About Us
          </h2>
          <div className="flex mt-[-50px] justify-center">
            <BreadCrumbs
              data={breadCrumbsData}
              className=" font-bold"
              itemClassName={({ name }) =>
                name === "About" ? "text-yellow" : "text-white"
              }
            />
          </div>
        </div>
      </div>

      {/* About the Blog */}

      <div className="bg-grey py-24 lg:py-12  text-center  lg:mx-4  mx-5  rounded-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 lg:gap-y-16 gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="text-base leading-7 pl-5 text-gray-700 lg:max-w-lg">
              <h1 className="mt-20 text-[48px] font-bold text-black font-News leading-[56px]">
                Embracing Every Moment: Your Journey with Mommy Milestones
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  At Mommy Milestones, we are dedicated to providing a
                  user-friendly platform filled with relevant articles and
                  resources for moms at every stage of their journey. Our goal
                  is to encourage and assist mothers by offering useful and
                  engaging content that celebrates the milestones of motherhood.
                  We believe in creating an environment where mothers can find
                  guidance and inspiration through our carefully curated
                  content.
                </p>
                <p className="mt-8">
                  Our blog is designed to be a comprehensive source of
                  information on all things related to pregnancy, fertility, and
                  early parenting. Understanding that each mother's journey is
                  unique, we strive to address the diverse needs and concerns
                  that arise during this special time. Whether you are planning
                  for pregnancy, currently expecting, or navigating the early
                  stages of motherhood, Mommy Milestones is here to support you.
                </p>
                <p className="mt-8">
                  Our articles cover a wide range of topics designed to help you
                  make informed decisions and feel confident in your role as a
                  mom. Mommy Milestones is more than just a blog; it’s a
                  comprehensive resource for mothers seeking knowledge and
                  inspiration. We encourage you to explore our site and take
                  advantage of the wealth of information available. Together, we
                  can navigate the joys and challenges of motherhood,
                  celebrating each milestone along the way. Health and
                  well-being are central to our content.
                </p>
              </div>
            </div>
            <div className="bg-white lg:p-4 pl-[15px] rounded-lg shadow-lg lg:w-full w-[350px]  lg:h-auto overflow-hidden h-auto mx-auto lg:my-20">
              <div className="flex flex-col ">
                <img
                  src={
                    "https://res.cloudinary.com/dtlnkxhol/image/upload/v1716856644/afa50dba146c7911dd1ffbc653769dbd263b23d1_happy-woman_ppkd36.jpg"
                  }
                  alt=""
                  className="px-5 py-5 "
                />
                <img
                  src={
                    "https://res.cloudinary.com/dtlnkxhol/image/upload/v1716811595/unnamed-59-1_veaaa5.png"
                  }
                  alt=""
                  className="px-5 py-5  w-[500px] rounded-full"
                />
              </div>
              <div className=" flex justify-center items-center rounded-full">
                {" "}
                <img
                  src={
                    " https://res.cloudinary.com/dtlnkxhol/image/upload/v1716809169/Prepare_For_Motherhood_xmyijo.png"
                  }
                  alt=""
                  className="px-5 py-5 rounded-2xl  "
                />
              </div>

              {/* <div className="flex flex-col gap-[500px] justify-start">
                  {" "}
                 
                    alt=""
                    className="px-5 py-5 h-[300px] w-[350px]"
                  />
                  <img
                    src={
                      "https://res.cloudinary.com/dtlnkxhol/image/upload/v1716856992/GettyImages-1407570793-5f7481ec66794bdb8f67f27f1a9cf6d2_m6tgwj.jpg"
                    }
                    alt=""
                    className="px-5 py-5  w-[300px] "
                  />
                </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Section */}
      <div className="flex flex-col-reverse lg:gap-x-20 lg:flex-row lg:mt-6 lg:mx-4 mx-auto mt-[60px] mb-8 ">
        <img
          src={
            "https://res.cloudinary.com/dtlnkxhol/image/upload/v1716855671/clinicianmombabymedical_0_uunk58.png"
          }
          alt="Doctor picture"
          className="w-full lg:w-1/2 "
        />
        <div className="lg:w-1/2 mx-auto">
          <div className="mt-[70px]  mx-auto bg-blue w-[400px] h-auto rounded-[50px] p-12 ">
            <div className="my-auto">
              <h2 className="text-center font-bold text-2xl text-yellow">
                Our Mission:
              </h2>
              <p className="pt-3 text-white font-medium font-News">
                Empowering mothers on their journey through parenthood. Mommy
                Milestones provides valuable insights and support. We're
                dedicated to celebrating the joys, overcoming the challenges,
                and treasuring the triumphs of motherhood, creating a comforting
                space for moms to find guidance and encouragement.
              </p>

              <h2 className="text-center pt-5 font-bold text-2xl text-yellow">
                Our Vision:
              </h2>
              <p className="pt-3 text-white font-News font-medium">
                We imagine Mommy Milestones as a reliable ally for mothers
                everywhere, nurturing a supportive atmosphere where they can
                exchange experiences, acquire wisdom, and discover the courage
                to embrace every milestone with confidence and happiness. Our
                goal is to empower mothers globally, guiding them in the
                wonderful journey of nurturing the next generation.
              </p>
            </div>
            {/* <h1 className="font-News text-[39px] font-semibold leading-[56px] text-white ml-[35px]">
              Need your help?{" "}
            </h1>
            <h4 className="font-News text-[39px] font-light leading-[56px] text-white mb-[6px]">
              Make an appoinment
            </h4>
            <div className="grid gap-x-2 gap-y-6">
              <div className="col-span-full">
                <div className="mt-1">
                  <input
                    type="Name"
                    id="Name"
                    name="Name"
                    autoComplete="Name"
                    placeholder="Your Name"
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
                    placeholder="Your Email"
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
                    placeholder="Doctor"
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
                  placeholder="Write your present condition......"
                  className="block w-[365px] h-[150px] pb-[90px] px-[28px] rounded-md text-[17px] bg-blue text-white placeholder-white font-Roboto font-normal border-grey border-[1px] shadow-sm focus:border-white focus:ring-white sm:text-sm"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 ml-[90px] w-[150px] h-[60px] rounded-md text-[20px] font-Roboto font-normal border border-transparent bg-white px-4 py-2 text-sm  text-blue shadow-sm hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Book Now
            </button> */}
          </div>
        </div>
      </div>

      <>
        <Doctors />
      </>
      <>
        <Footer />
      </>
    </div>
  );
};
export default About;
