import { Box, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import CascadeBoxes from '../components/Boxes/CascadeBoxes'
import DescriptionCard from '../components/Boxes/DescriptionCard'
import Hero from '../PageComponents/Landing/Hero'
import IntroBlock from '../PageComponents/Landing/IntroBlock'
import ProjectBlock from '../PageComponents/Landing/ProjectBlock'
import YTVideo from '../PageComponents/Landing/YTVideo'
import { useAppSelector } from '../redux/hooks'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const name = useAppSelector(state=>state.awesomeness.name)
  return (
    <Box height="100%"  className={`flex flex-col items-start pt-[100px] overflow-x-hidden justify-center w-[90%] min-h-screen pb-[200px] h-full`} > 
       <Hero/>
       <IntroBlock/>
       <YTVideo/>
       <ProjectBlock video={"YHof8L-pZvk"} direction="left" >
        <DescriptionCard 
          title={"Porfirio Gutiérrez"} 
          sub_title={"Zapotec Textile Artist & Activist"} 
          description={"Porfirio Gutiérrez’s visual tapestry is rich. Plying a craft that marries Oaxacan weaving tradition with contemporary production processes, the Mexican textile artist and activist preserves local tradition and champions sustainable materials sourced from his ancestral homeland. Discover how the textile master defied the whims of the mass market and wrote a love letter to his heritage along the way."}
          ig_handle={"@porfirio_gutierrez"}
          ig_link={"https://www.instagram.com/porfirio_gutierrez/"}
          />
       </ProjectBlock>
       <ProjectBlock video={"zmySoWjEmD4"} direction="right" >
        <DescriptionCard 
          title={"Art Comes First"} 
          sub_title={"Tailors, Designers, Artists, DJs"} 
          description={"Renegades have no path. Just ask the rebel fashion duo behind UK-based Art Comes First. Helmed by Sam Lambert and Shaka Maidoh, the music-inspired sartorial menswear brand was born almost by accident. While the self-taught pair didn’t always have the mentorship or resources that other multihyphenates rely upon, nothing could stop them from creating an iconic fashion brand that marries coveted couteur with community outreach. Discover how they got it done with glamour and little guidance."}
          ig_handle={"@artcomesfirst"}
          ig_link={"https://www.instagram.com/artcomesfirst/"}
          />
       </ProjectBlock>
       <ProjectBlock video="B6KwYthVVOo" direction="left" >
        <DescriptionCard 
          title={"María Osado"} 
          sub_title={"Casting Director & Model Agent"} 
          description={"Fashion has many faces. Or at least it should according to casting director and model agent María Osado. Intent on challenging the Eurocentric beauty standards that often define the industry, Osado founded her inclusive agency Guerxs at the age of eighteen. Street-casting everyday models and friends who represent a range of diverse gender, body type, and sexual identities, Osado sought to upend the idealized depictions of beauty that filled Mexican fashion magazines and catwalks. Learn how the former architecture student constructed her own career and recast the runway while she was at it"}
          ig_handle={"@mariaosado"}
          ig_link={"https://www.instagram.com/mariaosado/"}
          />
       </ProjectBlock>
       <ProjectBlock video="B3CHUn5y3LU" direction="right" >
        <DescriptionCard 
          title={"Ana Lamata"} 
          sub_title={"Art Historian, Hatmaker"} 
          description={"Go to the source. Create. Block and drape. Perfect. Repeat. That’s how milliner and art historian Ana Lamata approaches her creative process. Heralded for hats that marry bespoke craftswomanship with near fanatical-like attention to detail, the Madrid-based artisan sources sustainable materials that morph into headwear made for each wearer’s whims and quirks. Explore how she triumphed over mainstream creative ideas to hone in on her power as a visionary craftswoman."}
          ig_handle={"@analamata"}
          ig_link={"https://www.instagram.com/analamata/"}
          />
       </ProjectBlock>
       <ProjectBlock video="SW5BrqEvL1s" direction="left" >
        <DescriptionCard 
          title={"Andrés Mañon"} 
          sub_title={"Photographer, Makeup Artist"} 
          description={"Welcome to Andres’ Mañon’s world, where reality is refashioned into an opulent universe of his own creation. Using photography and makeup as his tools of choice, the Mexico City native centers gender non-binary representation in visually stunning portraits that allow his subjects to explore and subvert identity. Featuring self-portraits and other LGBTQI creatives, Mañon celebrates the corporeal: a sensual, zebra-skin clad cowgirl greets the camera with her unflinching gaze, a “trans baby” Madonna looks heavenwards as hyper-stylized tears cascade to earth. Explore how Mañon’ uses the power of self-creation to affirm queer identity."}
          ig_handle={"@electrobelle"}
          ig_link={"https://www.instagram.com/electrobelle/"}
          />
       </ProjectBlock>
       <div style={{marginTop: "230px"}} className="flex flex-row items-center justify-center w-full ">
         <CascadeBoxes height="small" width="small" direction="right" >
           <div className="flex  flex-col items-start justify-start p-7" >
           <Typography variant="h6" align="left"  className="text-center mb-4 text-white" fontFamily={"AirbnbCereal, 'sans-serif'"}>
              Want more ?
           </Typography>
             <Typography align="left" variant="body2"  className="text-center mb-3 text-white" fontFamily={"AirbnbCereal, 'sans-serif'"}>
                  To discover more boundary pushing global creators, check out our Airbnb Design—Talks series and follow us on Instagram.
             </Typography>
             <Typography align="left" variant="body2"  className="text-center mb-3 text-white" fontFamily={"AirbnbCereal, 'sans-serif'"}>
             Special thanks to Texto for introducing us to some of the artists and providing the beautiful Casa Pedregal as one of our shooting locations.
             </Typography>
           </div>
         </CascadeBoxes>
       </div>
    </Box>
  )
}

export default Home
