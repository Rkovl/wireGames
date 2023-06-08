import Image from 'next/image'

export default function Home() {
  return (
    <>

      <main id='wrapper' className=" min-h-screen p-4 bg-gradient-to-tr from-stone-900 from-10% via-stone-800 via-30% to-stone-900 to-90%">

        <div id='header' className='p-20 flex'>
          <div className='flex-auto flex flex-row'>
            <img className='bg-yellow-500 rounded-full w-14 border-double border-4 border-stone-700' src='/logo.png'/>
          </div>
          <div className='flex-auto flex flex-row-reverse'>
            <img className='w-40' src='/icons.png'/>
            <strong className='text-4xl p-2 pr-10 font-mono'>1:20pm</strong>
          </div>
        </div>

        <div>

        </div>

        <div>

        </div>
        
      </main>

    </>
  )
}
