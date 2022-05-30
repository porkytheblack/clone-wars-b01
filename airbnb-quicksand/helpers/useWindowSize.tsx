import React, { useEffect, useState } from 'react'

function useWindowSize() {
    const [windowSize, setWindowSize] = useState<{width?: number, height?: number}>({
        width: undefined,
        height: undefined
    })
    useEffect(()=>{
        if(typeof window !== "undefined"){
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
    }, [])
  return windowSize
}

export default useWindowSize