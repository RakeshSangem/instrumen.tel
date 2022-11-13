import Image from "next/image";
import React from "react";
import follow from "../public/follow.svg";
import { useState } from "react";
import followred from "../public/followred.svg"


function List({ music }) {
  const [active, setActive] = useState(false)
  function handleClick() {
    setActive(!active)
  }
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
        onClick={handleClick}
        src={ active ? followred :follow}
        alt="heart shaped follow button" />
    </div>
  )
}

export default List
