import styled from '@emotion/styled'
import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import QSand from "../../../public/assets/svgs/quicksand.svg"

function Hero() {
  return (
    <Box className="flex flex-row w-full " >
        <CustomBox className="flex flex-row h-[400px]   w-full items-center justify-between  " >
          <Box height="100%" width="50%" bgcolor="yellow" className="flex overflow-hidden  h-full flex-col w-1/2! bg-yellow" >
              <CustomVideoBox   autoPlay muted loop >
                <source src={"/background.mp4"} type='video/mp4' />
                Your browser does not support video
              </CustomVideoBox>
              <QComponent/>
          </Box>
          <Box width="50%" className="flex h-full flex-col items-center justify-center w-1/2" >    
              <div style={{maxWidth: 358}}  className="flex flex-col  items-start bg-yellow-500 justify-start" >
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
              </div>
              
          </Box>
        </CustomBox>
    </Box>
    
  )
}

export default Hero

const CustomBox = styled('div')`
     border-radius: 20px;
     overflow: hidden;
     border: 1px solid white;
     height: 80vh;
     width: 100px;
`

const CustomVideoBox  = styled('video')`
  width: 100%;
  height: 100%;
  aspect-ratio: auto 320/240;
  object-fit: cover;

 `

const QComponent = styled(QSand)`
    width: 430px;
    height: auto;
    position: absolute;
    margin: auto auto;
`