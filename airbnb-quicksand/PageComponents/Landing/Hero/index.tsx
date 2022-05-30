import styled from '@emotion/styled'
import { KeyboardArrowDown } from '@mui/icons-material'
import { Box, IconButton, Link, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DrawLine from '../../../components/Lines/Line1'
import QSand from "../../../public/assets/svgs/quicksand.svg"
import {css} from "@emotion/react"
import useWindowSize from '../../../helpers/useWindowSize'

function Hero() {
  const [mobile, set_mobile] = useState<boolean>(false)
  const [animate_lines, set_animate_lines] = useState<boolean>(false)
  const {width, height} = useWindowSize()
  useEffect(()=>{
    if(typeof width !== "undefined"){
      if(width <= 768){
        set_mobile(true)
      }else{
        set_mobile(false)
      }
      if(width <= 1350){
        set_animate_lines(false)
      }else{
        set_animate_lines(true)
      }

    }
  }, [,width]) 
  return (
    <Box className="flex flex-row relative w-full md:w-4/5 " >

        {animate_lines && <DrawLine repeat pointer_type='left-pointer' style={{bottom: "-40%", right: "40%"}} />}
        {animate_lines && <DrawLine repeat  pointer_type='long-pointer' style={{bottom: "-193%", zIndex: 1, right: "-5%"}} />}
        <CustomBox className="flex   w-full items-center justify-between  " >
          <Box height="100%" className="flex overflow-hidden  h-full flex-col w-1/2! md:w-1/2" >
              <CustomVideoBox   autoPlay muted loop >
                <source src={"/background.mp4"} type='video/mp4' />
                Your browser does not support video
              </CustomVideoBox>
              <QComponent/>
          </Box>
          <IconButton classes={css`@media(max-width: 768px){display: flex;} display: none;`} className="flex mt-2 mb-6 md:hidden" >
            <KeyboardArrowDown className="w-8 h-8 text-white" />
          </IconButton>
          <Box  className="flex h-full flex-col items-center justify-center w-full  md:w-1/2" >    
              <ContentDiv  className="flex w-4/5 flex-col  p-2 justify-start" >
                <Typography variant="h2" className="uppercase" textTransform={"uppercase"} align='left' sx={{
                  color: "#cfba9b",
                  fontSize: "10px",
                  fontFamily: "AirbnbCereal, 'sans-serif'"
                }} >
                  Film Serieis
                </Typography>
                <Typography fontSize={"28px"} color="white" fontWeight={"100"} fontFamily={"AirbnbCereal, 'sans-serif'"} align="left" variant='body1' >
                  Introducing Quicksand, an intimate film series showcasing how creators around the world get unstuck
                </Typography>
                <Box sx={{
                  marginTop: "20px"
                }} className="flex flex-row items-center justify-start mt-5" >
                <Link href="#" sx={{marginRight: "100px"}}  className="cursor-pointer  mr-[100px]" underline='always' >
                  Learn More    
                </Link>
                <Link href="#" underline='always' className="cursor-pointer" >
                  Play Trailer
                </Link>
                </Box>
              </ContentDiv>
              
          </Box>
        </CustomBox>
    </Box>
    
  )
}

export default Hero

const ContentDiv = styled('div')`

`

const CustomBox = styled('div')`
    @media(max-width: 768px){
      border: none;
      overflow: hidden;
      height: 100%;
      flex-direction: column;
      border-radius: 0px;
    }
    flex-direction:row;
     border-radius: 20px;
     overflow: hidden;
     border: 1px solid white;
     height: 80vh;
     width: 100px;
`

const CustomVideoBox  = styled('video')`
  @media(max-width: 768px){
    width: 100vw;
    height: 90vh;
  }
  width: 100%;
  height: 100%;
  aspect-ratio: auto 320/240;
  object-fit: cover;

 `

const QComponent = styled(QSand)`
  position: absolute;
  @media(max-width: 768px){
    transform: scale(6);
    top: 40vh;
    left: 30vw;
  }
  @media(min-width: 768px){
    transform: scale(5);
    top: 30vh;
    left: 15vw;
  }

`