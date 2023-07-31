"use client";

import ReactPlayer from "react-player/youtube";
import ClientOnly from "../client/ClientOnly";

const ReactPlayerProvider = () => {
  return (
    <ClientOnly>
      <div className="technology-video">
        <ReactPlayer url="https://www.youtube.com/watch?v=wGXEgR2gRPo" />
      </div>
    </ClientOnly>
  );
};

export default ReactPlayerProvider;
