import Image from 'next/image'

export default function Home() {
  return (
    <>

      <main id='wrapper' className=" min-h-screen p-4 bg-gradient-to-tr from-stone-900 from-10% via-stone-800 via-30% to-stone-900 to-90% flex flex-col">

        <div id='header' className='p-20 flex'>
          <div className='flex-auto flex flex-row'>
            <img className='bg-yellow-500 rounded-full w-14 border-double border-4 border-stone-700' src='/logo.png'/>
          </div>
          <div className='flex-auto flex flex-row-reverse'>
            <img className='w-40' src='/icons.png'/>
            <strong className='text-4xl p-2 pr-10 font-mono'>1:20pm</strong>
          </div>
        </div>

        <div id='body' className='flex flex-col px-40 py-0 flex-auto'>
          <div id='gameName' className='font-mono text-5xl'>Legend of Zelda: Tears of the Kingdom</div>
          <div id='gamesContainer' className='flex flex-row flex-nowrap flex-auto py-10'>
            <div className='border-stone-600 bg-stone-800 border-double border-4 min-w-[40vh] max-h-[40vh]'></div>
          </div>
          <div className='flex flex-row px-20 gap-10 justify-center'>
            <button className='rounded-full min-w-[10vh] min-h-[10vh] bg-stone-300'></button>
            <button className='rounded-full min-w-[10vh] min-h-[10vh] bg-stone-300'></button>
            <button className='rounded-full min-w-[10vh] min-h-[10vh] bg-stone-300'></button>
            <button className='rounded-full min-w-[10vh] min-h-[10vh] bg-stone-300'></button>
            <button className='rounded-full min-w-[10vh] min-h-[10vh] bg-stone-300'></button>
            <button className='rounded-full min-w-[10vh] min-h-[10vh] bg-stone-300'></button>
          </div>
        </div>

        <div id='footer' className='p-20'>
          
        </div>
        
      </main>

    </>
  )
}
