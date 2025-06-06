import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { GiSaxophone } from "react-icons/gi";
import me from "../public/sax_me.jpg";
import spectro from "../public/sax_spec.png";
import petals from "../public/petals_cropped.jpeg"
import moon from "../public/moon_cropped.jpeg"
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPython, FaJava } from "react-icons/fa";
import { SiPytorch, SiR, SiCplusplus } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { MdOutlineDataUsage } from "react-icons/md";
import { AiOutlineAudio } from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Christian Manohar Personal Website</title>
        <meta name="description" content="Christian Manohar's Personal Webiste" />
        <link rel="icon" href="/saxophone.ico" />
      </Head>
      <main className="h-full min-h-screen bg-gradient-to-b from-slate-950 to-purple-800 overflow-auto overscroll-contain">
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
                  <li className="px-4 py-2 bg-slate-300 text-slate-800 rounded-lg shadow-md m-2 flex items-center">
                    <FaPython className="mr-2" />
                    Python
                  </li>
                  <li className="px-4 py-2 bg-slate-300 text-slate-800 rounded-lg shadow-md m-2 flex items-center">
                    <SiPytorch className="mr-2" />
                    PyTorch
                  </li>
                  <li className="px-4 py-2 bg-slate-300 text-slate-800 rounded-lg shadow-md m-2 flex items-center">
                    <SiR className="mr-2" />
                    R
                  </li>
                  <li className="px-4 py-2 bg-slate-300 text-slate-800 rounded-lg shadow-md m-2 flex items-center">
                    <TbSql className="mr-2" />
                    SQL
                  </li>
                  <li className="px-4 py-2 bg-slate-300 text-slate-800 rounded-lg shadow-md m-2 flex items-center">
                    <SiCplusplus className="mr-2" />
                    C/C++
                  </li>
                  <li className="px-4 py-2 bg-slate-300 text-slate-800 rounded-lg shadow-md m-2 flex items-center">
                    <FaJava className="mr-2" />
                    Java
                  </li>
                  <li className="px-4 py-2 bg-slate-300 text-slate-800 rounded-lg shadow-md m-2 flex items-center">
                    <MdOutlineDataUsage className="mr-2" />
                    Data Visualization
                  </li>
                  <li className="px-4 py-2 bg-slate-300 text-slate-800 rounded-lg shadow-md m-2 flex items-center">
                    <MdOutlineDataUsage className="mr-2" />
                    Machine Learning
                  </li>
                  <li className="px-4 py-2 bg-slate-300 text-slate-800 rounded-lg shadow-md m-2 flex items-center">
                    <AiOutlineAudio className="mr-2" />
                    Audio Processing
                  </li>
                  <li className="px-4 py-2 bg-slate-300 text-slate-800 rounded-lg shadow-md m-2 flex items-center">
                    Ableton Live
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <Image 
                src={spectro} 
                alt="" 
                objectFit="cover" 
                className="absolute right-0 h-full rounded-lg shadow-2xl"
                width={700}
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
        <section className="flex flex-col justify-between">
          <h2 className="text-4xl md:text-6xl text-slate-300 font-bold p-8">Music/Compositions</h2>
          <ul className="flex flex-wrap justify-around">
            <li>
              <div className="max-w-sm border border-gray-700 rounded-lg shadow-sm bg-slate-300 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
                  <a>
                      <Image
                          className="rounded-t-lg"
                          src={petals}
                          alt=""
                          width={500}
                          >
                      </Image>
                  </a>
                  <div className="p-5">
                      <a>
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-800 ">Petal Point</h5>
                      </a>
                      <p className="mb-3 font-normal text-slate-600 ">An original composition for small jazz ensemble. Influenced by Ryusenkei and other jazz/funk.</p>
                      <a href="https://musescore.com/user/34652253/scores/24599419?share=copy_link" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          View score
                          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                          </svg>
                      </a>
                  </div>
              </div>
            </li>
            <li>
              <div className="max-w-sm border border-gray-700 rounded-lg shadow-sm bg-slate-300 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
                  <a>
                      <Image
                          className="rounded-t-lg"
                          src={moon}
                          alt=""
                          layout="responsive"
                          >
                      </Image>
                  </a>
                  <div className="p-5">
                      <a>
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-800 ">Until the Moon Falls</h5>
                      </a>
                      <p className="mb-3 font-normal text-slate-600 ">An original composition for small jazz ensemble with an emphasis on fingerstyle guitar. WIP</p>
                      <a href="https://musescore.com/user/34652253/scores/24599800?share=copy_link" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          View score
                          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                          </svg>
                      </a>
                  </div>
              </div>
            </li>
          </ul>
        </section>
        <div>
          <p className="text-slate-300 text-right px-2">
            Made by Christian Manohar using react, next.js, and tailwindcss
          </p>
        </div>
      </main>
    </div>
  );
};