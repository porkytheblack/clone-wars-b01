import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { ReactNode, useState } from 'react'
import Footer from './Footer'
import Nav from './Nav'
import MobileNav from './Nav/MobileNav'

function Layout({children}:{children?: ReactNode | ReactNode[]}) {
  const [mobile_nav, set_mobile_nav] = useState<boolean>(false)
  const nav_toggle = () =>{
    set_mobile_nav(!mobile_nav)
  }
  return (
    <ContainerBox width="100vw" minHeight={"100vh"}  className="flex  flex-col h-full bg-black items-center justify-start" >
        <Nav toggle={nav_toggle} mob={mobile_nav} />
        <Box className="flex flex-col items-center relative  bg-black justify-start w-screen h-full" >
          {mobile_nav && <MobileNav/>}
          <>
          {children}
          </>
        </Box>
        <Footer/>
    </ContainerBox>
  )
}

export default Layout

const ContainerBox = styled(Box)`

`