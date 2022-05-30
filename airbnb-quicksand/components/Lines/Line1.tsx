import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import Line1 from "../../public/assets/line-assets/short-arrow.svg" //arrow
import Line2 from "../../public/assets/line-assets/leftPointer3.svg" //left pointer 3
import Line3 from "../../public/assets/line-assets/long-pointer.svg" //long pointer
import Line4 from "../../public/assets/line-assets/short-left-pointer.svg" //short left pointer
import Line5 from "../../public/assets/line-assets/short-right-pointer.svg"
import Line6 from "../../public/assets/line-assets/left-small-pointer.svg"
import Line7 from "../../public/assets/line-assets/right-small-pointer.svg"
import { draw } from './utils'
import { useInView } from 'react-intersection-observer'

function DrawLine({pointer_type, style, className, repeat}: {pointer_type?: "arrow" | "left-pointer" | "long-pointer" | "short-left-pointer" | "short-right-pointer" | "left-small-pointer" | "right-small-pointer", style?: React.CSSProperties, className?: string, repeat?: boolean}) {
    const [lineRef, lineInView] = useInView({
        triggerOnce: typeof repeat !== "undefined"
    })
  return (
    <CustomLine1 className={className} ref={lineRef} style={style} >
        {lineInView && <>
        {pointer_type == "arrow" ? <Line1/> : pointer_type == "left-pointer" ? <Line2/> : pointer_type == "long-pointer" ? <Line3/> : pointer_type == "short-left-pointer" ? <Line4/> : pointer_type == "short-right-pointer" ? <Line5/> : pointer_type == "left-small-pointer" ? <Line6/>  : pointer_type == "right-small-pointer" ? <Line7/> : <></> }  
        </>}
    </CustomLine1>
  )
}

export default DrawLine

const CustomLine1 = styled('div')`
    position: absolute;
    path{
        stroke-dasharray: 1;
        
        animation: ${draw} 2s linear forwards;
    } 
    
    
`