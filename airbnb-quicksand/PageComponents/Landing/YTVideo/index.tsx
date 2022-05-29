import { Box } from '@mui/material'
import React from 'react'
import Youtube from "react-youtube"

function YTVideo() {
  return (
    <Box marginTop={"230px"} width="100%" height="615px" className="flex flex-row items-center justify-center mt-[200px] h-[615px] w-[1092px]" >
        <Youtube videoId="wX2liXUl8FE" opts={{
            height: "615px",
            width: "1092px",
        }}    />
    </Box>
  )
}

export default YTVideo