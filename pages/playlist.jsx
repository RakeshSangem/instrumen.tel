import Image from "next/image";
import Follow from "../public/follow.svg"
import Navbar from "../components/Navbar/navbar";
import Play from "../public/play.svg";
import Previous from "../public/previous.svg"
import Next from "../public/next.svg"
import {useSession, signIn, signOut} from 'next-auth/react';
import {useState,useEffect} from 'react';



function Playlist () {
  const {data } = useSession();
  console.log(data);
  useEffect(() => {
    async function fetchPlaylist(){
      if(data){

        const plres = await fetch("https://api.spotify.com/v1/me/playlists",
        {
          headers: new Headers({
          Authorization: `Bearer ${data.user.accessToken}`,
          })
          }
        );
        const pldata = await plres.json();
        console.log({pldata});
        
        const res = await fetch( pldata.items[0].href, 
        {
        headers: new Headers({
        Authorization: `Bearer ${data.user.accessToken}`,
        })
        })
        const data2 = await res.json();
        console.log(data2)
      } 
    }

    fetchPlaylist();
    
  }, [data])
  return(
    <div>
      <Navbar />
      <main className="w-full pt-6 min-h-[90vh] bg-backgroundColor">
        <div className="flex gap-20 m-auto p-20 justify-between max-w-[85vw] min-h-[80vh] bg-playlistBg rounded-lg">
          <div className="flex w-full flex-col items-center">
            <div className=" border-b-2 border-backgroundColor/50 flex justify-items-start w-full justify-between">
              <div className="flex items-center">
                <div className=" m-4 w-10 h-10 rounded-full bg-backgroundColor">  
                </div>
                <div>
                  <h1 className="max-w-[600px]">Music Title by Artist Name</h1>
                </div>
              </div>
                <Image 
                src={Follow}
                alt= "heart shaped follow button" />  
            </div>
          </div>
          <div className="p-8 w-[500px] h-[460px] bg-playlistsong rounded-lg"> 
            <div className="h-[250px] w-[300px] rounded-2xl bg-secondaryColor"></div>
            <div className=" my-2 text-center">
              <h2 className=" text-2xl">Favourite song</h2>
              <h3 className="text-sm">by jay,ft.</h3>
            </div>
            <div className="flex justify-between px-3 pt-2">
              <Image src={Previous} alt= "previous button" />
              <Image  src={Play} alt= "play button" />
              <Image src= {Next} alt= "next button" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}


export default Playlist;