import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';


//console.log(..) here outputs in both terminal and client
export default function Home(props) {
    const [content, setContent] = useState("");
    const {BLEHdata} = props // This is data loaded from getStaticProps
    
    if(!BLEHdata){
        console.log("Client: empty")
    }else{
        console.log("Client", BLEHdata.length)
    }
    // console.log("client[size]:",BLEHdata.length) 
    //The above ERRORS because `npm build` cant process undefined 
    

    const router = useRouter();
    const myrouteINPUT = router.query.car;
    console.log(router);
    console.log(myrouteINPUT) 


    //The only way to show the data without crashing is hooking it to useEffect
    useEffect(()=>{
        if(BLEHdata){setContent(BLEHdata[0].name);}
        
    },[BLEHdata])
    useEffect(()=>{
        console.log("HI",myrouteINPUT)},[myrouteINPUT])
    return(<div>
        <h1>hi
            <div>getStaticProps json: {content}</div>
            <div>router.query.car: {myrouteINPUT}</div>
         
        </h1>
        <h2>d</h2>
    </div>)
}

//this pregenerates the "dynamic route" for [car].js
//REQUIRED FOR ANY DYNAMIC ROUTE that gets exported as static site; clearly this isnt really that dynamic since we have to hardcode this.
//This does Nothing on a next server `npm run start`, it only affects SSG `npm run export`
export async function getStaticPaths(){
    return{
        paths: [{ params : {car: "1"}}],
        fallback: true,
    }
}

//Basically same as sending GET requests to other website onload
export async function getStaticProps(){
    const response =await fetch("https://raw.githubusercontent.com/userJY/JsonTestServer/main/names.json")
    const BLEHdata = await response.json()
    console.log("terminal:[size]",BLEHdata.length) //this will not output on browser but in terminal
    return{
        props: {BLEHdata},
        revalidate: 10,
    }
}