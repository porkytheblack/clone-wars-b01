import { Box } from '@mui/material'
import React, { ReactNode } from 'react'

function CascadeBoxes({children,direction="left", height="medium", width="medium"}:{children: ReactNode | ReactNode[]  ,direction: "left" | "right", width: "large" | "medium" | "small", height: "large" | "medium" | "small"}) {
    const _w = `${width=="medium" ? "w-[749px]" : width=="large" ? "w-[643px]" : "w-[640px]"}`
    const _h = `${height=="medium" ? "h-[423px]" : height=="large" ? "h-[537px]" : "h-[267px]"}`
    return (
        <div  className={`flex ${_w} ${_h} flex-col items-center justify-center relative`} >
            <div style={{
                top: direction=="left" ? "-40px" : "0px",
                left: direction=="left" ? "50px" : "0px",
            }}  className={`flex z-[5] ${_w} ${_h} absolute  flex-col items-center border-[0.5px] bg-black border-white justify-center `}>
                {children}
            </div>
            {(direction == "left" ? [1,2,3,4] : [4,3,2,1]).map((box_index: number, k: number) =>{ 
                var _t = direction == "left" ? `-${k*10}px` : `${k*10}px`
                var _d = direction == "left" ? `${box_index*10}px` : `${k*10}px`
                return (
                <div style={{
                    top: _t,
                    left: _d,
                    zIndex: box_index
                }} key={box_index} className={`absolute ${_w} ${_h}  bg-black border-[0.5px] border-white`} >
    
                </div>)})}
        </div> 
  )
}

export default CascadeBoxes


