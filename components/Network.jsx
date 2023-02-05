import graphdata from '../../assets/data.json'

import React, { FC, useEffect } from "react";

import "@react-sigma/core/lib/react-sigma.min.css";
import { MultiDirectedGraph } from "graphology";
import { SigmaContainer, useLoadGraph, ControlsContainer, SearchControl, } from "@react-sigma/core";


export const MultiGraph = () => {
  const MyGraph = () => {
    const loadGraph = useLoadGraph();
    

    useEffect(() => {
      // Create the graph
      const graph = new MultiDirectedGraph();
    //   graph.addNode("A", { x: 0, y: 0, label: "Node A", size: 10 });
    //   graph.addNode("B", { x: 1, y: 1, label: "Node B", size: 10 });
    //   graph.addEdgeWithKey("rel1", "A", "B", { label: "REL_1" });
    //   graph.addEdgeWithKey("rel2", "A", "B", { label: "REL_2" });
        graph.import(graphdata)
      loadGraph(graph);
    }, [loadGraph]);

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