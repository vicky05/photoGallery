import { createSlice } from '@reduxjs/toolkit';
import { Photos } from '../../@types/photos';

const initialState: Photos = {
    isFetching: false,
    data: [],
    cloneData: [],
    activeAlbumId: null,
    showPhotos: false
}

const slice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        startLoading(state) {
            state.isFetching = true;
        },
        getData(state, action) {
            state.data = action.payload;
            state.cloneData = action.payload;
            state.isFetching = false;
        },
         setActiveAlbumId(state, action){
          state.activeAlbumId = action.payload.albumId
          state.showPhotos = action.payload.showPhotos
         }
    }
});


export const { startLoading, getData,setActiveAlbumId } = slice.actions;

export default slice.reducer;