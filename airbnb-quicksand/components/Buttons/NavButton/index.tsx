import { Box, Link, styled } from '@mui/material'
import React from 'react'

function NavButton({children}:{children?: string}) {
  return (
    <CustomLink href='#' underline='hover' variant='h6' color="white"  >
            {children}
        </CustomLink>
  )
}

export default NavButton

const CustomLink  = styled(Link)`
    color: white;
    font-family: AirbnbCereal, 'sans-serif';
    font-size: 14px;
    font-weight: 100;
    margin-right: 20px;
`