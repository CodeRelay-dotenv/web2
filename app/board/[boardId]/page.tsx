"use client";

import { Canvas } from "./_components/canvas";
import { Room } from "@/components/room";
import { Loading } from "./_components/loading";
import { useParams } from "next/navigation";
import { LiveblocksProvider } from "@liveblocks/react";

const BoardIdPage = () => {
  const { boardId } = useParams();
  
  if (!boardId || Array.isArray(boardId)) {
    return <Loading />;
  }

  return (
    <LiveblocksProvider throttle={16} authEndpoint={`/api/liveblocks-auth`}>
      <Room roomId={boardId} fallback={<Loading />}>
        <Canvas boardId={boardId} />
      </Room>
    </LiveblocksProvider>
  );
};

export default BoardIdPage;