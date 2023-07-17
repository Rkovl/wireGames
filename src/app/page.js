export default function Home() {
  return (
    <>

      <main id='wrapper' className=" min-h-screen p-4 bg-gradient-to-tr from-stone-900 from-10% via-stone-800 via-30% to-stone-900 to-90% grid grid-cols-1 grid-rows-6">

        <div id='header' className='p-4 flex flex-row'>
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

        <div id='body' className='grid px-2 py-0 grid-cols-1 gap-4 h-max row-span-5 grid-rows-4'>
          <div id='gameName' className='font-mono text-4xl'>Legend of Zelda: Tears of the Kingdom</div>
          <div id='gamesContainer' className='row-span-3'>
            <div className='border-stone-600 bg-stone-800 border-double border-4 p-40'></div>
            
          </div>

        </div>

        <div id='footer' className='p-2'>
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
