import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IVotesState {
  votes: number[];
}

const initialState: IVotesState = {
  votes: [],
};

export const votesSlice = createSlice({
  name: "votes",
  initialState,
  reducers: {
    setVotes: (state, action: PayloadAction<number[]>) => {
      state.votes = action.payload;
    },
    incrementVote: (state, action: PayloadAction<number>) => {
      state.votes[action.payload] += 1;
    },
  },
});

export const { setVotes, incrementVote } = votesSlice.actions;

export default votesSlice.reducer;
