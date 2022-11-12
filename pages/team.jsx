import Navbar from '../components/Navbar/navbar'
import Profile from '../components/Profile'
import users from '../content/users.json'

function team() {
  return (
    <section className='font-raleway overflow-hidden'>
      <Navbar />
      <main className='w-screen min-h-full flex flex-col align-center bg-backgroundColor'>
        <h1 className='text-4xl font-bold text-center mt-8 underline-offset-8 decoration-pink-500 text-black/20'>Meet our team</h1>
        <section className='w-full py-8'>
          <div className='flex flex-wrap justify-center gap-8 w-full h-full bg-red-500 px-40 mb-14'>
            {users.map((u, i) => {
              return (
                <Profile
                  user={u}
                  key={i}
                />
              )
            })}
          </div>
        </section>
      </main>
    </section>
  )
}

export default team