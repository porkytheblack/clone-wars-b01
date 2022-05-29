import { Box, Typography } from '@mui/material'
import React from 'react'
import CascadeBoxes from '../../../components/Boxes/CascadeBoxes'

function IntroBlock() {
  return (
    <div style={{ marginTop: "230px"}} className="flex flex-col items-center justify-center w-full h-full p-[100px]" >
        <CascadeBoxes direction='right' height='large' width='large' >
            <Box padding={"20px"} className="flex flex-row w-full items-center justify-between h-full " >
                <Typography variant="h6" fontFamily={"AirbnbCereal, 'sans-serif'"} className="text-white" align="left" width="30%" >
                    Ready for your masterclass in overcoming adversity?
                </Typography>
                <div style={{width: "60%"}} className="flex w-[60%] h-full flex-col items-start justify-center ">
                    <Typography variant="body2" fontFamily={"AirbnbCereal, 'sans-serif'"} className="text-white mb-[20px] " align="left"  >
                         We’ve all been there before. Whether it’s the inner critic who snatches the last word, the status quo that threatens our vision, or the absence of a playbook to count on because it hasn’t been written—yet. But what happens when makers and artists are plunged into chaos? They rise.
                    </Typography>
                    <Typography marginTop={"20px"} variant="body2" fontFamily={"AirbnbCereal, 'sans-serif'"} className="text-white mb-[20px] " align="left"  >
                         Quicksand features the candid confessions of community-oriented creators who champion craft while grappling with defeat, with the full understanding that it’s a vital part of the creation process.
                    </Typography>
                    <Typography marginTop={"20px"}  variant="body2" fontFamily={"AirbnbCereal, 'sans-serif'"} className="text-white mb-[20px] " align="left" >
                    In these trying times, turning to our community for inspiration is crucial. Meet the luminaries who stayed afloat when sinking wasn’t an option. Ready to dive in?
                    </Typography>
                </div>
                
            </Box>
        </CascadeBoxes>
    </div>
  )
}

export default IntroBlock