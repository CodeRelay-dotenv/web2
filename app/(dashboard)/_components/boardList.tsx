"use client";

import { useQuery } from "convex/react";
import { EmptyBoards } from "./emptyBoards";
import { EmptyFavourites } from "./emptyFavourites";
import { EmptySearch } from "./emptySearch";
import { api } from "@/convex/_generated/api";
import { BoardCard } from "./boardCard";
import { NewBoardButton } from "./newBoardButton";
import { useSearchParams } from "next/navigation";

interface BoardListProps {
  orgId: string;
  search?: string;
  favourites?: string;
}

export function BoardList({ orgId }: BoardListProps) {
  const query = useSearchParams();
  const search = query.get("search");
  const favourites = query.get("favourites");

  const data = useQuery(api.boards.get, { orgId, search: search ?? undefined, favourites: favourites ?? undefined });

  if (data === undefined) {
    return (
      <div>
        <h2 className="text-3xl">
          {favourites ? "Favourite Boards" : "Team boards"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
          <NewBoardButton orgId={orgId} disabled />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    );
  }

  if (!data?.length && search) {
    return <EmptySearch />;
  }

  if (!data?.length && favourites) {
    return <EmptyFavourites />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }

  return (
    <div>
      <h2 className="text-3xl">
        {favourites ? "Favourite Boards" : "Team boards"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        <NewBoardButton orgId={orgId} />
        {data?.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavourite={board.isFavourite}
          />
        ))}
      </div>
    </div>
  );
}