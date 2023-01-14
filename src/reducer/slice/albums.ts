import { createSlice } from '@reduxjs/toolkit';
import { Albums } from '../../@types/albums';

const initialState : Albums = {
    isFetching: false,
    data: [],
    cloneData: [],
    activeUserId: null,
    showAlbum: false
  }

  const slice = createSlice({
    name: 'albums',
    initialState,
    reducers:{
     startLoading(state){
        state.isFetching = true;
     },
     getData(state, action){
        state.data = action.payload;
        state.cloneData = action.payload;
        state.isFetching = false;
     },
     setActiveUserId(state, action){
      state.activeUserId = action.payload.userId
      state.showAlbum = action.payload.showAlbum
     }
    }
});


export const { startLoading, getData, setActiveUserId } = slice.actions;

export default slice.reducer;