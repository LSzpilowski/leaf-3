"use client";

import React, { useState } from "react";
import Counter from "./counter";
import { Card } from "@/components/ui/card";
import { Reorder } from "framer-motion";

interface Blog {
  title: string;
  description: string;
  author: string;
}

function BlogList({
  blogs,
  votes,
  ranks,
  handleVote,
}: {
  blogs: Blog[];
  votes: number[];
  ranks: number[];
  handleVote: (index: number) => void;
}) {
  const sortedBlogs = blogs
    .map((blog, index) => ({
      ...blog,
      vote: votes[index],
      originalIndex: index,
    }))
    .sort((a, b) => b.vote - a.vote);

  return (
    <Reorder.Group
      axis="y"
      values={sortedBlogs}
      onReorder={(newOrder) => {}}
      className="w-full flex flex-col border-2 p-5 gap-2"
    >
      {sortedBlogs.map((blog, sortedIndex) => {
        return (
          <Reorder.Item
            drag={false}
            key={blog.originalIndex}
            value={blog}
            className="w-full"
          >
            <Card
              key={sortedIndex}
              className="grid grid-cols-4 p-2 w-full items-center "
            >
              <div className="flex flex-col col-span-2">
                <h1 className="text-xl font-bold">{blog.title}</h1>
                <h5>{blog.description}</h5>
                <h2>
                  Written by <b>{blog.author}</b>
                </h2>
              </div>
              <div className={`${sortedIndex === 0 ? "font-bold" : null}`}>
                Place: {sortedIndex + 1}
              </div>
              <Counter
                votes={blog.vote!}
                handleVote={() => handleVote(blog.originalIndex!)}
              />
            </Card>
          </Reorder.Item>
        );
      })}
    </Reorder.Group>
  );
}

export default BlogList;
