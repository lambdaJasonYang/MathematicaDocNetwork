/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const isProd = process.env.myEnv === "prod";
console.log(process.env)
module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      reactStrictMode: true,
      // assetPrefix: isProd ? undefined : "/",
      // basePath: isProd ? undefined : "/",
      experimental: {
        images: {
          unoptimized: true,
        },
      }
    }
  }
  return {
    /* config options for all phases except development here */
    reactStrictMode: true,
    assetPrefix: isProd ? "/MWS_NextJS_ISR_SSG" : undefined, //static assets are in the /out folder
    basePath: isProd ? "/MWS_NextJS_ISR_SSG" : undefined,
    experimental: {
      images: {
        unoptimized: true,
      },
    }
  }
}
