import React, { Component } from "react";
import Accordion from "./accordion";

export class Content extends Component {
  render() {
    return (
      <div>
        <section class="hero body-font bg-purple-main">
          <div class="container mx-auto flex md:flex-row flex-col items-center px-5 py-8 lg:px-5 lg:py-32">
            <div class="-mx-4 mt-auto mb-auto flex flex-wrap content-start sm:w-2/3 sm:pr-10 lg:w-1/2">
              <div class="mb-6 w-full px-4 sm:p-4 md:px-8 lg:px-0 text-left lg:text-left">
                <h1 class="title-font mx-auto mb-2 text-3xl font-extrabold text-purple-title sm:text-left lg:text-5xl">A uniquely human NFT</h1>
                <p class="mt-6 font-normal text-black sm:text-left text-sm lg:text-justify lg:text-xl">
                  Time is money, and there never seems to be enough of either. NFT PA is a new solution that can help save your time-wasting woes. This revolutionary service provides holders of the NFT PA access to a pool of talented assistants from
                  underserved communities ready to do the tasks you don't have time to do.
                </p>
                <p class="mt-4 font-normal text-black sm:text-left text-sm lg:text-justify lg:text-xl">
                  <span class="font-bold">Pocket Assistants (PA)</span> are fellow humans from marginalized communities who work on these tasks. From data entry to online research, Pocket Assistants can take care of it. So why waste another minute?
                </p>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto">
              <img class="h-full w-full object-contain object-center" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625197/hdao-nft/12_vnujwh.png" alt="man with many arms"></img>
            </div>
          </div>
        </section>
        <section class="main-feature body-font bg-purple-main">
          <div class="container px-5 pt-16 lg:pb-40 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="mx-8 mt-20 text-5xl font-extrabold text-purple-title lg:text-6xl">
                Discover an entirely <br></br>new way of working
              </h1>
              <p class="mt-4 lg:w-2/3 mx-auto leading-relaxed text-lg">
                The NFT is access key to the app. <br></br>No personal info required.
              </p>
            </div>
            <div class="flex flex-wrap -m-4 text-center">
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="px-4 py-6 rounded-lg">
                  <img src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625194/hdao-nft/14_elgywm.png"></img>
                  <h2 class="title-font font-medium text-xl text-gray-900">one-time upfront cost, free use weekly</h2>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="px-4 py-6 rounded-lg">
                  <img src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625194/hdao-nft/15_fazy0b.png"></img>
                  <h2 class="title-font font-medium text-xl text-gray-900">Choose and input your task into the app</h2>
                </div>
              </div>
              <img hidden class="lg:absolute lg:mx-auto lg:visible invisible" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652688154/hdao-nft/13_ytevpe.png"></img>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="px-4 py-6 rounded-lg">
                  <img src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625194/hdao-nft/17_p1gjpe.png"></img>
                  <h2 class="title-font font-medium text-xl text-gray-900">Get notified on status changes and completion</h2>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="px-4 py-6 rounded-lg">
                  <img src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625194/hdao-nft/16_zehwby.png"></img>
                  <h2 class="title-font font-medium text-xl text-gray-900">Give feedback so we can improve</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="features-1 body-font bg-purple-content text-gray-600">
          <div class="container mx-auto flex md:flex-row flex-col items-center px-5 py-8 lg:px-5 lg:py-32">
            <div class="-mx-4 mt-auto mb-auto flex flex-wrap content-start sm:w-2/3 sm:pr-10 lg:w-1/2">
              <div class="mb-6 w-full px-4 sm:p-4 md:px-8 lg:px-0 text-left lg:text-left">
                <h1 class="mt-12 font-sans text-2xl font-bold text-white-lt lg:px-0 lg:text-5xl">Help those in need and get your time back</h1>
                <p class="mt-6 font-normal text-white sm:text-left text-sm lg:text-justify lg:text-xl">
                  Blockchain technology like NFTs have unlocked seamless value transfer between anyone, anywhere, creating new opportunities that previously seemed impossible.
                </p>
                <p class="mt-4 font-normal text-white sm:text-left text-sm lg:text-justify lg:text-xl">
                  Simply holding an NFT PA in your wallet allows you to create space in your day-to-day life and unlock your own full potential while changing the lives of people in underserved communities.{" "}
                </p>
              </div>
            </div>
            <div class="mt-6 w-full  rounded-lg sm:mt-0 sm:w-1/3 lg:w-1/2">
              <img class="h-full w-full object-contain object-center" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652676413/hdao-nft/18_e3cnxw.png" alt="heart"></img>
            </div>
          </div>
        </section>
        <section class="features-2 body-font bg-purple-content text-gray-600">
          <div class="container mx-auto flex md:flex-row flex-col items-center px-5 py-8 lg:px-5 lg:py-32">
            <div class="-mx-4 mt-auto mb-auto flex flex-wrap content-start sm:w-2/3 sm:pr-10 lg:w-1/2">
              <div class="mb-6 w-full px-4 sm:p-4 md:px-12 lg:px-0 text-left lg:text-left">
                <h1 class="mt-12 font-sans text-2xl font-bold text-white-lt lg:px-0 lg:text-5xl">Real utility, every week</h1>
                <p class="mt-6 font-normal text-white sm:text-left text-sm lg:text-justify lg:text-xl">Once activated, the NFT grants you 20 energy bars to use each week to delegate tasks.</p>
                <p class="mt-4 font-normal text-white sm:text-left text-sm lg:text-justify lg:text-xl">1 energy bar = 30 minutes of PA time, saving you up to 10 hours per week, every week. </p>
              </div>
            </div>
            <div class="mt-6 w-full  rounded-lg sm:mt-0 sm:w-1/3 lg:w-1/2">
              <img class="h-full w-full object-contain object-center" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652676914/hdao-nft/19_yhdazc.png" alt="lightning with clock"></img>
            </div>
          </div>
        </section>
        <section class="tasks body-font bg-purple-content text-gray-600">
          <div class="flex w-full flex-col text-center">
            <h1 class="mx-8 mt-20 font-sans text-5xl font-bold text-white-lt lg:text-6xl">Type of Tasks</h1>
          </div>
          <div class="container mx-auto px-5 pt-20 pb-16">
            <div class="-m-2 lg:flex lg:flex-wrap">
              <div class="p-6 lg:w-1/2 lg:p-4">
                <div class="relative h-full rounded-2xl bg-purple-box bg-opacity-40 px-8 pt-4 pb-4 text-center">
                  <ul class="list-disc p-4 text-left">
                    <li class="py-2 text-white">Research flights and hotels</li>
                    <li class="py-2 text-white">Find leads on social media and/or job board sites</li>
                    <li class="py-2 text-white">Call stores/businesses to get information</li>
                    <li class="py-2 text-white">Price shop best offers for a product or service</li>
                    <li class="py-2 text-white">Retrieve public records/addresses/contact details</li>
                    <li class="py-2 text-white">Add accounts to a spreadsheet/CRM</li>
                    <li class="py-2 text-white">Event planning research</li>
                    <li class="py-2 text-white">Confirm appointments</li>
                    <li class="py-2 text-white">Research and report the policies for this rule/law</li>
                    <li class="py-2 text-white">Search and link to the roadmap of these 5 projects </li>
                    <li class="py-2 text-white">Research and collect certain data points over time</li>
                    <li class="py-2 text-white">Find and collect any data available on the internet</li>
                    <li class="py-2 text-white">Find business or peoples email addresses or contact info</li>
                    <li class="py-2 text-white">Find token unlock schedule for these projects</li>
                    <li class="py-2 text-white">Find the upcoming NFT releases on Solana</li>
                    <li class="py-2 text-white">Research transportation options</li>
                    <li class="py-2 text-white">Find and link to Discord servers for these 10 crypto projects</li>
                    <li class="py-2 text-white">Make a list of the upcoming spaces/talks for these 6 crypto projects</li>
                    <li class="py-2 text-white">Go to 3 Discord servers/Telegrams and find the answer to a question</li>
                  </ul>
                </div>
              </div>
              <div class="p-6 lg:w-1/2 lg:p-4">
                <div class="relative h-full rounded-2xl bg-purple-box bg-opacity-40 px-8 pt-4 pb-4 text-center">
                  <ul class="list-disc p-4 text-justify">
                    <li class="py-2 text-white">Search and find particular images online for use</li>
                    <li class="py-2 text-white">Transcribe audio</li>
                    <li class="py-2 text-white">Convert analog documents to digital</li>
                    <li class="py-2 text-white">Track data points over time</li>
                    <li class="py-2 text-white">Create/update spreadsheets</li>
                    <li class="py-2 text-white">Who are the investors (VCs) in xyz company</li>
                    <li class="py-2 text-white">Transfer internet data to a digital database</li>
                    <li class="py-2 text-white">Light bookkeeping</li>
                    <li class="py-2 text-white">Take notes from webinar</li>
                    <li class="py-2 text-white">Fill out online forms</li>
                    <li class="py-2 text-white">Find and collect specific icons online</li>
                    <li class="py-2 text-white">Verify outdated data, make changes to records</li>
                    <li class="py-2 text-white">Create basic slide decks from content</li>
                    <li class="py-2 text-white">Collate and file expenses</li>
                    <li class="py-2 text-white">Simple photo and video editing</li>
                    <li class="py-2 text-white">Document Template Creation</li>
                    <li class="py-2 text-white">Find and link me to the blogs for these 10 projects</li>
                    <li class="py-2 text-white">Find and list popular YouTube channels and podcasts on P2E gaming</li>
                    <li class="py-2 text-white">Make a list of keywords to search for a specific product or service</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="activation body-font bg-purple-content text-gray-600">
          <div class="container mx-auto flex md:flex-row flex-col items-center px-5 py-8 lg:px-5 lg:py-32">
            <div class="-mx-4 mt-auto mb-auto flex flex-wrap content-start sm:w-2/3 sm:pr-10 lg:w-1/2">
              <div class="mb-6 w-full px-4 sm:p-4 md:px-12 lg:px-0 text-left lg:text-left">
                <h1 class="mt-12 font-sans text-2xl font-bold text-white-lt lg:px-0 lg:text-5xl">Activation</h1>
                <p class="mt-6 font-normal text-white sm:text-left text-sm lg:text-justify lg:text-xl">
                  To activate the energy you must stake 10,000 HDAO tokens (current value $). As long as HDAO is staked, you can use the energy system and assign tasks weekly. Why stake HDAO? Check out the FAQ below.
                </p>
              </div>
            </div>
            <div class="mt-6 w-full  rounded-lg sm:mt-0 sm:w-1/3 lg:w-1/2">
              <img class="h-full w-full object-contain object-center" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625195/hdao-nft/20_airlpg.png" alt="lightning with clock"></img>
            </div>
          </div>
        </section>
        <section class="focus body-font bg-purple-content text-gray-600">
          <div class="container mx-auto flex md:flex-row flex-col items-center px-5 py-8 lg:px-5 lg:py-32">
            <div class="-mx-4 mt-auto mb-auto flex flex-wrap content-start sm:w-2/3 sm:pr-10 lg:w-1/2">
              <div class="mb-6 w-full px-4 sm:p-4 md:px-12 lg:px-0 text-left lg:text-left">
                <h1 class="mt-12 font-sans text-2xl font-bold text-white-lt lg:px-0 lg:text-5xl">High-value focus</h1>
                <p class="mt-6 font-normal text-white sm:text-left text-sm lg:text-justify lg:text-xl">
                  To spend more time on high-value activities, spend less time on lower-value activities. Make 3 lists that will help you delegate your time more effectively and boost productivity with your NFT PA:{" "}
                </p>
                <div class="lg:order-0 order-1 mx-auto w-full px-3 ">
                  <div class="w-full lg:max-w-md">
                    <ul class="mt-4">
                      <li class="mx-auto inline-flex items-center space-x-4 py-2 lg:text-left xl:py-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span class="text-md text-left  font-medium text-white md:text-2xl">Things you hate doing</span>
                      </li>
                      <li class="inline-flex items-center space-x-4 py-2 xl:py-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span class=" text-md font-medium text-white md:text-2xl">Things you can't do yourself</span>
                      </li>
                      <li class="inline-flex items-center space-x-4 py-2 xl:py-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span class=" text-md font-medium text-white md:text-2xl">Things you shouldn't be doing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-6 w-full  rounded-lg sm:mt-0 sm:w-1/3 lg:w-1/2">
              <img class="h-full w-full object-contain object-center" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625195/hdao-nft/21_tdndfg.png" alt="lightning with clock"></img>
            </div>
          </div>
        </section>
        <section class="benefits bg-purple-main text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full">
              <h1 class="mx-8 mt-20 font-sans text-5xl font-bold text-purple-title lg:text-6xl">Benefits</h1>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="p-4 md:w-1/3">
                <div class="flex rounded-lg h-full p-8 flex-col">
                  <div class="flex mx-auto items-center mb-3">
                    <img class="w-full" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625195/hdao-nft/22_rekqjr.png"></img>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-2xl text-black font-semibold">Help those in need</p>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="flex rounded-lg h-full p-8 flex-col">
                  <div class="flex mx-auto items-center mb-3">
                    <img class="w-full" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625195/hdao-nft/23_gcjkfw.png"></img>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-2xl text-black font-semibold">Loan Out</p>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="flex rounded-lg h-full p-8 flex-col">
                  <div class="flex mx-auto items-center mb-3">
                    <img class="w-full" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625195/hdao-nft/24_lcjvjn.png"></img>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-2xl text-black font-semibold">Resell</p>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="flex rounded-lg h-full p-8 flex-col">
                  <div class="flex mx-auto items-center mb-3">
                    <img class="w-full" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625196/hdao-nft/25_i3xk7z.png"></img>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-2xl text-black font-semibold">One-time cost</p>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="flex rounded-lg h-full p-8 flex-col">
                  <div class="flex mx-auto items-center mb-3">
                    <img class="w-full" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625196/hdao-nft/26_gnscxi.png"></img>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-2xl text-black font-semibold">Share energy</p>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="flex rounded-lg h-full p-8 flex-col">
                  <div class="flex mx-auto items-center mb-3">
                    <img class="w-full" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625196/hdao-nft/27_baciv3.png"></img>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-2xl text-black font-semibold">Save Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="range body-font bg-purple-main text-gray-600">
          <div class="flex flex-col text-center w-full">
            <h1 class="mx-8 mt-20 font-sans text-5xl font-bold text-purple-title lg:text-6xl">Salary Range of PA</h1>
          </div>
          <div class="container mx-auto flex md:flex-row flex-col items-center px-5 py-8 lg:px-5 lg:py-32">
            <div class="-mx-4 mt-auto mb-auto flex flex-wrap content-start sm:w-2/3 sm:pr-10 lg:w-1/2">
              <div class="mb-6 w-full px-4 sm:p-4 md:px-12 lg:px-0 text-left lg:text-left">
                <p class="mt-6 mb-6 font-normal text-black sm:text-left text-sm lg:text-justify lg:text-xl">ZipRecruiter, one of the largest recruiting US companies, shows work-from-home Virtual Assistant salary ranges from weekly to monthly.</p>
                <a class="underline font-normal text-black sm:text-left text-sm lg:text-justify lg:text-xl" href="https://www.ziprecruiter.com/Salaries/Work-From-Home-Virtual-Assistant-Salary" target="_blank" rel="noreferrer">
                  After a few months, NFT PA literally pays itself off with just a one-time mint.
                </a>
              </div>
            </div>
            <div class="mt-6 w-full  rounded-lg sm:mt-0 sm:w-1/2 lg:w-1/2">
              <div>
                <div class="p-4 w-full">
                  <div class="w-full h-full flex flex-col items-center">
                    <img class="rounded-lg w-full h-full object-center sm:mb-0 mb-4" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652685911/hdao-nft/29_yfp0ea.png"></img>
                    <img class="rounded-lg w-full h-full  object-center sm:mb-0 mb-4" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652685911/hdao-nft/30_iuubzl.png"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="resources body-font bg-purple-main text-gray-600">
          <div class="container mx-auto px-5 pb-12 py-24">
            <div class="mb-20 text-center">
              <h1 class="mx-8 mt-20 font-sans text-5xl font-bold text-purple-title lg:text-6xl">Ready to get more done?</h1>
            </div>
            <div class="mx-auto w-full lg:w-full lg:max-w-3xl">
              <img class="rounded object-cover object-center" alt="working community" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1652625196/hdao-nft/28_i46bhc.png"></img>
            </div>
            <a class="mx-auto items-center rounded-lg bg-purple-box py-4 px-5 font-bold text-white hover:bg-purple-box/80 focus:outline-none lg:inline-flex" target="_blank" rel="noreferrer" href="https://forms.gle/PZGDjDBXZC8WE26CA">
              Join waitlist
            </a>
          </div>
        </section>
        <section class="FAQs min-w-screen relative bg-purple-main pt-4 pb-16">
          <div class="container mx-auto px-8 sm:px-12 xl:px-5">
            <h1 class="mx-2 mt-12 font-sans text-5xl font-bold text-purple-title lg:text-6xl">Frequently Asked Questions</h1>
            <div class="mx-auto mt-10 w-full rounded-lg border bg-purple-box/70 px-6 py-6 text-justify sm:px-8 sm:py-8 sm:shadow md:px-12 lg:w-5/6 xl:w-2/3">
              <h3 class="py-4 text-lg font-bold text-white sm:text-xl md:text-3xl">When can I start?</h3>
              <p class="md:text-normal mt-2 text-base text-white sm:text-lg">
                The PA program launches sometime in June. But you need to become a certified hDAO PA by passing our Exam. You have plenty of time to learn the material (above) and take the Exam to enter the PA pool and start working when it launches.
                We highly recommend you complete each of the course links provided. Each link should only take 1-1.5 hrs but knowing this info will help you complete tasks quicker and with higher quality, which means more wages.
              </p>
              <p class="md:text-normal mt-6 text-base text-white sm:text-lg">Also, please tell your family and friends. They can all benefit and earn as a PA as these skills can be learned within a week.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Content;
