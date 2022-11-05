import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Tab } from '@headlessui/react'

export default function Home() {

  return (
    <>

      <div className="p-5 bg-gray-50">

        <h1 className='text-3xl text-black font-semibold mb-6 '>
          Example 01 -- Tabs
        </h1>

        {/* Tab Component */}
        <div className="headless-ui-tab">

          <Tab.Group>

            {/* Main Tab Menu */}
            <Tab.List className="flex flex-wrap">

              {/* 1st Menu item ::  Preview */}
              <Tab className="w-1/5 px-4 pt-2 pb-3 flex justify-start items-start text-base font-medium relative rounded-t-lg border-2 border-b-0 
              ui-selected:bg-white
              ui-selected:text-black  
              ui-selected:border-gray-400 
                ui-selected:z-20

              ui-not-selected:bg-white
              ui-not-selected:text-black
              ui-not-selected:border-[#f6f6f6]
                ui-not-selected:z-0">

                <div className="flex flex-col items-start text-left space-y-2">

                  <h4 className=''>
                    Preview
                  </h4>
                </div>
              </Tab>

              {/* 2nd Menu item ::  Code */}
              <Tab className="w-1/5 px-4 pt-2 pb-3 flex justify-start items-start text-base font-medium relative rounded-t-lg border-2 border-b-0 
              ui-selected:bg-white
              ui-selected:text-black  
              ui-selected:border-gray-400 
                ui-selected:z-20

              ui-not-selected:bg-white
              ui-not-selected:text-black
              ui-not-selected:border-[#f6f6f6]
                ui-not-selected:z-0">

                <div className="flex flex-col items-start text-left space-y-2">

                  <h4 className=''>
                    Code (Index.js)
                  </h4>
                </div>
              </Tab>

              {/* 3rd Menu item ::  Global.css */}
              <Tab className="w-1/5 px-4 pt-2 pb-3 flex justify-start items-start text-base font-medium relative rounded-t-lg border-2 border-b-0 
              ui-selected:bg-white
              ui-selected:text-black  
              ui-selected:border-gray-400 
                ui-selected:z-20

              ui-not-selected:bg-white
              ui-not-selected:text-black
              ui-not-selected:border-[#f6f6f6]
                ui-not-selected:z-0">

                <div className="flex flex-col items-start text-left space-y-2">

                  <h4 className=''>
                    Global.css
                  </h4>
                </div>
              </Tab>

              {/* 4th Menu item ::  NPM Install */}
              <Tab className="w-1/5 px-4 pt-2 pb-3 flex justify-start items-start text-base font-medium relative rounded-t-lg border-2 border-b-0 
              ui-selected:bg-white
              ui-selected:text-black  
              ui-selected:border-gray-400 
                ui-selected:z-20

              ui-not-selected:bg-white
              ui-not-selected:text-black
              ui-not-selected:border-[#f6f6f6]
                ui-not-selected:z-0">

                <div className="flex flex-col items-start text-left space-y-2">

                  <h4 className=''>
                    NPM Install
                  </h4>
                </div>
              </Tab>

            </Tab.List>

            {/* Main Tab Content */}
            <Tab.Panels>

              {/* 1st Tab Content :: (Preview)  */}
              <Tab.Panel className="bg-white px-1 py-5 min-h-screen border-2 border-gray-400 relative z-10 -mt-0.5">

                {/* Content Starts from here */}
                <div className="bg-gray-100 px-4 py-5">
                  <div className="headless-ui-tab">

                    {/* Tab Component (Sub)*/}
                    <Tab.Group>

                      {/* Sub Tab Menu.... */}
                      <Tab.List className="flex flex-wrap">

                        {/* 1st Sub Menu item ::  Round 1 */}
                        <Tab className="w-1/5 px-4 pt-2 pb-3 flex justify-start items-start text-base font-medium relative rounded-t-lg border-2 border-b-0 
                        ui-selected:bg-white
                        ui-selected:text-black  
                        ui-selected:border-gray-400 
                        ui-selected:z-20
                      
                        ui-not-selected:bg-white
                        ui-not-selected:text-black
                        ui-not-selected:border-[#f6f6f6]
                        ui-not-selected:z-0">

                          <div className="flex flex-col items-start text-left space-y-2">

                            <h4 className=''>
                              Round 1
                            </h4>

                            <span className='text-xs font-normal text-gray-500'>
                              65% Repaid - 3.5 Cr Outstanding
                            </span>
                          </div>

                        </Tab>

                        {/* 2nd Sub Menu item ::  Round 2 */}
                        <Tab className="w-1/5 px-4 pt-2 pb-3 flex justify-start items-start text-base font-medium relative rounded-t-lg border-2 border-b-0 
                        ui-selected:bg-white
                        ui-selected:text-black  
                        ui-selected:border-gray-400 
                        ui-selected:z-20

                        
                        ui-not-selected:bg-white
                        ui-not-selected:text-black
                        ui-not-selected:border-[#f6f6f6]
                        ui-not-selected:z-0">

                          <div className="flex flex-col items-start text-left space-y-2">

                            <h4 className=''>
                              Round 2
                            </h4>

                            <span className='text-xs font-normal text-gray-500'>
                              27% Repaid - 7.3 Cr Outstanding
                            </span>
                          </div>

                        </Tab>

                        {/* 3rd Sub Menu item ::  Round 3 */}
                        <Tab className="w-1/5 px-4 pt-2 pb-3 flex justify-start items-start text-base font-medium relative rounded-t-lg border-2 border-b-0 
                        ui-selected:bg-white
                        ui-selected:text-black  
                        ui-selected:border-gray-400 
                        ui-selected:z-20

                        
                        ui-not-selected:bg-white
                        ui-not-selected:text-black
                        ui-not-selected:border-[#f6f6f6]
                        ui-not-selected:z-0">

                          <div className="flex flex-col items-start text-left space-y-2">

                            <h4 className=''>
                              Round 3
                            </h4>

                            <span className='text-xs font-normal text-gray-500'>
                              48% Repaid - 6.8 Cr Outstanding
                            </span>
                          </div>

                        </Tab>

                        {/* 4th Sub Menu item :: Closed Loan */}
                        <Tab className="w-1/5 px-4 pt-2 pb-3 flex justify-start items-start text-base font-medium relative rounded-t-lg border-2 border-b-0 
                        ui-selected:bg-white
                        ui-selected:text-black  
                        ui-selected:border-gray-400 
                        ui-selected:z-20


                        ui-not-selected:bg-white
                        ui-not-selected:text-black
                        ui-not-selected:border-[#f6f6f6]
                        ui-not-selected:z-0">

                          <div className="flex flex-col items-start text-left space-y-2">

                            <h4 className=''>
                              Closed Loans
                            </h4>

                            <span className='text-xs font-normal text-gray-500'>
                              5 Loans - 4.2 Cr
                            </span>
                          </div>
                        </Tab>

                      </Tab.List>

                      {/* Tab Content... */}
                      <Tab.Panels>

                        <Tab.Panel className="bg-white px-4 py-3 min-h-screen border-2 border-gray-400 relative z-10 -mt-0.5">
                          Round 1 Content
                        </Tab.Panel>

                        <Tab.Panel className="bg-white px-4 py-3 min-h-screen border-2 border-gray-400 relative z-10 -mt-0.5">
                          Round 2  Content
                        </Tab.Panel>

                        <Tab.Panel className="bg-white px-4 py-3 min-h-screen border-2 border-gray-400 relative z-10 -mt-0.5">
                          Round 3  Content
                        </Tab.Panel>

                        <Tab.Panel className="bg-white px-4 py-3 min-h-screen border-2 border-gray-400 relative z-10 -mt-0.5">
                          Closed Loans Content
                        </Tab.Panel>

                      </Tab.Panels>

                    </Tab.Group>
                  </div>
                </div>


              </Tab.Panel>

              {/* 2nd Tab Content :: (Code)  */}
              <Tab.Panel className="bg-white px-4 py-3 min-h-screen border-2 border-gray-400 relative z-10 -mt-0.5">

                {/* Content Starts from here */}
                <blockquote>
                  <pre className="overflow-auto">
                    {/* It's Code */}
                    <code>
                      {`
{/* ----------Import Above your Components------------------------ */}
import { Tab } from '@headlessui/react'
{/* ---------------------------------- */}      

{/* ------- JSX Code Between the 
            export default function Home() {
              return( <>
                  Here.......
               </> )
            }
----  */}
{/* Tab Component */}                   
<div className="headless-ui-tab">
 <Tab.Group>

   {/* Tab Menu Navbar... */}
   <Tab.List className="flex flex-wrap">

    {/* 1st Menu item ::  Round 1 */}
     <Tab className="w-1/5 px-4 pt-2 pb-3 flex justify-start items-start text-base font-medium relative rounded-t-lg border-2 border-b-0 
      ui-selected:bg-white
      ui-selected:text-black  
      ui-selected:border-gray-400 
        ui-selected:z-20

      ui-not-selected:bg-white
      ui-not-selected:text-black
      ui-not-selected:border-[#f6f6f6]
        ui-not-selected:z-0">

       <div className="flex flex-col items-start text-left space-y-2">

         <h4 className=''>
           Round 1
         </h4>

         <span className='text-xs font-normal text-gray-500'>
           65% Repaid - 3.5 Cr Outstanding
         </span>
       </div>

     </Tab>

     {/* 2nd Menu item ::  Round 2 */}
     <Tab className="w-1/5 px-4 pt-2 pb-3 flex justify-start items-start text-base font-medium relative rounded-t-lg border-2 border-b-0 
     ui-selected:bg-white
      ui-selected:text-black  
      ui-selected:border-gray-400 
        ui-selected:z-20

      ui-not-selected:bg-white
      ui-not-selected:text-black
      ui-not-selected:border-[#f6f6f6]
        ui-not-selected:z-0">

       <div className="flex flex-col items-start text-left space-y-2">

         <h4 className=''>
           Round 2
         </h4>

         <span className='text-xs font-normal text-gray-500'>
           27% Repaid - 7.3 Cr Outstanding
         </span>
       </div>

     </Tab>

     {/* 3rd Menu item ::  Round 3 */}
     <Tab className="w-1/5 px-4 pt-2 pb-3 flex justify-start items-start text-base font-medium relative rounded-t-lg border-2 border-b-0 
     ui-selected:bg-white
      ui-selected:text-black  
      ui-selected:border-gray-400 
        ui-selected:z-20

      ui-not-selected:bg-white
      ui-not-selected:text-black
      ui-not-selected:border-[#f6f6f6]
        ui-not-selected:z-0">

       <div className="flex flex-col items-start text-left space-y-2">

         <h4 className=''>
           Round 3
         </h4>

         <span className='text-xs font-normal text-gray-500'>
           48% Repaid - 6.8 Cr Outstanding
         </span>
       </div>

     </Tab>

     {/* 4th Menu item ::  Closed Loans */}
     <Tab className="w-1/5 px-4 pt-2 pb-3 flex justify-start items-start text-base font-medium relative rounded-t-lg border-2 border-b-0 
     ui-selected:bg-white
      ui-selected:text-black  
      ui-selected:border-gray-400 
        ui-selected:z-20

      ui-not-selected:bg-white
      ui-not-selected:text-black
      ui-not-selected:border-[#f6f6f6]
        ui-not-selected:z-0">

       <div className="flex flex-col items-start text-left space-y-2">

         <h4 className=''>
           Closed Loans
         </h4>

         <span className='text-xs font-normal text-gray-500'>
           5 Loans - 4.2 Cr
         </span>
       </div>
     </Tab>

   </Tab.List>

   {/* Tab Content... */}
   <Tab.Panels>

     <Tab.Panel className="bg-white px-4 py-3 min-h-screen border-2 border-gray-400 relative z-10 -mt-0.5">
       Round 1 Content
     </Tab.Panel>

     <Tab.Panel className="bg-white px-4 py-3 min-h-screen border-2 border-gray-400 relative z-10 -mt-0.5">
       Round 2  Content
     </Tab.Panel>

     <Tab.Panel className="bg-white px-4 py-3 min-h-screen border-2 border-gray-400 relative z-10 -mt-0.5">
       Round 3  Content
     </Tab.Panel>

     <Tab.Panel className="bg-white px-4 py-3 min-h-screen border-2 border-gray-400 relative z-10 -mt-0.5">
       Closed Loans Content
     </Tab.Panel>

   </Tab.Panels>

 </Tab.Group>
</div>

`}
                    </code>
                  </pre>
                </blockquote>

              </Tab.Panel>

              {/* 3rd Tab Content :: (Globals.CSS)  */}
              <Tab.Panel className="bg-white px-4 py-3 min-h-screen border-2 border-gray-400 relative z-10 -mt-0.5">

                {/* Content Starts from here */}
                <blockquote>
                  <pre className="overflow-auto">
                    {/* It's Code */}
                    <code>
                      {`
@tailwind base;
@tailwind components;
@tailwind utilities;

/*  */
.headless-ui-tab button {
  outline: none;
  margin: 0;
}

`}
                    </code>
                  </pre>
                </blockquote>

              </Tab.Panel>

              {/* 4th Tab Content :: (NPM Install)  */}
              <Tab.Panel className="bg-white px-4 py-3 min-h-screen border-2 border-gray-400 relative z-10 -mt-0.5">

                {/* Content Starts from here */}
                <blockquote>
                  <pre className="overflow-auto">
                    {/* It's Code */}
                    <code>
                      {`
# -------------------------------------------------------
# Install Tailwind CSS from Official Site....
# -------------------------------
# [[ https://tailwindcss.com/docs/guides/nextjs ]]
 
<# 04 #> npm install -D tailwindcss postcss autoprefixer;
<# 05 #> npx tailwindcss init -p;

# ----------------------
# tailwind.config.js
# ----------------------
	module.exports = {
	  content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	  ],
	}
# ----------------------

# -------------
# globals.css
# -------------
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	
# ----------------------
# -------------------------------------------------------

# -------------------------------------------------------
# Install HeadLessUI from Official Site....
# -------------------------------
# [[ https://headlessui.com/react/tabs#installation ]]
# [[ https://github.com/tailwindlabs/headlessui/tree/main/packages/%40headlessui-tailwindcss ]]

<# 06 #> npm install @headlessui/react
<# 07 #> npm install @headlessui/tailwindcss

# ---------------------
# tailwind.config.js
# ---------------------
	module.exports = {
		plugins: [
			require('@headlessui/tailwindcss')
			({ prefix: 'ui' })
		],
  }
# ----------------------

# ---------------------
# index.js
# ---------------------
import { Tab } from '@headlessui/react'

`}
                    </code>
                  </pre>
                </blockquote>

              </Tab.Panel>

            </Tab.Panels>

          </Tab.Group>
        </div>


      </div>

    </>
  )
}
