import graphdata from '../assets/data.json'

import React, { FC, useEffect, useState } from "react";

import "@react-sigma/core/lib/react-sigma.min.css";
import { MultiDirectedGraph } from "graphology";
import { SigmaContainer, useLoadGraph, ControlsContainer, SearchControl, useRegisterEvents, useSetSettings } from "@react-sigma/core";


export const MultiGraph = () => {
  const MyGraph = () => {
    const setSettings = useSetSettings();
    const [hoveredNode, setHoveredNode] = useState(null);

    const loadGraph = useLoadGraph();
    const registerEvents = useRegisterEvents();

    useEffect(() => {
      // Create the graph
      const graph = new MultiDirectedGraph();
        graph.import(graphdata)
      loadGraph(graph);
      registerEvents({
        clickNode: (event) => setHoveredNode(event.node),
        clickStage: () => setHoveredNode(null),
      });
      setSettings({
        nodeReducer: (node, data) => {
          
          const newData = { ...data, highlighted: data.highlighted || false };
  
          if (hoveredNode) {
            if (node === hoveredNode || graph.neighbors(hoveredNode).includes(node)) {
              newData.highlighted = true;
            } else {
              newData.color = "#E2E2E2";
              newData.highlighted = false;
            }
          }
          return newData;
        },
        edgeReducer: (edge, data) => {
          
          const newData = { ...data, hidden: false };
  
          if (hoveredNode && !graph.extremities(edge).includes(hoveredNode)) {
            newData.hidden = true;
          }
          return newData;
        },
      },[hoveredNode, setSettings, graph]);
    
  }, [loadGraph,hoveredNode,registerEvents,setSettings]);

    return null;
  };

  return (
    <SigmaContainer
      graph={MultiDirectedGraph}
      style={{ height: "500px" }}
      settings={{ renderEdgeLabels: true, defaultEdgeType: "arrow" }}
    >
      <MyGraph />
      <ControlsContainer position={"top-right"}>
        <SearchControl style={{ width: "200px" }} />
      </ControlsContainer>
    </SigmaContainer>
  );
};

export default MultiGraph;