import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import Hero from '../PageComponents/Landing/Hero'
import { useAppSelector } from '../redux/hooks'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const name = useAppSelector(state=>state.awesomeness.name)
  return (
    <Box className="flex flex-col items-center pt-[100px] justify-center w-4/5 h-full" > 
    
       <Hero/>
    </Box>
  )
}

export default Home
