import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-emerald-900 pb-8">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
        <div className="grid lg:grid-cols-6" >
          <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4" >
            {/* category 1 */}
            <div>
              <p className="font-medium tracking-wide text-green-600" >Category</p>
              <ul className="mt-2 space-y-2" >
                <li>
                  <a href="/" className="text-green-100 transition-colors duration-300 hover:text-green-400">News</a>
                </li>
                <li>
                  <a href="/" className="text-green-100 transition-colors duration-300 hover:text-green-400">World</a>
                </li>
                <li>
                  <a href="/" className="text-green-100 transition-colors duration-300 hover:text-green-400">Games</a>
                </li>
                <li>
                  <a href="/" className="text-green-100 transition-colors duration-300 hover:text-green-400">References</a>
                </li>
              </ul>
            </div>
            {/* category 2 */}

            <div>
              <p className="font-medium tracking-wide text-green-600" >Apples</p>
              <ul className="mt-2 space-y-2" >
                <li>
                  <a href="/" className="text-green-100 transition-colors duration-300 hover:text-green-400">web</a>
                </li>
                <li>
                  <a href="/" className="text-green-100 transition-colors duration-300 hover:text-green-400">eCommerce</a>
                </li>
                <li>
                  <a href="/" className="text-green-100 transition-colors duration-300 hover:text-green-400">Business</a>
                </li>
                <li>
                  <a href="/" className="text-green-100 transition-colors duration-300 hover:text-green-400">Entainment</a>
                </li>
              </ul>
            </div>
            {/*category 3 */}

            <div>
              <p className="font-medium tracking-wide text-green-600" >Apples</p>
              <ul className="mt-2 space-y-2" >
                <li>
                  <a href="/" className="text-green-100 transition-colors duration-300 hover:text-green-400">web</a>
                </li>
                <li>
                  <a href="/" className="text-green-100 transition-colors duration-300 hover:text-green-400">eCommerce</a>
                </li>
                <li>
                  <a href="/" className="text-green-100 transition-colors duration-300 hover:text-green-400">Business</a>
                </li>
                <li>
                  <a href="/" className="text-green-100 transition-colors duration-300 hover:text-green-400">Entainment</a>
                </li>
              </ul>
            </div>

            {/*category 4 */}

            <div>
              <p className="font-medium tracking-wide text-green-600" >Apples</p>
              <ul className="mt-2 space-y-2" >
                <li>
                  <a href="/" className="text-green-100 transition-colors duration-300 hover:text-green-400">web</a>
                </li>
                <li>
                  <a href="/" className="text-green-100 transition-colors duration-300 hover:text-green-400">eCommerce</a>
                </li>
                <li>
                  <a href="/" className="text-green-100 transition-colors duration-300 hover:text-green-400">Business</a>
                </li>
                <li>
                  <a href="/" className="text-green-100 transition-colors duration-300 hover:text-green-400">Entainment</a>
                </li>
              </ul>
            </div>
          </div>
            {/* subscriptions */}
            <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5" >
              <p className="font-medium tracking-wide text-green-600" >Subscription for updates</p>
              <form className="mt-4 flex flex-col md:flex-row" >
                <input type="email" name="email" id="email" className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none"/>
                <button type="submit" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-green-200 hover:text-black focus:outline-none border">Subscribe</button>
              </form>
              <p className="mt-4 text-sm text-gray-400" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse sed modi, iure fuga amet earum voluptates quo dolore. Cupiditate corporis repellendus numquam iusto ab perspiciatis ipsa excepturi ut labore dolore.</p>
            </div>
        </div>

        <div className="flex flex-col justify-between mt-8 pt-5 pb-10 border-t border-gray-800 sm:flex-row" >
          <p className="text-sm text-gray-400" >© Copyright 2024 | All right reserved.</p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a href="" className="text-gray-400 transition-all duration-300 hover:text-green-400"><FaTwitter className="h-6 w-6"/></a>
            <a href="" className="text-gray-400 transition-all duration-300 hover:text-green-400"><FaInstagram className="h-6 w-6"/></a>
            <a href="" className="text-gray-400 transition-all duration-300 hover:text-green-400"><FaLinkedin className="h-6 w-6"/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer