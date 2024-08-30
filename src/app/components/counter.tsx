import React, { useState } from "react";
import CustomButton from "./customButton";

interface CounterProps {
  votes: number;
  handleVote: () => void;
}

function Counter({ votes, handleVote }: CounterProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-1 ">
      <div className="flex flex-row w-full justify-center gap-5">
        <h1 className="font-bold">Votes:</h1>
        <h1>{votes}</h1>
      </div>
      <div className="flex flex-row gap-2">
        <CustomButton name="Vote" onClick={handleVote} />
      </div>
    </div>
  );
}

export default Counter;
