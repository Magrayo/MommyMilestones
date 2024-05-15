import Navbar from "./Navbar"
import opsolihat from "../images/opsolihat.jpg";
const people = [
    {
      name: 'Opaleye Solihat',
      role: 'Team Member',
      image: opsolihat,
      bio: "I'm Opaleye Solihat, a driven Software Engineer deeply passionate about crafting captivating frontend experiences. Specializing in React.js, I thrive on blending the realms of science and technology. Armed with proficiency in HTML, CSS & CSS Frameworks, and JavaScript, I'm poised to deliver innovative solutions. Currently exploring fresh opportunities within the dynamic tech landscape.",
      gUrl: 'https://github.com/Olajumoke-1',
      linkedinUrl: 'http://www.linkedin.com/in/solihat-olajumoke31',
    },
    // More people...
  ]
  
   const Meet  = ()=> {
    return (
        <>
        <Navbar />
      <div className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
          <div className="max-w-2xl xl:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About the team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
            </p>
          </div>
          <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
            {people.map((person) => (
              <li key={person.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
                <img className="aspect-[4/5] w-[279px] flex-none rounded-2xl object-cover" src={person.image} alt="Solihat's Picture" />
                <div className="max-w-xl flex-auto">
                  <h3 className="font-semibold leading-8 tracking-tight text-black text-[45px] font-News mb-[8px]">{person.name}</h3>
                  <p className="text-base leading-7 text-gray-600">{person.role}</p>
                  <p className="mt-6 leading-8 text-black font-News text-[18px]">{person.bio}</p>
                  <ul role="list" className="mt-6 flex gap-x-6">
                    <li>
                      <a href={person.gUrl} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">GitHub</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.386.6.111.793-.261.793-.584 0-.288-.01-1.049-.015-2.06-3.35.726-4.055-1.565-4.055-1.565-.548-1.392-1.338-1.762-1.338-1.762-1.092-.748.084-.733.084-.733 1.206.084 1.838 1.238 1.838 1.238 1.07 1.838 2.806 1.307 3.49.999.109-.768.422-1.306.766-1.604-2.675-.305-5.487-1.337-5.487-5.941 0-1.314.471-2.385 1.239-3.227-.135-.304-.539-1.526.105-3.178 0 0 1.008-.322 3.3 1.23a11.573 11.573 0 013.016-.405c1.025.004 2.057.138 3.016.405 2.29-1.552 3.297-1.23 3.297-1.23.646 1.652.242 2.874.117 3.178.77.842 1.236 1.913 1.236 3.227 0 4.617-2.818 5.631-5.495 5.926.43.37.818 1.102.818 2.217 0 1.602-.014 2.892-.014 3.289 0 .324.188.701.799.583C20.568 21.798 24 17.302 24 12c0-6.627-5.373-12-12-12z" clipRule="evenodd"/>
                    </svg>


                      </a>
                    </li>
                    <li>
                      <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </>
    )
  }
  export default Meet