import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Youtube from "react-youtube"
import DrawLine from '../../../components/Lines/Line1'
import useWindowSize from '../../../helpers/useWindowSize'


function YTVideo() {
  const [mobile, set_mobile] = useState<boolean>(false)
  const {width, height} = useWindowSize()

  useEffect(()=>{
    if(typeof width !== "undefined"){
      if(width <= 768){
        set_mobile(true)
      }else{
        set_mobile(false)
      }
    }
  }, [, width])
  
  return (
    <VidBlock  width="100%"  className="flex flex-row relative items-center justify-center " >
        <DrawLine pointer_type='arrow' style={{bottom: !mobile ?  "-23%" : "-50%", right: mobile ?  "50%" : "0px"}} />
        <Youtube style={{borderRadius: "20px", overflow: "hidden"}}  videoId="wX2liXUl8FE" opts={{
            height: typeof height !== "undefined" ? !mobile ? height*0.8 : height*0.4 : "100%",
            width: typeof width !== "undefined" ? mobile ? width*0.8 : width*0.8 : "100%"
        }}    />
    </VidBlock>
  )


}

export default YTVideo


const VidBlock = styled(Box)`
  @media(max-width: 768px){
    margin-top: 30%;
  }
  margin-top: 10%;
  
`