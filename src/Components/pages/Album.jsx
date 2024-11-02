import React from 'react'

import {useState,useEffect} from 'react';
import { Link } from "react-router-dom";

const Album = () => {
   
  return (
    <div className="flex flex-col">
      <div className="mt-36 ml-96 font-bold text-4xl ">
      <Link to="/album"><h2>Albums</h2></Link>
      </div>
      <div className="mt-36 ml-96 flex flex-wrap gap-4">
        
      </div>
    </div>
  )
}

export default Album
