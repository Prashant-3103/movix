import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
const HeroBanner = () => {
    const navigate = useNavigate()
    const [background, setBackground]=useState("")
    const [query, setQuery] = useState("")
    const searchQueryHandler = (event)=>{
if(event.key==="Enter"&& query.length>0){
navigate(`/search/${query}`)
}
    }
  return (
   <div className='heroBanner'>
<div className='wrapper'>
<div className='heroBannerContent'>
<span className='title'>Welcome</span>
<span className='subtitle'>Millions of movies , TV shows and people to discover.
Explore now</span>
<div className="searchInput">
    <input type="text" placeholder='search for a movie or tv show..' onKeyUp={searchQueryHandler} onChange={(e)=>setQuery(e.target.value)}  />
    <button>Search</button>
</div>
</div>
</div>
   </div>
  )
}

export default HeroBanner
