import { createSlice } from '@reduxjs/toolkit';
import { Breadcrumb } from '../../@types/common';

const initialState: Breadcrumb = {
    activePage: 'Landing',
    breadCrumbList: ['Home']
}

const slice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setActivePage(state, action) {
            state.activePage = action.payload.activePage
        },
        setBreadCrumbList(state, action) {
            // const newBreadCrumbList = [...state.breadCrumbList, action.payload.breadCrumbList]
            const newBreadCrumbList = action.payload.breadCrumbList;
            state.breadCrumbList = newBreadCrumbList;
        }
    }
});


export const { setActivePage, setBreadCrumbList } = slice.actions;

export default slice.reducer;