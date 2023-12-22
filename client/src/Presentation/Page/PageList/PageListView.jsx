import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";

import CustomNode from "./CustomNode";

import { useAppDispatch, useAppSelector } from "../../..";
import { updateLink } from "../../slice/PageSlice";

const DnDFlow = () => {
  const pages = useAppSelector((state) => state.page.pages);
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(pages);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const nodeTypes = useMemo(() => ({ customNode: CustomNode }), []);
  const onConnect = useCallback((params) => {
    const newEdge = {
      ...params,
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
    };
    setEdges((eds) => addEdge(newEdge, eds));
  }, []);

  useEffect(() => {
    setNodes(
      pages.map((page) => ({
        id: page.id.toString(),
        type: "customNode",
        position: { x: 50, y: 100 },
        data: page,
      }))
    );
  }, [pages]);

  useEffect(() => {
    const newEdges = pages.reduce((acc, page) => {
      if (page.link !== "") {
        const newEdge = {
          id: `reactflow__edge-${page.id}-someUniqueID`,
          source: `${page.id}`,
          sourceHandle: "a",
          target: page.link,
          targetHandle: null,
          markerEnd: {
            type: MarkerType.ArrowClosed,
          },
        };
        acc.push(newEdge);
      }

      return acc;
    }, []);
    setEdges(newEdges);
  }, [pages]);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const data = event.dataTransfer.getData("application/reactflow");
      const page = JSON.parse(data);

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode = {
        id: page.id.toString(),
        type: "customNode",
        position,
        data: page,
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    const edge = edges[edges.length - 1];

    if (edge) {
      dispatch(updateLink(parseInt(edge.source), edge.target));
    }
  }, [edges]);
  return (
    <div>
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            fitView
          >
            <Controls />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default DnDFlow;
