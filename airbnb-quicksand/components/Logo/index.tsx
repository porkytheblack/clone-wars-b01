import styled from '@emotion/styled'
import { Box, useTheme } from '@mui/material'
import React from 'react'
import Logo1 from "../../public/assets/logo/airbnb-logo-white.svg"

function Logo() {
    const theme = useTheme()
  return (
    <Box className="flex flex-row items-center justify-start" >
        {theme.palette.mode == "dark" ? <Logo1 className="w-5 h-5" /> : <Logo1/> }
        <LogoText className="ml-2 text-white" >
          design
        </LogoText>
        
    </Box>
  )
}

export default Logo



const LogoText = styled('h5')`
    font-family: AirbnbCereal, 'sans-serif';
    font-weight: 200;
    font-size: 18px;
    color: black;
`