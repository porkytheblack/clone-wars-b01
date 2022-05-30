import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'
import CascadeBoxes from '../../../components/Boxes/CascadeBoxes'
import DrawLine from '../../../components/Lines/Line1'

function IntroBlock() {
    return (
        <ContentContainer className='flex flex-col items-center'  >
            <div className="hidden md:flex flex-row  items-center justify-center w-full h-full">
                <CascadeBoxes direction='right' height='large' width='large' >
                    <Box padding={"20px"} className="flex flex-row w-full items-center justify-between h-full " >
                        <Typography variant="h6"  fontFamily={"AirbnbCereal, 'sans-serif'"} className="text-white" align="left" width="30%" >
                            Ready for your masterclass in overcoming adversity?
                        </Typography>
                        <div style={{width: "60%"}}  className="flex  h-full flex-col items-start justify-center ">
                            <Typography flexWrap={"wrap"} paragraph={true} maxWidth={"476px"}  variant="body2" fontFamily={"AirbnbCereal, 'sans-serif'"} className="text-white mb-[20px] " align="left"  >
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
            <Box  className="flex md:hidden flex-col  w-4/5 items-center justify-between h-full " >
                        <Typography variant="h6"  fontFamily={"AirbnbCereal, 'sans-serif'"} className="text-white" align="left"  >
                            Ready for your masterclass in overcoming adversity?
                        </Typography>
                        <div  className="flex max-w-[476px] h-full flex-col items-start justify-center ">
                            <Typography flexWrap={"wrap"} paragraph={true} maxWidth={"476px"}  variant="body2" fontFamily={"AirbnbCereal, 'sans-serif'"} className="text-white mb-[20px] " align="left"  >
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
        </ContentContainer>
    )

}

export default IntroBlock

const ContentContainer = styled('div')`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    margin-top: 20%;
    position: relative;
`