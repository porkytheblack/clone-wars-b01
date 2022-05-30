import styled from '@emotion/styled'
import { Close, Search } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import React from 'react'
import NavButton from '../../Buttons/NavButton'
import Logo from '../../Logo'
import MenuIcon from '@mui/icons-material/Menu';
import {css} from "@emotion/react"
function Nav({toggle, mob}: {toggle: ()=>void, mob: boolean}) {
  return (
      <Box className="w-screen z-[20] flex flex-row items-center justify-center h-16 fixed bg-black">
          <ContainerBox className="flex h-full flex-row  items-center justify-between" >
              <Box className="flex flex-row items-center justify-start w-4/5 md:w-1/2" >
                  <Logo/>
              </Box>
              <Box className=" hidden md:flex  flex-row items-center justify-end w-1/5 md:w-1/2" >
                  {["Arcticles", "Events", "Videos", "Projects"].map((ite, key)=><NavButton key={key} >{ite}</NavButton>)}
                  <Search className="w-6 h-6 text-white cursor-pointer" color='primary'  />
              </Box>     
              <IconButton onClick={()=>{toggle()}} className="flex flex-row md:hidden" >
                  {!mob && <MenuIcon className="w-6 h-6 text-white" />}
                  {mob && <Close className="w-6 h-6 text-white" />}
              </IconButton>
          </ContainerBox>
      </Box>
    
  )
}

export default Nav

const ContainerBox = styled(Box)`
    width: 95% !important;
`