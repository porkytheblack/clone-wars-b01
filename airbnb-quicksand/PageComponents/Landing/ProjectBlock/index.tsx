import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { ReactNode, useEffect, useState } from 'react'
import  YouTubePlayer  from 'react-youtube'
import CascadeBoxes from '../../../components/Boxes/CascadeBoxes'
import DescriptionCard from '../../../components/Boxes/DescriptionCard'
import useWindowSize from '../../../helpers/useWindowSize'

function ProjectBlock({children, direction, video, Line}:{children: ReactNode,direction: "right" | "left", video: string, Line?: ReactNode}) {
    const [mobile, set_mobile] = useState<boolean>(false)
    const {width, height} = useWindowSize()

    useEffect(()=>{
        if(typeof width !== "undefined"){
            if(width <= 768){
                set_mobile(true)
            }else{
                set_mobile(false)
            }
        }
    }, [, width])

    return (
    <ContainerBox style={{marginTop: mobile ? "150px" : "230px"}} className={`flex    relative   md:w-full `}  >
        {Line}
        <div style={{order: direction === "left" ? 1 : 2}} className="hidden md:flex flex-row " >
            <CascadeBoxes  direction={direction} width='medium' height="medium"  >  
                <div className="flex flex-col items-center w-full h-full justify-center" >
                    <YouTubePlayer videoId={video !== null ? video : "wX2liXUl8FE"} opts={{width: "747px", height: "421px"}} />
                </div>
            </CascadeBoxes>
        </div>
        <MobileBox className=" md:hidden mb-8 items-center justify-center" >
            <YouTubePlayer  videoId={video !== null ? video : "wX2liXUl8FE"} opts={{width: "100%", height: "200px"}} />
        </MobileBox>
        <div style={{order: direction === "left" ? 2 : 1}} className="flex flex-row">
            {children}
        </div>
      
    </ContainerBox>
  )
}

export default ProjectBlock

const ContainerBox = styled(Box)`
    @media(max-width: 768px){
        width: 80%;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
    @media(min-width: 768px){
        flex-direction: row;
        width: 90%;
        align-items-center;
        justify-content: space-between;
    }
`

const MobileBox = styled('div')`
    width: 90vw;
    height: 200px;
    overflow: hidden;
    border: 2px solid white;
    @media(max-width: 768px){
        display: flex;
        flex-direction: row;
    }
    @media(min-width: 768px){
        display: hidden;

    }
    margin-bottom: 40px;
`