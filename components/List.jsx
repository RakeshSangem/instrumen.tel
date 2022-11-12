import Image from "next/image";
import Follow from "../public/follow.svg"

function List({ music }) {
  return (
    <div className=" border-b-2 border-backgroundColor/50 flex justify-items-start w-full justify-between">
      <div className="flex items-center">
        <div className=" m-4 w-10 h-10 rounded-full bg-backgroundColor">
        </div>
        <div>
          <h1 className="max-w-[600px]">{music.name}</h1>
        </div>
      </div>
      <Image
        src={Follow}
        alt="heart shaped follow button" />
    </div>
  )
}

export default List
