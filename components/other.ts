// import Graph from 'graphology';
// import Sigma from 'sigma';
// import { PlainObject } from "sigma/types";
// import FA2Layout from "graphology-layout-forceatlas2/worker";
// import forceAtlas2 from "graphology-layout-forceatlas2";
// import louvain from 'graphology-communities-louvain';

// //with node_modules we dont need to write out the path, just the name of the package

// import './styles/main.scss'
// import Fig3 from './assets/smiley.svg'; //Add svg type to custom.d.ts for this import to work

// import hello from './mystuff'; //shorthand for mystuff.ts
// //Our own(not from node_modules) js code uses relative path meaning 
// //we have to write `./someJslib` instead of just `someJslib`

// //Notice even though the function name is `sayhello` from `export default sayhello;` in `mystuff.js`
// //we are allowed to rename the import as `hello`


// import data from "./assets/data.json"; //`Add "resolveJsonModule": true` in tsconfig.json for this import to work



// document.querySelector("h1")!.innerText = hello("Bob");
// const somePicHTML:HTMLImageElement = document.querySelector("#somePic")!
// somePicHTML.src = Fig3;

// const randNum = () => {
//   return Math.floor(Math.random() * (10-0+1))
// }


// // First graph - adding node manually

// const graphX = new Graph();

// graphX.addNode("Home", { x: randNum(), y: randNum(), size: 5, label: "HomedAd", color: "purple",URL : "/#" });
// graphX.addNode("Programming", { x: randNum(), y: randNum(), size: 5, label: "Prog", color: "red", URL: "/tags/prog.html" });
// graphX.addEdge("Home","Programming");

// const container : (HTMLElement | null) = document.getElementById("sigma-container");
// const settingsSigma = {
//     labelRenderedSizeThreshold: 1,
//   }

// const renderer = new Sigma(graphX,container!,settingsSigma);
// //the ! in `container!` asserts that `container` is non-null (this stops the IDE warnings)





// //2nd Graph - importing nodes with json

// const randomLayout = (graph: Graph) => {
//   const xExtents = { min: 0, max: 0 };
//   const yExtents = { min: 0, max: 0 };
//   graph.forEachNode((node, attributes) => {
//     xExtents.min = Math.min(attributes.x, xExtents.min);
//     xExtents.max = Math.max(attributes.x, xExtents.max);
//     yExtents.min = Math.min(attributes.y, yExtents.min);
//     yExtents.max = Math.max(attributes.y, yExtents.max);
//   });
//   const randomPositions: PlainObject<PlainObject<number>> = {};
//   graph.forEachNode((node) => {
//     // create random positions respecting position extents
//     randomPositions[node] = {
//       x: Math.random() * (xExtents.max - xExtents.min),
//       y: Math.random() * (yExtents.max - yExtents.min),
//     };
//   });
// }

// const graph2 = new Graph({multi: true});

// graph2.import(data)
// //const sensibleSettings = forceAtlas2.inferSettings(graph);
// //const positions = forceAtlas2(graph2, {iterations: 50});

// //forceAtlas2.assign(graph2,{iterations: 50});

// // const fa2Layout = new FA2Layout(graph2, {
// //   settings: sensibleSettings,
// // });

// let hoveredEdge: any = null;

// const container2 : (HTMLElement | null) = document.getElementById("sigma-container2");
// const settingsSigma2 = {
//     labelRenderedSizeThreshold: 1,
//     "multi": true,
//     enableEdgeClickEvents: true,
//     enableEdgeHoverEvents: true,
//     edgeReducer(edge: any, data: any) {
//     const res = { ...data };
//     if (edge === hoveredEdge) res.color = "#cc0000";
//     return res;
//     },
//   }
//   //randomLayout(graph2);

// var ppp = 0


// const scores = graph2.nodes().map((node) => graph2.getNodeAttribute(node, "score"));
//     const minDegree = Math.min(...scores);
//     const maxDegree = Math.max(...scores);
//     const MIN_NODE_SIZE = 0.1;
//     const MAX_NODE_SIZE = 1;
//     graph2.forEachNode((node) =>
//       graph2.setNodeAttribute(
//         node,
//         "size",
//         ((graph2.getNodeAttribute(node, "score") - minDegree) / (maxDegree - minDegree)) *
//           (MAX_NODE_SIZE - MIN_NODE_SIZE) +
//           MIN_NODE_SIZE,
//       ),
//     );

// // graph2.updateEachNodeAttributes((node, attr) => {
// //   return {
// //     ...attr,
// //     size: 1,
// //   };
// // });
// graph2.updateEachEdgeAttributes( (edge,attr) => {
//   return {
//     ...attr,
//     size: 0.1
//   };
// });
// //forceAtlas2.assign(graph2,{iterations: 2});

// // const communities = louvain(graph2);
// // console.log(communities)
// const renderer2 = new Sigma(graph2,container2!,settingsSigma2);

// renderer2.on("enterEdge", ({ edge }) => {
//   //console.log("enterEdge",  edge);
//   hoveredEdge = edge;
//   renderer.refresh();
// });
// //fa2Layout.start();