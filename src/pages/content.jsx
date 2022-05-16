import React, { Component } from "react";
import Accordion from "./accordion";

export class Content extends Component {
  render() {
    return (
      <div>
        <section className="hero body-font bg-purple-main pt-24">
          <div className="container mx-auto flex md:flex-row flex-col items-center px-5 py-8 lg:px-5 lg:py-32">
            <div className="-mx-4 mt-auto mb-auto flex flex-wrap content-start md:w-2/3  lg:w-1/2">
              <div className="mb-6 w-full px-4 sm:p-4 lg:pl-8 lg:text-left">
                <h1 className="title-font mx-auto mb-2 text-5xl font-extrabold text-purple-title text-center lg:text-left lg:text-6xl">A uniquely human NFT</h1>
                <h2 className="title-font mx-auto mb-2 text-lg font-extrabold text-black/80 text-center lg:text-left lg:text-2xl">Launching June/July</h2>
                <p className="mt-6 font-normal text-black text-left text-base lg:text-justify lg:text-xl">
                  Time is money, and there never seems to be enough of either. NFT PA is a new solution that can help save your time-wasting woes. This revolutionary service provides holders of the NFT PA access to a pool of talented assistants from
                  underserved communities ready to do the tasks you don't have time to do.
                </p>
                <p className="mt-4 font-normal text-black text-left text-base lg:text-justify lg:text-xl">
                  <span className="font-bold">Pocket Assistants (PA)</span> are fellow humans from marginalized communities who work on these tasks. From data entry to online research, Pocket Assistants can take care of it. So why waste another
                  minute?
                </p>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:pt-8 w-5/6 mx-auto">
              <img className="h-full w-full object-contain object-center" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652719326/hdao-nft/12_vnujwh.png" alt="man with many arms"></img>
            </div>
          </div>
        </section>
        <section className="main-feature body-font bg-purple-main">
          <div className="container px-5 pt-16 pb-20 lg:pb-0 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="mx-8 mt-20 text-3xl font-extrabold text-purple-title lg:text-5xl sm:mx-28">Discover new ways of getting things done.</h1>
              <p className="mt-4 lg:w-2/3 mx-auto leading-relaxed text-lg">
                NFT-as-a-service. <br></br>NFT is access key to the app. <br></br>No personal info required.
              </p>
            </div>

            <div className="w-48 mx-auto sm:hidden lg:hidden">
              <div className="px-4 py-6 rounded-lg">
                <img src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652688154/hdao-nft/13_ytevpe.png"></img>
              </div>
            </div>

            <div>
              <img className="hidden md:block lg:block lg:w-full" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652700769/hdao-nft/test_ydbuns.png"></img>
            </div>
            <div className="lg:hidden md:hidden flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="px-4 py-6 rounded-lg">
                  <img src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625194/hdao-nft/14_elgywm.png"></img>
                  <h2 className="title-font font-medium text-xl text-gray-900">One-time upfront cost, free use weekly</h2>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="px-4 py-6 rounded-lg">
                  <img src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625194/hdao-nft/15_fazy0b.png"></img>
                  <h2 className="title-font font-medium text-xl text-gray-900">Choose and input your task into the app</h2>
                </div>
              </div>
              <img hidden className="lg:absolute lg:mx-auto lg:visible invisible" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652688154/hdao-nft/13_ytevpe.png"></img>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="px-4 py-6 rounded-lg">
                  <img src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625194/hdao-nft/17_p1gjpe.png"></img>
                  <h2 className="title-font font-medium text-xl text-gray-900">Get notified on status changes and completion</h2>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="px-4 py-6 rounded-lg">
                  <img src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625194/hdao-nft/16_zehwby.png"></img>
                  <h2 className="title-font font-medium text-xl text-gray-900">Give feedback so we can improve</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="features-1 body-font bg-purple-content text-gray-600">
          <div className="container mx-auto flex md:flex-row flex-col items-center px-5 py-8 lg:px-5 lg:py-32">
            <div className="-mx-4 mt-auto mb-auto flex flex-wrap content-start md:2/3 lg:w-1/2">
              <div className="mb-6 w-full px-4 sm:p-4 md:px-8 lg:pl-8 text-left">
                <h1 className="mt-12 lg:text-left text-4xl font-bold text-center text-white-lt lg:px-0 lg:text-5xl">Help those in need and get your time back</h1>
                <p className="mt-6 font-normal text-white sm:text-left text-base lg:text-justify lg:text-xl">
                  Blockchain technology like NFTs have unlocked seamless value transfer between anyone, anywhere, creating new opportunities that previously seemed impossible.
                </p>
                <p className="mt-4 font-normal text-white sm:text-left text-sm lg:text-justify lg:text-xl">
                  Simply holding an NFT PA in your wallet allows you to create space in your day-to-day life and unlock your own full potential while changing the lives of people in underserved communities.{" "}
                </p>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:pt-24 w-3/4 mx-auto">
              <img className="h-full w-full object-contain object-center" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652676413/hdao-nft/18_e3cnxw.png" alt="heart"></img>
            </div>
          </div>
        </section>
        <section className="features-2 body-font bg-purple-content text-gray-600">
          <div className="container mx-auto flex md:flex-row flex-col items-center px-5 py-8 lg:px-5 lg:py-32">
            <div className="-mx-4 mt-auto mb-auto flex flex-wrap content-start md:2/3 lg:w-1/2">
              <div className="mb-6 w-full px-4 sm:p-4 md:px-8 lg:pl-8 text-left">
                <h1 className="mt-12  text-center lg:text-left text-4xl font-bold text-white-lt lg:px-0 lg:text-5xl">Real utility, every week</h1>
                <p className="mt-6 font-normal text-white sm:text-left text-base lg:text-justify lg:text-xl">Once activated, the NFT grants you 20 energy bars to use each week to delegate tasks.</p>
                <p className="mt-4 font-normal text-white sm:text-left text-base lg:text-justify lg:text-xl">1 energy bar = 30 minutes of PA time, saving you up to 10 hours per week, every week. </p>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:pt-24 w-3/4 mx-auto">
              <img className="h-full w-full object-contain object-center" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652676914/hdao-nft/19_yhdazc.png" alt="lightning with clock"></img>
            </div>
          </div>
        </section>
        <section className="tasks body-font bg-purple-content text-gray-600">
          <div className="flex w-full flex-col text-center">
            <h1 className="mx-8 mt-20  text-5xl font-bold text-white-lt lg:text-6xl">Types of Tasks</h1>
          </div>
          <div className="container mx-auto px-5 pt-20 pb-16">
            <div className="-m-2 lg:flex lg:flex-wrap">
              <div className="p-6 lg:w-1/2 lg:p-4">
                <div className="relative h-full rounded-2xl bg-purple-box bg-opacity-40 px-8 pt-4 pb-4 text-center">
                  <ul className="list-disc p-4 text-left">
                    <li className="py-2 text-white">Research flights and hotels</li>
                    <li className="py-2 text-white">Find leads on social media and/or job board sites</li>
                    <li className="py-2 text-white">Call stores/businesses to get information</li>
                    <li className="py-2 text-white">Price shop best offers for a product or service</li>
                    <li className="py-2 text-white">Retrieve public records/addresses/contact details</li>
                    <li className="py-2 text-white">Add accounts to a spreadsheet/CRM</li>
                    <li className="py-2 text-white">Event planning research</li>
                    <li className="py-2 text-white">Confirm appointments</li>
                    <li className="py-2 text-white">Research and report the policies for this rule/law</li>
                    <li className="py-2 text-white">Search and link to the roadmap of these 5 projects </li>
                    <li className="py-2 text-white">Research and collect certain data points over time</li>
                    <li className="py-2 text-white">Find and collect any data available on the internet</li>
                    <li className="py-2 text-white">Find business or peoples email addresses or contact info</li>
                    <li className="py-2 text-white">Find token unlock schedule for these projects</li>
                    <li className="py-2 text-white">Find the upcoming NFT releases on Solana</li>
                    <li className="py-2 text-white">Research transportation options</li>
                    <li className="py-2 text-white">Find and link to Discord servers for these 10 crypto projects</li>
                    <li className="py-2 text-white">Make a list of the upcoming spaces/talks for these 6 crypto projects</li>
                    <li className="py-2 text-white">Go to 3 Discord servers/Telegrams and find the answer to a question</li>
                  </ul>
                </div>
              </div>
              <div className="p-6 lg:w-1/2 lg:p-4">
                <div className="relative h-full rounded-2xl bg-purple-box bg-opacity-40 px-8 pt-4 pb-4 text-center">
                  <ul className="list-disc p-4 text-justify">
                    <li className="py-2 text-white">Search and find particular images online for use</li>
                    <li className="py-2 text-white">Transcribe audio</li>
                    <li className="py-2 text-white">Convert analog documents to digital</li>
                    <li className="py-2 text-white">Track data points over time</li>
                    <li className="py-2 text-white">Create/update spreadsheets</li>
                    <li className="py-2 text-white">Who are the investors (VCs) in xyz company</li>
                    <li className="py-2 text-white">Transfer internet data to a digital database</li>
                    <li className="py-2 text-white">Light bookkeeping</li>
                    <li className="py-2 text-white">Take notes from webinar</li>
                    <li className="py-2 text-white">Fill out online forms</li>
                    <li className="py-2 text-white">Find and collect specific icons online</li>
                    <li className="py-2 text-white">Verify outdated data, make changes to records</li>
                    <li className="py-2 text-white">Create basic slide decks from content</li>
                    <li className="py-2 text-white">Collate and file expenses</li>
                    <li className="py-2 text-white">Simple photo and video editing</li>
                    <li className="py-2 text-white">Document Template Creation</li>
                    <li className="py-2 text-white">Find and link me to the blogs for these 10 projects</li>
                    <li className="py-2 text-white">Find and list popular YouTube channels and podcasts on P2E gaming</li>
                    <li className="py-2 text-white">Make a list of keywords to search for a specific product or service</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="activation body-font bg-purple-content text-gray-600">
          <div className="container mx-auto flex md:flex-row flex-col items-center px-5 py-8 lg:px-5 lg:py-32">
            <div className="-mx-4 mt-auto mb-auto flex flex-wrap content-start md:2/3 lg:w-1/2">
              <div className="mb-6 w-full px-4 sm:p-4 md:px-8 lg:pl-8 text-left">
                <h1 className="mt-12  font-bold text-white-lt lg:px-0 lg:text-5xl text-center text-4xl lg:text-left">Activation</h1>
                <p className="mt-6 font-normal text-white sm:text-left text-base lg:text-justify lg:text-xl">
                  To activate the energy you must stake 10,000 HDAO tokens (currently $170). As long as HDAO is staked, you can use the energy system and assign tasks weekly. Why stake HDAO? Check out the FAQ below.
                </p>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:pt-24 w-3/4 mx-auto">
              <img className="h-full w-full object-contain object-center" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625195/hdao-nft/20_airlpg.png" alt="lightning with clock"></img>
            </div>
          </div>
        </section>
        <section className="focus body-font bg-purple-content text-gray-600">
          <div className="container mx-auto flex md:flex-row flex-col items-center px-5 py-8 lg:px-5 lg:py-32">
            <div className="-mx-4 mt-auto mb-auto flex flex-wrap content-start md:2/3 lg:w-1/2">
              <div className="mb-6 w-full px-4 sm:p-4 md:px-8 lg:pl-8 text-left">
                <h1 className="mt-12  font-bold text-white-lt lg:px-0 lg:text-5xl text-center text-4xl lg:text-left">High-value focus</h1>
                <p className="mt-6 font-normal text-white sm:text-left text-base lg:text-justify lg:text-xl">
                  To spend more time on high-value activities, spend less time on lower-value activities. Make 3 lists that will help you delegate your time more effectively and boost productivity with your NFT PA:{" "}
                </p>
                <div className="lg:order-0 order-1 mx-auto w-full px-3">
                  <div className="w-full lg:max-w-md">
                    <ul className="mt-4">
                      <li className="mx-auto inline-flex items-center space-x-4 py-2 lg:text-left xl:py-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-row h-6 w-6 text-white md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="flex-row text-md text-left  font-medium text-white md:text-2xl">Things you hate doing</span>
                      </li>
                      <li className="flex-row items-center space-x-4 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-flex text-white md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="inline-flex text-md font-medium text-white md:text-2xl">Things you can't do yourself</span>
                      </li>
                      <li className="inline-flex items-center space-x-4 py-2 xl:py-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="flex-row text-md font-medium text-white md:text-2xl">Things you shouldn't be doing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:pt-24 w-3/4 mx-auto">
              <img className="h-full w-full object-contain object-center" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625195/hdao-nft/21_tdndfg.png" alt="lightning with clock"></img>
            </div>
          </div>
        </section>
        <section className="benefits bg-purple-main text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full">
              <h1 className="mx-8 mt-20  text-5xl font-bold text-purple-title lg:text-6xl">Benefits</h1>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full p-8 flex-col">
                  <div className="flex mx-auto items-center mb-3">
                    <img className="w-full" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625195/hdao-nft/22_rekqjr.png"></img>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-2xl text-black font-semibold">Help those in need</p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full p-8 flex-col">
                  <div className="flex mx-auto items-center mb-3">
                    <img className="w-full" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625195/hdao-nft/23_gcjkfw.png"></img>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-2xl text-black font-semibold">Loan Out</p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full p-8 flex-col">
                  <div className="flex mx-auto items-center mb-3">
                    <img className="w-full" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625195/hdao-nft/24_lcjvjn.png"></img>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-2xl text-black font-semibold">Resell</p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full p-8 flex-col">
                  <div className="flex mx-auto items-center mb-3">
                    <img className="w-full" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625196/hdao-nft/25_i3xk7z.png"></img>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-2xl text-black font-semibold">One-time cost</p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full p-8 flex-col">
                  <div className="flex mx-auto items-center mb-3">
                    <img className="w-full" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625196/hdao-nft/26_gnscxi.png"></img>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-2xl text-black font-semibold">Share energy</p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full p-8 flex-col">
                  <div className="flex mx-auto items-center mb-3">
                    <img className="w-full" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625196/hdao-nft/27_baciv3.png"></img>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-2xl text-black font-semibold">Save Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="range body-font bg-purple-main text-gray-600">
          <div className="flex flex-col text-center w-full">
            <h1 className="mx-8 mt-20  text-5xl font-bold text-purple-title lg:text-6xl">Profound business model</h1>
          </div>
          <div className="container mx-auto flex md:flex-row flex-col items-center px-5 py-8 lg:px-5 lg:py-32">
            <div className="-mx-4 mt-auto mb-auto flex flex-wrap content-start md:w-2/3 lg:w-1/2">
              <div className="mb-6 w-full px-4 sm:p-4 md:px-12 lg:pl-8 text-left lg:text-left">
                <p className="mt-6 mb-6 font-normal text-black sm:text-left text-base lg:text-justify lg:text-xl">
                  ZipRecruiter, one of the largest recruiting US companies, shows the work-from-home Virtual Assistant salary ranges from weekly to monthly. While Pocket Assistants are not full-on personal assistants (not yet), the value and business
                  model is still profound.{" "}
                </p>
                <div className="lg:hidden mt-6 w-full md:hidden rounded-lg sm:mt-0 lg:w-1/2">
                  <div>
                    <div className="p-4 w-full">
                      <div className="w-full h-full flex flex-col items-center">
                        <img className="rounded-lg w-full h-full object-center sm:mb-0 mb-4" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652685911/hdao-nft/29_yfp0ea.png"></img>
                        <img className="rounded-lg w-full h-full  object-center sm:mb-0 mb-4" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652685911/hdao-nft/30_iuubzl.png"></img>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-6 mb-6 font-normal text-black sm:text-left text-base lg:text-justify lg:text-xl">
                  <span className="underline">Even on the low end, after a few months, NFT PA pays itself off with the one-time mint and activation cost.</span> For minting fees, please see FAQ.
                </p>
              </div>
            </div>
            <div className="mt-6 w-full hidden md:block lg:block rounded-lg sm:mt-0 lg:w-1/2">
              <div>
                <div className="p-4 w-full">
                  <div className="w-full h-full flex flex-col items-center">
                    <img className="rounded-lg w-full h-full object-center sm:mb-0 mb-4" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652685911/hdao-nft/29_yfp0ea.png"></img>
                    <img className="rounded-lg w-full h-full  object-center sm:mb-0 mb-4" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652685911/hdao-nft/30_iuubzl.png"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="resources body-font bg-purple-main text-gray-600">
          <div className="container mx-auto px-5 pb-12 py-24">
            <div className="mb-20 text-center">
              <h1 className="mx-8 mt-20  text-5xl font-bold text-purple-title lg:text-6xl">Ready to get more done?</h1>
            </div>
            <div className="mx-auto w-full lg:w-full lg:max-w-3xl">
              <img className="rounded object-cover object-center" alt="working community" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625196/hdao-nft/28_i46bhc.png"></img>
            </div>
            <a className="mx-auto items-center rounded-lg bg-purple-box py-4 px-5 font-bold text-white hover:bg-purple-box/80 focus:outline-none lg:inline-flex" href="https://forms.gle/D96hyhNDh9DDJAXa8">
              Join waitlist
            </a>
          </div>
        </section>
        <section className="FAQs min-w-screen relative bg-purple-main pt-4 pb-16">
          <div className="container mx-auto px-8 sm:px-12 xl:px-5">
            <h1 className="mx-2 mt-12  text-5xl font-bold text-purple-title lg:text-6xl">Frequently Asked Questions</h1>
          </div>
          <div className="mx-auto mt-10 w-full text-xs lg:text-base px-6 py-6 text-left sm:px-8 sm:py-8 md:px-12 lg:w-5/6 xl:w-2/3">
            <Accordion>
              <div label="Is this a personal assistant?">
                <p>No. All tasks go to a pool of available PAs. You will have many PAs fulfilling your acceptable tasks.</p>
              </div>
              <div label="What are acceptable tasks?">
                <p>
                  As the examples above show, pretty much anything beginning with Find, Collect, Make, Add, or Search. You will not have the same PA for all your tasks. Thus, anything requiring privileged info (email, Amazon, bank login) will not
                  work. Stick to research and data entry, and you will be fine. We are looking to expand acceptable tasks in the future.
                </p>
              </div>
              <div label="Where do these PAs come from?">
                <p>
                  From underserved communities all over the world. In less than 6 months our community has grown to over 50k members strong. Our community is very young (70% is younger than 25 y.o.) and come from low economic backgrounds. But they
                  are connected to the internet, ambitious and hungry for opportunity to earn wages. Being a PA is like being an Uber driver in that it is gig work.
                </p>
                <p className="mt-4">
                  Join our community ​
                  <span>
                    <a className="underline" href="https://discord.com/invite/humandao" target="_blank" rel="noreferrer">
                      here
                    </a>
                  </span>
                  .{" "}
                </p>
                <p className="mt-4">
                  Learn about us ​
                  <span className="underline">
                    <a href="https://docs.humandao.org" target="_blank" rel="noreferrer">
                      here
                    </a>
                  </span>
                  .
                </p>
              </div>
              <div label="What will it cost to mint?">
                <p>
                  We are still deciding on what kind of launch it will be (whitelist, batch, etc.) Regardless, we need to set a floor value during mint, due to the service attached (different from typical PFPs). That Floor price will be $3,333. The
                  3’s represent the parties involved—the holder, DAO, and PA. Additionally, we will be lowering the floor price only 1 time for the launch/maiden mint. So join the waitlist.{" "}
                </p>
              </div>
              <div label="How many NFTS will be available?">
                <p>
                  NFT PA will be very limited. We are expecting to have 500-2000 available for launch, depending on demand from our community to offer these services. There will be scope for additional mints as the DAO grows and we enrol new PAs.
                </p>
              </div>
              <div label="Can I roll over my energy?">
                <p>Energy not used does NOT roll over to the following week. But your 20 energies will reload every week (as long as HDAO is staked).</p>
              </div>
              <div label="Why do we have to stake HDAO?">
                <p>Activating the NFT by staking $HDAO helps us forecast demand for the PAs and ensure enough resources are available to complete tasks quickly.</p>
                <p className="mt-4">
                  Holding and using $HDAO also benefits the underserved communities that make up the humanDAO, grants staking rewards (get more $HDAO), and you can participate in governance as a true DAO member.{" "}
                  <span className="underline">
                    <a href="https://app.humandao.org/dashboard" target="_blank" rel="noreferrer">
                      Visit our Dashboard here for more metrics on the DAO.
                    </a>
                  </span>
                </p>
              </div>
              <div label="Can I share my energy with family or friends?">
                <p>
                  Sure. There are no account details or personal info needed thanks to blockchain tech. The NFT, when activated, can be used by anyone with access to the address. You can create an address solely for NFT PA and share your keys with
                  trusted individuals.
                </p>
              </div>
              <div label="Why is there a 30% royalty on secondary sales?">
                <p>
                  Unlike artistic NFTs and PFP projects, NFT PA is a utility token actively managed by the DAO. Secondary sales royalties contribute to these ongoing costs and the sustainability of the DAO, enabling us to build more services and
                  products to benefit underserved communities and achieve our goal of improving lives through crypto.
                </p>
              </div>
              <div label="What is the rental market?">
                <p>
                  We plan on creating a rental market for energy. NFT PA holders will be able to loan out weekly energy if/when they are unable to use it themselves, earning a fee. It’s a great way to make a few dollars and make the most of your
                  purchase.
                </p>
              </div>
            </Accordion>
          </div>
        </section>
      </div>
    );
  }
}

export default Content;
