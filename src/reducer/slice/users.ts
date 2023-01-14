import { createSlice } from '@reduxjs/toolkit';
import { Users } from '../../@types/users';

const initialState : Users = {
  isFetching: false,
  data: [],
  cloneData: []
}

const slice = createSlice({
    name: 'users',
    initialState,
    reducers:{
     startLoading(state){
        state.isFetching = true;
     },
     getData(state, action){
        state.data = action.payload;
        state.cloneData = action.payload;
        state.isFetching = false;
     }
    }
});



export const { startLoading, getData } = slice.actions;

export default slice.reducer;