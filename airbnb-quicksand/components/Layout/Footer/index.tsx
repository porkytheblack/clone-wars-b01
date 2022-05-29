import { useTheme } from '@emotion/react'
import { ArrowForward, ArrowForwardIos, Instagram, MailOutline, Twitter } from '@mui/icons-material'
import { Divider, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Footer() {
    const theme = useTheme()

  return (
    <div style={{width: "90%"}} className="flex mb-2 flex-col items-center  justify-start">
        <div className="w-full flex flex-col items-center justify-center" style={{height: "200px"}} >
            <Typography variant="body1" style={{marginBottom: "20px"}} fontFamily={"AirbnbCereal, 'sans-serif'"} color="primary">
                Keep up to date with Airbnb&#39;s creative team - subscribe to our newsletter and stay informed
            </Typography>
            <Box width={"400px"} height={"50px"} className="border border-white flex flex-row items-center justify-between" >
                <div className="flex p-3 flex-row items-center justify-start">
                    <MailOutline color="primary" className="h-5 w-5 mr-2 " />
                    <input style={{fontFamily: "AirbnbCereal, 'sans-serif'", fontWeight: "100"}} className="border-none outline-none bg-transparent text-gray-800 h-full w-[300px]" type="text" placeholder="youremail@domain.com"  />
                </div>
                <button className="flex flex-row w-12 h-full items-center justify-center outline-none background-none border border-l-2 border-white" > 
                    <ArrowForwardIos color="primary" className="h-5 w-5 " />
                </button>
            </Box>
        </div>
        <Divider color="primary" />
        <div className="flex flex-row w-full items-center justify-between"  >
            <div className="flex flex-row items-center justify-start w-1/2 ">
                <Typography variant="body2"  fontFamily={"AirbnbCereal, 'sans-serif'"} color="primary">
                    ©️ Airbnb, Inc.
                </Typography>
            </div>
            <div className="flex flex-row items-center justify-around w-1/2 ">
                <Typography variant="body2"  fontFamily={"AirbnbCereal, 'sans-serif'"} color="primary">
                    Engineering & DataScience
                </Typography>
                <Typography variant="body2"  fontFamily={"AirbnbCereal, 'sans-serif'"} color="primary">
                    About
                </Typography>
                <Typography variant="body2"  fontFamily={"AirbnbCereal, 'sans-serif'"} color="primary">
                    RSS
                </Typography>
                <IconButton>
                    <Twitter color="primary" className="h-5 w-5 mr-2" />
                </IconButton>
                <IconButton>
                    <Instagram color="primary" className="h-5 w-5 mr-2" />
                </IconButton>
            </div>
        </div>
    </div>
  )
}

export default Footer

