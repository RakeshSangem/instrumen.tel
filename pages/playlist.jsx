import Image from "next/image";
import List from "../components/List"
import Navbar from "../components/Navbar/navbar";
import Play from "../public/play.svg";
import Previous from "../public/previous.svg"
import Next from "../public/next.svg"
import musiclist from "../content/musiclist.json"

function Playlist() {
  return (
    <div>
      <Navbar />
      <main className="w-full pt-6 min-h-[90vh] bg-backgroundColor">
        <div className="flex gap-20 m-auto p-16 justify-between max-w-[85vw] h-[80vh] bg-playlistBg rounded-lg">
          <div className=" w-full overflow-y-scroll pr-4"> 
            {musiclist.map((m, i) => {
            return (
              <List
                music={m}
                key={i}
              />
            )
          })}
          </div>
          <div className="p-8 w-[500px] h-[460px] bg-playlistsong rounded-lg">
            <div className="h-[250px] w-[300px] rounded-2xl bg-secondaryColor"></div>
            <div className=" my-2 text-center">
              <h2 className=" text-2xl">Favourite song</h2>
              <h3 className="text-sm">by jay,ft.</h3>
            </div>
            <div className="flex justify-between px-3 pt-2">
              <Image src={Previous} alt="previous button" />
              <Image src={Play} alt="play button" />
              <Image src={Next} alt="next button" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Playlist;