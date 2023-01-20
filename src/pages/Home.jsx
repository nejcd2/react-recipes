import React from 'react'
import Featured from '../components/Featured'
import Seafood from '../components/Seafood'
import { motion } from 'framer-motion'

function Home() {
  return (
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}>
        
        <Featured />
        <Seafood/>

    </motion.div>
  )
}

export default Home
