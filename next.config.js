/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

let isProd = process.env.myEnv === "prod";
const path = require("path")

module.exports = (phase, { defaultConfig }) => {
  
  if (phase === PHASE_DEVELOPMENT_SERVER){ isProd = false };  
  //console.log("HI",defaultConfig)
  
  return {
    /* config options for all phases except development here */
    reactStrictMode: true,
    assetPrefix: isProd ? "/MathematicaDocNetwork" : undefined, //static assets are in the /out folder
    basePath: isProd ? "/MathematicaDocNetwork" : undefined,
    
    experimental: {
      images: {
        unoptimized: true,
      },
    }
  }
}

