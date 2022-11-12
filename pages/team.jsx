import Navbar from '../components/Navbar/navbar'
import Image from "Next/Image"

function team() {
  return (
    <section>
      <Navbar />
      <main className='w-screen min-h-[90vh] flex flex-col align-center'>
        <h1 className='text-3xl font-bold text-center p-6'>Meet our team</h1>
        <section className='w-full p-10'>

        <div className='grid place-items-center w-full h-full bg-red-500 p-8'>
            <div className='w-[300px] h-[150px] bg-red-400'>
              <Image src={follow.svg} alt='something'/>
            </div>
        </div>
        </section>
      </main>
    </section>
  )
}

export default team