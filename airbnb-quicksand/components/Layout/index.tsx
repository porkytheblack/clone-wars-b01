import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { ReactNode } from 'react'
import Footer from './Footer'
import Nav from './Nav'

function Layout({children}:{children?: ReactNode | ReactNode[]}) {
  return (
    <ContainerBox width="100vw" minHeight={"100vh"}  className="flex overflow-hidden flex-col h-full bg-black items-center justify-start" >
        <Nav/>
        <Box className="flex flex-col items-center overflow-x-hidden bg-black justify-start w-full h-full" >
            {children}
        </Box>
        <Footer/>
    </ContainerBox>
  )
}

export default Layout

const ContainerBox = styled(Box)`

`