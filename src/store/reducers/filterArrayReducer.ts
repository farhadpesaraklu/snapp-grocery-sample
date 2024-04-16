import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface sortProps {
    sortValue: string;
    filterValuesList: string[];
}

const initialState: sortProps = {
    filterValuesList: [],
    sortValue: ""
}


export const filterArraySlice = createSlice({
    name: "filterArray",
    initialState,
    reducers: {
        setSortValue: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                sortValue: action.payload,

            }
        },
        addfiltersValues: (state, action: PayloadAction<string>) => {

            return {
                ...state,
                filterValuesList: [...state.filterValuesList, action.payload, state.sortValue]
            }

        }
    },
});


export const { setSortValue, addfiltersValues } =
    filterArraySlice.actions;


export default filterArraySlice.reducer;