import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
    name: "navigation",
    initialState: {
        active: false,
        backgraoundDark: false,
    },
    reducers: {
        navigationToggle: (state) => {
            state.active = !state.active;
        },
        navigationActive: (state) => {
            state.active = true;
        },
        navigationDeactive: (state) => {
            state.active = false;
        },
        navigationBackgroundToDark: (state) => {
            state.backgraoundDark = true;
        },
        navigationBackgroundToLight: (state) => {
            state.backgraoundDark = false;
        },
    },
});

export const {
    navigationToggle,
    navigationActive,
    navigationDeactive,
    navigationBackgroundToDark,
    navigationBackgroundToLight,
} = navigationSlice.actions;

export default navigationSlice.reducer;
