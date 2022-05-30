import { Link, Typography } from '@mui/material'
import React from 'react'

function DescriptionCard({title, description, sub_title, ig_handle, ig_link}: {title: string, description: string, sub_title: string, ig_handle: string, ig_link: string}) {
  return (
    <div className="flex flex-col items-start justify-start w-full md:w-[340px]">
        <Typography fontFamily={"AirbnbCereal, 'sans-serif'"} variant="h5" align="left" color="white" >
            {title}
        </Typography>
        <Typography fontFamily={"AirbnbCereal, 'sans-serif'"} className="mb-5" variant="body1" align="left" color="secondary" >
            {sub_title}
        </Typography>
        <Typography className="w-full md:w-4/5" paragraph={true} flexWrap={"wrap"} fontFamily={"AirbnbCereal, 'sans-serif'"} variant="body2"  align="left" color="white" >
            {description}
        </Typography>
        <div className="flex flex-row items-center mt-5 justify-start">
            <Typography fontFamily={"AirbnbCereal, 'sans-serif'"} variant="body2" className="mr-5" align="left" color="white" >
                IG
            </Typography>
            <Link href={ig_link} target="_blank" rel="noopener noreferrer" underline="always" >
                <Typography fontFamily={"AirbnbCereal, 'sans-serif'"} variant="body2" align="left" color="white" >
                    {ig_handle}
                </Typography>
            </Link>
        </div>
    </div>
  )
}

export default DescriptionCard