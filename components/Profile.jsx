import Image from 'next/image'
import Link from 'next/link'
import githubLogo from '../public/githubLogo.svg';
import twitter from '../public/twitter.svg';


function Profile({ user }) {
  return (
    <div className="w-[300px] h-[350px] hover:scale-[1.04] duration-500">
      <div className=' flex flex-col items-center justify-center w-full h-3/4 '>
        <Image className='rounded-full border-4 border-[#36018C]/80' width="200" height='200' src={user.avatar} alt='userpicture' />
      </div>
      <div className='text-center'>
        <h2 className='text-2xl font-medium text-black/60'>{user.name}</h2>
        <p className='text-md mb-3'>{user.role}</p>
        <div className='flex justify-center gap-4'>
          <Link href={user.twitter}>
            <Image className='hover:scale-[1.04] duration-500' width={20} height={30} src={twitter}  alt='' />
          </Link>
          <Link href={user.github}>
            <Image className='hover:scale-[1.04] duration-500' width={20} height={30} src={githubLogo} alt='' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Profile