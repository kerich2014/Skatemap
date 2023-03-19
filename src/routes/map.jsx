import React from "react";
import { Yandex } from "../components/YaMap";
import { Link } from "react-router-dom";

export default function Map() {
    return (
      <>
        <div className="flex flex-grow">
          <h1 className="m-auto mt-[2%] text-5xl"><Link to = {`/`}>Skate Map</Link></h1>
          <div className='absolute top-[2%] right-[2%] border-2 h-12 w-12 border-gray-800 rounded-full m-auto'></div>
        </div>
        <nav className="flex items-center m-[2%]">
            <a className="a"><Link to = {`/map`}>Карта спотов</Link></a>
            <a className="a">Школа трюков</a>
            <a className="a">Блог</a>
            <a className="a">Правила скейтпарков</a>
        </nav>
        <div className="w-[96%] m-auto">
          <Yandex/>
        </div>
      </>
    );
  }