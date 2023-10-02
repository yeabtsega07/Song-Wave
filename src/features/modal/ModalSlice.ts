/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false,
    },
    reducers: {
        openModal: (state) => {
            state.isOpen = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;

export const modal2Slice = createSlice({
    name: 'modal2',
    initialState: {
        isOpen: false,
    },
    reducers: {
        openModal2: (state) => {
            state.isOpen = true;
        },
        closeModal2: (state) => {
            state.isOpen = false;
        },
    },
});

export const { openModal2, closeModal2 } = modal2Slice.actions;
export const modal2Reducer = modal2Slice.reducer;