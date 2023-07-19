"use client"

import {useState, useEffect } from 'react';


export default function Home() {

  const [dt, setDt] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
      let secTimer = setInterval( () => {
        setDt(new Date().toLocaleTimeString())
      },1000)
  
      return () => clearInterval(secTimer);
  }, []);

  const handleClick = (direction) =>{
    let container = document.getElementById("body")
    let scrollAmount = container.scrollLeft
    if(direction === "R"){
      container.scrollTo({
        top: 0,
        left: scrollAmount + 500,
        behavior: "smooth"

      })
    }
    else{
      container.scrollTo({
        top: 0,
        left: scrollAmount - 500,
        behavior: "smooth"

      })
    }
    console.log(scrollAmount)
  }

  return (
    <>

      <main id='wrapper' className=" min-h-screen p-4 bg-gradient-to-tr from-stone-900 from-10% via-stone-800 via-30% to-stone-900 to-90% grid grid-cols-1">

        <div id='header' className='p-3 flex flex-row h-[10vh]'>
          <div className='basis-1/2'>
            <img className='bg-yellow-500 rounded-full w-14 border-double border-4 border-stone-700' src='/logo.png'/>
          </div>
          <div className='basis-1/2'>
            <div className="grid 2xl:grid-cols-2 justify-items-end">
              <p className='text-base font-mono pr-1 2xl:text-5xl'>{dt}</p>
              <img className='w-9/12 sm:w-3/12' src='/icons.png'/>
            </div>
          </div>
        </div>

        <div className=" sm:bg-gradient-to-r from-transparent from-40% md:from-30% lg:from-25% 2xl:from-15% via-stone-850 via-60% md:via-50% lg:via-35% 2xl:via-25% to-stone-900 to-90 h-[15.5vh] inset-x-0 top-24 absolute z-10"></div>
        <div className=" sm:bg-gradient-to-r from-transparent from-10%  to-stone-900 h-[45vh] inset-y-0 right-0 top-60 w-32 absolute z-10 md:hidden"></div>
        {/* <div id='body' className='grid px-2 py-0 grid-cols-1 gap-4 h-[65vh]'>
          <div id='gameName' className='font-mono text-4xl h-[15vh]'>Legend of Zelda: Tears of the Kingdom</div>

          <div id='gamesContainer' className='h-[50vh] snap-x snap-mandatory overflow-x-auto w-full relative flex'>
            <div className='border-stone-600 bg-stone-800 border-double border-4 h-[40vh] w-[40vh] snap-start scroll-mx-6 shrink-0 mr-5'>
              <img src="zeldaTestImage.jpg"></img>
            </div>
            <div className='border-stone-600 bg-stone-800 border-double border-4 h-[40vh] w-[40vh] snap-start scroll-mx-6 shrink-0 mr-5'>
              <img src="zeldaTestImage.jpg"></img>
            </div>
            <div className='border-stone-600 bg-stone-800 border-double border-4 h-[40vh] w-[40vh] snap-start scroll-mx-6 shrink-0 mr-5'>
              <img src="zeldaTestImage.jpg"></img>
            </div>
            <div className='border-stone-600 bg-stone-800 border-double border-4 h-[40vh] w-[40vh] snap-start scroll-mx-6 shrink-0 mr-5'>
              <img src="zeldaTestImage.jpg"></img>
            </div>
          </div>
        </div> */}
        <div id='body' className=' px-2 py-0 h-[65vh] snap-x snap-mandatory overflow-x-hidden w-full relative flex'>

            <div id="legendOfZelda" className=' snap-start scroll-mx-5 shrink-0 mr-6 xl:mr-14'>
              <div id='gameName' className='font-mono text-4xl h-[15vh] w-[40vh] items-center flex'>Legend of Zelda: Tears of the Kingdom</div>
                <img className="border-stone-600 bg-stone-800 border-double border-4 h-[40vh] w-[40vh]" src="zeldaTestImage.jpg"></img>
            </div>
            <div id="marioParty" className=' snap-start scroll-mx-5 shrink-0 mr-6 xl:mr-14'>
              <div id='gameName' className='font-mono text-4xl h-[15vh] w-[40vh] items-center flex'>Mario Party 64</div>
                <img className="border-stone-600 bg-stone-800 border-double border-4 h-[40vh] w-[40vh]" src="zeldaTestImage.jpg"></img>
            </div>
            <div id="killerKing" className=' snap-start scroll-mx-5 shrink-0 mr-6 xl:mr-14'>
              <div id='gameName' className='font-mono text-4xl h-[15vh] w-[40vh] items-center flex'>Killer King Fighter Z-XL: The Reborn</div>
                <img className="border-stone-600 bg-stone-800 border-double border-4 h-[40vh] w-[40vh]" src="zeldaTestImage.jpg"></img>
            </div>
            <div className=' snap-start scroll-mx-5 shrink-0 mr-6 xl:mr-14'>
              <div id='gameName' className='font-mono text-4xl h-[15vh] w-[40vh] items-center flex'>Anime List Gambit</div>
              <img className="border-stone-600 bg-stone-800 border-double border-4 h-[40vh] w-[40vh]" src="animeListGambitLogo.png"></img>
            </div>

            <div className=' snap-start scroll-mx-5 shrink-0 mr-6 xl:mr-14'>
              <div id='gameName' className='font-mono text-4xl h-[15vh] w-[40vh]'></div>
              <img className="border-stone-600 bg-stone-800 border-double border-4 h-[40vh] w-[40vh]" src=""></img>
            </div>
            <div className=' snap-start scroll-mx-5 shrink-0 mr-6 xl:mr-14'>
              <div id='gameName' className='font-mono text-4xl h-[15vh] w-[40vh]'></div>
              <img className="border-stone-600 bg-stone-800 border-double border-4 h-[40vh] w-[40vh]" src=""></img>
            </div>
            <div className=' snap-start scroll-mx-5 shrink-0 mr-6 xl:mr-14'>
              <div id='gameName' className='font-mono text-4xl h-[15vh] w-[40vh]'></div>
              <img className="border-stone-600 bg-stone-800 border-double border-4 h-[40vh] w-[40vh]" src=""></img>
            </div>
            <div className=' snap-start scroll-mx-5 shrink-0 mr-6 xl:mr-14'>
              <div id='gameName' className='font-mono text-4xl h-[15vh] w-[40vh]'></div>
              <img className="border-stone-600 bg-stone-800 border-double border-4 h-[40vh] w-[40vh]" src=""></img>
            </div>

        </div>


        <div id='footer' className='p-2 h-[20vh] justify-center items-center flex'>
          <div className='grid grid-cols-3 px-5 gap-8 justify-center w-[500px] lg:w-[500px]'>
            <button className='rounded-full p-7 bg-stone-300' onClick={()=>handleClick("L")}></button>
            <button className='rounded-full p-7 bg-stone-300'></button>
            <button className='rounded-full p-7 bg-stone-300' onClick={()=>handleClick("R")}></button>
            <button className='rounded-full p-7 bg-stone-300'></button>
            <button className='rounded-full p-7 bg-stone-300'></button>
            <button className='rounded-full p-7 bg-stone-300'></button>

          </div>
        </div>
        
      </main>

    </>
  )
}
