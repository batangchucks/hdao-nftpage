import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div>
        <header className="body-font bg-purple-main text-gray-600">
          <div className="container mx-auto flex flex-col flex-wrap items-center pt-5 pl-7 lg:pl-0 md:flex-row">
            <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
              <img className="h-10 w-10" src="https://secureservercdn.net/198.71.233.86/cb6.757.myftpupload.com/wp-content/uploads/2021/12/HDAO-60x60-72dpi-1.svg?time=1651670863"></img>
              <span className="ml-1 text-xl font-semibold">hDAO NFT Pocket Assistant</span>
            </a>
            <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
              <a className="mt-4 inline-flex items-center rounded-lg bg-purple-box py-2 px-3 text-base font-bold text-white hover:bg-purple-box/80 focus:outline-none md:mt-0" target="_blank" rel="noreferrer" href="https://humandao.org/">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Join Waitlist
              </a>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
