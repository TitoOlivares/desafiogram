import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = process.env.REACT_APP_API_URL;

const initialState = {
  pokemonList: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setPokemonList: (state, action) => {
      state.pokemonList = action.payload
    },
  },
});

export const { increment, decrement, incrementByAmount, setPokemonList } = counterSlice.actions;


export const getPokemonList = () => (dispatch) => {
  axios.get(URL)
    .then(res => {
      console.log('lalala', res.data)
      dispatch(setPokemonList(res.data))
    })
};

export default counterSlice.reducer;
