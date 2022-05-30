import { Box, Link, styled } from '@mui/material'
import React from 'react'

function NavButton({children, variant}:{children?: string, variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "inherit" }) {
  return (
    <CustomLink href='#' underline='hover' variant={typeof variant == "undefined" ? "h6" : variant} color="white"  >
            {children}
        </CustomLink>
  )
}

export default NavButton

const CustomLink  = styled(Link)`
    color: white;
    font-family: AirbnbCereal, 'sans-serif';
    
    font-weight: 100;
    margin-right: 20px;
`