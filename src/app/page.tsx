"use client";

import React, { useEffect, useMemo } from "react";
import BlogList from "./components/blogList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/configureStore";
import { setVotes, incrementVote } from "@/redux/votesSlice";

export default function Home() {
  const dispatch = useDispatch();
  const votes = useSelector((state: RootState) => state.votes.votes);

  const blogs = useMemo(
    () => [
      {
        title: "Do I know hooks?",
        description: "Well, it depends which ones...",
        author: "Luc",
      },
      {
        title: "Do I need backend?",
        description: "Huh, for frontend?",
        author: "Unknown",
      },
      {
        title: "Your time is ticking...",
        description: "I have to hurry up!",
        author: "Luc",
      },
    ],
    []
  );

  useEffect(() => {
    dispatch(setVotes(blogs.map(() => 0)));
  }, [dispatch, blogs]);

  const handleVote = (index: number) => {
    dispatch(incrementVote(index));
  };

  const ranks = votes
    .map((vote, index) => ({ vote, index }))
    .sort((a, b) => b.vote - a.vote)
    .map((item, rank) => ({ ...item, rank: rank + 1 }))
    .sort((a, b) => a.index - b.index)
    .map((item) => item.rank);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="w-1/3 flex flex-col  gap-5">
        <h1>Total votes: {votes.reduce((a, b) => a + b, 0)} </h1>
        <BlogList
          blogs={blogs}
          votes={votes}
          ranks={ranks}
          handleVote={handleVote}
        />
      </div>
    </div>
  );
}
