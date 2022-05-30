import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { Search } from '@mui/icons-material'
import React from 'react'
import NavButton from '../../Buttons/NavButton'

function MobileNav() {
  return (
    <Container className="flex flex-col z-20 p-2 bg-black items-start justify-start fixed space-y-2 w-screen h-screen top-[64px] left-0">
        {["Arcticles", "Events", "Videos", "Projects"].map((ite, key)=><NavButton key={key} variant="h5" >{ite}</NavButton>)}
                  <Search className="w-6 h-6 text-white cursor-pointer" color='primary'  />
    </Container>
  )
}

export default MobileNav

const animation = keyframes`
    from{
        opacity: 0px;
        margin-right: -100%;
    }
    to{
        opacity: 1;
        margin-right: 0px;
    }
`

const Container  = styled('div')`
    animate: ${animation} 5s ease-in forwards;
`

