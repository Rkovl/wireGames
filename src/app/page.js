export default function Home() {
  return (
    <>

      <main id='wrapper' className=" min-h-screen p-4 bg-gradient-to-tr from-stone-900 from-10% via-stone-800 via-30% to-stone-900 to-90% grid grid-cols-1">

        <div id='header' className='p-3 flex flex-row h-[10vh]'>
          <div className='basis-1/2'>
            <img className='bg-yellow-500 rounded-full w-14 border-double border-4 border-stone-700' src='/logo.png'/>
          </div>
          <div className='basis-1/2'>
            <div className="grid justify-items-end">
              <p className='text-base font-mono pr-1'>1:20pm</p>
              <img className='w-9/12 ' src='/icons.png'/>
            </div>
          </div>
        </div>

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
        <div id='body' className=' px-2 py-0 h-[65vh] snap-x snap-mandatory overflow-x-auto w-full relative flex'>

          
            <div className=' snap-start scroll-mx-6 shrink-0 mr-6'>
              <div id='gameName' className='font-mono text-4xl h-[15vh] w-[40vh]'>Legend of Zelda: Tears of the Kingdom</div>
              <img className="border-stone-600 bg-stone-800 border-double border-4 h-[40vh] w-[40vh]" src="zeldaTestImage.jpg"></img>
            </div>
            <div className=' snap-start scroll-mx-6 shrink-0 mr-6'>
              <div id='gameName' className='font-mono text-4xl h-[15vh] w-[40vh]'>Legend of Zelda: Tears of the Kingdom</div>
              <img className="border-stone-600 bg-stone-800 border-double border-4 h-[40vh] w-[40vh]" src="zeldaTestImage.jpg"></img>
            </div>
            <div className=' snap-start scroll-mx-6 shrink-0 mr-6'>
              <div id='gameName' className='font-mono text-4xl h-[15vh] w-[40vh]'>Legend of Zelda: Tears of the Kingdom</div>
              <img className="border-stone-600 bg-stone-800 border-double border-4 h-[40vh] w-[40vh]" src="zeldaTestImage.jpg"></img>
            </div>
            <div className=' snap-start scroll-mx-6 shrink-0 mr-6'>
              <div id='gameName' className='font-mono text-4xl h-[15vh] w-[40vh]'>Legend of Zelda: Tears of the Kingdom</div>
              <img className="border-stone-600 bg-stone-800 border-double border-4 h-[40vh] w-[40vh]" src="zeldaTestImage.jpg"></img>
            </div>

        </div>


        <div id='footer' className='p-2 h-[20vh]'>
          <div className='grid grid-rows-2 grid-flow-col px-20 gap-10 justify-center '>
            <button className='rounded-full min-w-[12vw] min-h-[12vw] bg-stone-300'></button>
            <button className='rounded-full min-w-[12vw] min-h-[12vw] bg-stone-300'></button>
            <button className='rounded-full min-w-[12vw] min-h-[12vw] bg-stone-300'></button>
            <button className='rounded-full min-w-[12vw] min-h-[12vw] bg-stone-300'></button>
            <button className='rounded-full min-w-[12vw] min-h-[12vw] bg-stone-300'></button>
            <button className='rounded-full min-w-[12vw] min-h-[12vw] bg-stone-300'></button>

          </div>
        </div>
        
      </main>

    </>
  )
}
