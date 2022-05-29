import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { ReactNode } from 'react'
import Nav from './Nav'

function Layout({children}:{children?: ReactNode | ReactNode[]}) {
  return (
    <ContainerBox width="100vw" minHeight={"100vh"}  className="flex flex-col h-full bg-black items-center justify-start" >
        <Nav/>
        <Box className="flex flex-col items-center bg-black justify-start w-full h-full" >
            {children}
        </Box>
    </ContainerBox>
  )
}

export default Layout

const ContainerBox = styled(Box)`

`