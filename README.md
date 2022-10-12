# Running Local Instructions

MUST change .env content `myEnv` when running locally because it affects the `assetPrefix`, `basePath` in next.config.js. When `myEnv=prod`, the repo name "/MWS_NextJS_ISR_SSG" gets appended to url links which allows the github pages to function.



# SSR

```bash
npm run build
npm run start
```

http://localhost:3000/out/ship/1


# SSG

Open live server IN the MWS_NextJS_ISR_SSG/out folder, NOT simply the MWS_NextJS_ISR_SSG folder.

```bash
npm run export
```

* Warn: Make sure not to open liveserver on a workspace but directly in the nextjs **/out** folder NOT simply just the nextjs root folder. It's a real pain testing the exported static site bc you now have to open the out folder then start live server unlike SSR which can be ran on nextjs root folder thru terminal.

http://localhost:5500/out/ship/1.html

# Analysis

Observe the difference between URL links.

* link:
  * Server: http://localhost:3000/ship/1 
  * SSG export: http://localhost:5500/ship/1.html
<!--  -->
* Dynamic routes not available for SSG
  * Server: http://localhost:3000/ship/99999
  * SSG export: ERROR! http://localhost:3000/ship/99999.html
