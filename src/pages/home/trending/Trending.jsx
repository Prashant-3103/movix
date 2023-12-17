import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousal from '../../../components/carousal/Carousal'

const Trending = () => {
  const [endPoint, setEndPoint] = useState("day")
  const {data, loading}= useFetch(`/trending/all/${endPoint}`)

const onTabChange = (tab)=>{
setEndPoint(tab==="Day"?"day":"week")
}

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carousalTitle'>Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousal data={data?.results} loading={loading}/>
    </div>
  )
}

export default Trending
