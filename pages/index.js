import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Tab } from '@headlessui/react'
import Menubar from '../src/components/nav/menubar'
import Link from 'next/link'

export default function Home() {

  return (
    <>

      <div className="">

        <header class="text-gray-600 body-font bg-gray-50">
          <div class="xl:container mx-auto flex xl:flex-nowrap flex-col md:flex-row justify-between items-center">
            <a class="w-full md:w-auto flex justify-center title-font font-medium items-center text-gray-900 shadow-b-sm shadow-orange-400">

              <h4 class="w-full  text-3xl font-medium port-name tracking-wide capitalize sm:pl-12 sm:pr-40 pt-8 pb-8 bg_grad_moti flex justify-center items-center"> Kinnari Shah</h4>

            </a>

            <div className="w-2/5 justify-evenly hidden lg:flex lg:gap-x-8 ">
              <Link href="/cart" className="text-2xl font-semibold text-gray-900">
                Intro
              </Link>

              <Link href="/cart" className="text-2xl font-semibold text-gray-900">
                Works
              </Link>

              <Link href="/" className="text-2xl font-semibold text-gray-900">
                Experience
              </Link>
            </div>

            <div className="flex justify-center items-center ">

              <div className="sm:min-w-[300px] flex items-center justify-center flex-wrap gap-x-8 gap-y-2 pt-4 sm:pt-8 pb-4 sm:pb-8 pr-6">

                <a href="tel:+918306017784" className="text-2xl text-black font-semibold tracking-wider">
                  +91 83060 17784
                </a>

                <div className="flex items-center justify-center gap-x-4 gap-y-8">
                  <a href="tel:+918306017784" className="w-6 h-6 xl:w-8 xl:h-8 ml-2 rounded-full text-gray-900 hover:text-gray-700">
                    <img src="/img/phone.svg" alt="" className="w-6 h-6 xl:w-8 xl:h-8 rounded-full" />
                  </a>

                  <a href="tel:+918306017784" className="hover:shadow-b-lg">
                    <img src="/img/icons/whatsapp-svgrepo-com.svg" alt="" className="w-6 h-6 xl:w-8 xl:h-8 ml-2" />
                  </a>


                  <a href="mailto:shahkinnari70@gmail.com" className="hover:shadow-b-lg">
                    <img src="/img/icons/gmail-svgrepo-com.svg" alt="" className="w-10 h-10 xl:w-14 xl:h-14" />
                  </a>
                </div>



              </div>

            </div>



          </div>





        </header>

      </div>

    </>
  )
}
