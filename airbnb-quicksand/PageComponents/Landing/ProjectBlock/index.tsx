import { Box } from '@mui/material'
import React, { ReactNode } from 'react'
import  YouTubePlayer  from 'react-youtube'
import CascadeBoxes from '../../../components/Boxes/CascadeBoxes'
import DescriptionCard from '../../../components/Boxes/DescriptionCard'

function ProjectBlock({children, direction, video}:{children: ReactNode,direction: "right" | "left", video: string}) {
  return (
    <Box style={{marginTop: "200px", paddingRight: direction == "right" ? "50px" : "0px"}} className={`flex flex-row  items-center justify-between w-full `}  >
        <div style={{order: direction === "left" ? 1 : 2}} className="flex flex-row " >
            <CascadeBoxes  direction={direction} width='medium' height="medium"  >  
                <div className="flex flex-col items-center w-full h-full justify-center" >
                    <YouTubePlayer videoId={video} opts={{width: "747px", height: "421px"}} />
                </div>
            </CascadeBoxes>
        </div>
        
        <div style={{order: direction === "left" ? 2 : 1}} className="flex flex-row">
            {children}
        </div>
      
    </Box>
  )
}

export default ProjectBlock