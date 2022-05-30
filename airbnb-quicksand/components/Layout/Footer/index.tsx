import { useTheme } from '@emotion/react'
import { ArrowForward, ArrowForwardIos, Instagram, MailOutline, Twitter } from '@mui/icons-material'
import { Divider, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import useWindowSize from '../../../helpers/useWindowSize'

function Footer() {
    const theme = useTheme()
    var {width, height} = useWindowSize()
  const [mobile, set_mobile] = useState<boolean>(false)
  useEffect(()=>{
    if(typeof width !== "undefined"){
      if(width > 768){
        set_mobile(false)
      }
      if(width <= 768){
        set_mobile(true)    
      }
    }
  }, [,width])

  return (
    <div style={{width: "90%"}} className="flex mb-2 flex-col items-center  justify-start">
        <div className="w-full flex flex-col items-center justify-center" style={{height: "200px"}} >
            <Typography variant="body1" style={{marginBottom: "20px"}} fontFamily={"AirbnbCereal, 'sans-serif'"} color="primary">
                Keep up to date with Airbnb&#39;s creative team - subscribe to our newsletter and stay informed
            </Typography>
            <Box  height={"50px"} className="border w-full md:w-1/3 border-white flex flex-row items-center justify-between" >
                <div className="flex p-3 flex-row items-center justify-start">
                    <MailOutline color="primary" className="h-5 w-5 mr-2 " />
                    <input style={{fontFamily: "AirbnbCereal, 'sans-serif'", fontWeight: "100"}} className="border-none outline-none bg-transparent text-gray-800 h-full " type="text" placeholder="youremail@domain.com"  />
                </div>
                <button className="flex flex-row w-12 h-full items-center justify-center outline-none background-none border border-l-2 border-white" > 
                    <ArrowForwardIos color="primary" className="h-5 w-5 " />
                </button>
            </Box>
        </div>
        <Divider color="secondary" />
        <div className="flex flex-col md:flex-row w-full items-center justify-between"  >
            <div className="flex flex-row items-center justify-start w-full md:w-1/2 ">
                <Typography variant="body2" width={"100%"} align={mobile? "center" : "left"}  fontFamily={"AirbnbCereal, 'sans-serif'"} color="primary">
                    ©️ Airbnb, Inc.
                </Typography>
            </div>
            <div className="flex flex-col md:flex-row items-start  md:items-center justify-around w-full md:w-1/2 ">
                <Typography variant="body2" width={"100%"} align={mobile? "center" : "left"}    fontFamily={"AirbnbCereal, 'sans-serif'"} color="primary">
                    Engineering & DataScience
                </Typography>
                <Typography variant="body2" width={"100%"} align={mobile? "center" : "left"}    fontFamily={"AirbnbCereal, 'sans-serif'"} color="primary">
                    About
                </Typography>
                <Typography variant="body2" width={"100%"} align={mobile? "center" : "left"}    fontFamily={"AirbnbCereal, 'sans-serif'"} color="primary">
                    RSS
                </Typography>
                <div className="flex w-full md:hidden justify-around flex-row h-full items-center">
                    <IconButton>
                        <Twitter color="primary" className="h-5 w-5 mr-2" />
                    </IconButton>
                    <IconButton>
                        <Instagram color="primary" className="h-5 w-5 mr-2" />
                    </IconButton>
                </div>
                <IconButton className="hidden md:flex" >
                        <Twitter color="primary" className="h-5 w-5 mr-2" />
                    </IconButton>
                    <IconButton className="hidden md:flex" >
                        <Instagram color="primary" className="h-5 w-5 mr-2" />
                    </IconButton>
            </div>
        </div>
    </div>
  )
}

export default Footer

