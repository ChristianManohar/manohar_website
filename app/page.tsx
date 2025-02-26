import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { GiSaxophone } from "react-icons/gi";
import me from "../public/playing.jpg";
import spectro from "../public/sax_spec.png";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Christian Manohar Personal Website</title>
        <meta name="description" content="Christian Manohar's Personal Webiste" />
        <link rel="icon" href="/saxophone.ico" />
      </Head>
      <main className="bg-gradient-to-b from-slate-950 to-purple-800">
        <section className="min-h-screen flex flex-col md:flex-row">
          <div className="flex flex-grow flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8 text-slate-300">
              <h1>
                <span className="text-4xl md:text-6xl font-bold">Christian Manohar</span>
                <p className="text-2xl md:text-3xl">Data Scientist and Musician</p>
                <Link legacyBehavior href="/resume.pdf">
                  <a className="inline-block mt-4 px-6 py-2 bg-purple-800 text-slate-300 font-semibold rounded-lg shadow-md hover:bg-purple-800 transform hover:scale-105 transition-transform duration-300">
                    View My Resume
                  </a>
                </Link>
                <GiSaxophone className="text-4xl md:text-6xl inline-block mb-4" />
              </h1>
              <h2>
                <a href="https://www.linkedin.com/in/christian-manohar-b205472b7/" className="inline-block text-3xl md:text-4xl text-blue-500 shadow-md hover:filter hover:brightness-75 transform transition-transform duration-300">
                  <BsLinkedin />
                </a>
                <a href="https://github.com/ChristianManohar" className="inline-block px-4 text-3xl md:text-4xl text-gray-500 shadow-md hover:filter hover:brightness-75 transform transition-transform duration-300">
                 <BsGithub />
                </a>
                <a href="mailto:chmano@umich.edu" className="inline-block text-3xl md:text-4xl text-blue-400 shadow-md hover:filter hover:brightness-75 transform transition-transform duration-300">
                  <MdEmail />
                </a>
              </h2>
              <div className="flex flex-col md:flex-row justify-between mt-8">
                <p className="text-wrap text-large">
                  I am a third-year student pursuing a dual degree in Data Science and Jazz and Contemporary Improvisation at the University of Michigan. I am passionate about data analysis and transformation, particularly in the area of music and audio. In addition, I am an active saxophonist and composer, performing in various ensembles and leading rehearsals for the Blue Bop Jazz Orchestra, the premier student-led jazz orchestra at the University of Michigan.
                </p>
                <Image 
                    src={me}
                    alt=""
                    className="h-64 w-64 md:h-96 md:w-96 rounded-lg shadow-2xl"
                />
              </div>
              <div className="">
                <h2 className="text-3xl md:text-4xl text-slate-300 font-semibold">Skills</h2>
                <ul className="flex flex-wrap">
                  <li className="px-4 py-2 bg-slate-300 text-slate-800 rounded-lg shadow-md m-2">
                    Python
                  </li>
                  <li className="px-4 py-2 bg-slate-300 text-slate-800 rounded-lg shadow-md m-2">
                    PyTorch
                  </li>
                  <li className="px-4 py-2 bg-slate-300 text-slate-800 rounded-lg shadow-md m-2">
                    R
                  </li>
                  <li className="px-4 py-2 bg-slate-300 text-slate-800 rounded-lg shadow-md m-2">
                    SQL
                  </li>
                  <li className="px-4 py-2 bg-slate-300 text-slate-800 rounded-lg shadow-md m-2">
                    C/C++
                  </li>
                  <li className="px-4 py-2 bg-slate-300 text-slate-800 rounded-lg shadow-md m-2">
                    Java
                  </li>
                  <li className="px-4 py-2 bg-slate-300 text-slate-800 rounded-lg shadow-md m-2">
                    Data Visualization
                  </li>
                  <li className="px-4 py-2 bg-slate-300 text-slate-800 rounded-lg shadow-md m-2">
                    Machine Learning
                  </li>
                  <li className="px-4 py-2 bg-slate-300 text-slate-800 rounded-lg shadow-md m-2">
                    Audio Processing
                  </li>
                  <li className="px-4 py-2 bg-slate-300 text-slate-800 rounded-lg shadow-md m-2">
                    Ableton Live
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <Image 
                src={spectro} 
                alt="" 
                layout="fill" 
                objectFit="cover" 
                className="absolute right-0 h-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-between">
          <h2 className="text-4xl md:text-6xl text-slate-300 font-bold p-8">Projects</h2>
          <ul className="flex flex-wrap justify-around">
            <li className="px-4 w-full md:w-auto">
              <div className="relative flex flex-col my-6 bg-slate-300 shadow-sm border border-slate-700 rounded-lg w-full md:w-96 transform hover:scale-105 transition-transform duration-300">
                <div className="p-4">
                  <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                    Exercise Image Classifier (Current)
                  </h5>
                  <p className="text-slate-600 leading-normal font-light">
                    A convolutional neural network that classifies images of exercises into 21 different categories using CNN architecture proposed by Guo et al. (2017)
                  </p>
                  <ul className="flex flex-wrap">
                    <li className="px-4 py-2 bg-blue-400 text-slate-800 rounded-lg shadow-md m-2">
                      Python
                    </li>
                    <li className="px-4 py-2 bg-red-400 text-slate-800 rounded-lg shadow-md m-2">
                      PyTorch
                    </li>
                    <li className="px-4 py-2 bg-yellow-300 text-slate-800 rounded-lg shadow-md m-2">
                      Pandas
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="px-4 w-full md:w-auto">
              <div className="relative flex flex-col my-6 bg-slate-300 shadow-sm border border-slate-700 rounded-lg w-full md:w-96 transform hover:scale-105 transition-transform duration-300">
                <div className="p-4">
                  <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                    Dog Image Classifier
                  </h5>
                  <p className="text-slate-600 leading-normal font-light">
                    A convolutional neural network that classifies images of dogs into separate breeds with up to 95% accuracy achieved through transfer learning.
                  </p>
                  <ul className="flex flex-wrap">
                    <li className="px-4 py-2 bg-blue-400 text-slate-800 rounded-lg shadow-md m-2">
                      Python
                    </li>
                    <li className="px-4 py-2 bg-red-400 text-slate-800 rounded-lg shadow-md m-2">
                      PyTorch
                    </li>
                    <li className="px-4 py-2 bg-yellow-300 text-slate-800 rounded-lg shadow-md m-2">
                      Pandas
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="px-4 w-full md:w-auto">
              <div className="relative flex flex-col my-6 bg-slate-300 shadow-sm border border-slate-200 rounded-lg w-full md:w-96 transform hover:scale-105 transition-transform duration-300">
                <div className="p-4">
                  <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                    Facebook Database Replicate
                  </h5>
                  <p className="text-slate-600 leading-normal font-light">
                    A relational database that replicates the functionality of Facebook, including user profiles, posts, albums, and friends.
                  </p>
                  <ul className="flex flex-wrap">
                    <li className="px-4 py-2 bg-green-400 text-slate-800 rounded-lg shadow-md m-2">
                      SQL
                    </li>
                    <li className="px-4 py-2 bg-orange-400 text-slate-800 rounded-lg shadow-md m-2">
                      Java
                    </li>
                    <li className="px-4 py-2 bg-violet-400 text-slate-800 rounded-lg shadow-md m-2">
                      Oracle
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="px-4 w-full md:w-auto">
              <div className="relative flex flex-col my-6 bg-slate-300 shadow-sm border border-slate-700 rounded-lg w-full md:w-96 transform hover:scale-105 transition-transform duration-300">
                <div className="p-4">
                  <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                    Electric Vehicle Sales Analysis
                  </h5>
                  <p className="text-slate-600 leading-normal font-light">
                    A data analysis project that analyzes electric vehicle sales data from 2010-2022 to determine trends and predict future sales.
                  </p>
                  <ul className="flex flex-wrap">
                    <li className="px-4 py-2 bg-lime-400 text-slate-800 rounded-lg shadow-md m-2">
                      R
                    </li>
                    <li className="px-4 py-2 bg-teal-400 text-slate-800 rounded-lg shadow-md m-2">
                      Shiny
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <div>
          <p className="text-slate-300 text-right px-2">
            Made by Christian Manohar
          </p>
        </div>
      </main>
    </div>
  );
};
