import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Filters } from "../../services/vendorProductCategoryService/type";

interface FilterAndSortProps {
  sortValue: string;
  filterValuesList: string[];
  filtersAndSortList: Filters;
}

const initialState: FilterAndSortProps = {
  filterValuesList: [],
  sortValue: "",
  filtersAndSortList: {
    sections: [],
    top: { data: [] },
  },
};

export const filterArraySlice = createSlice({
  name: "filterArray",
  initialState,
  reducers: {
    setFiltersAndSortList: (state, action: PayloadAction<Filters>) => {
      return {
        ...state,
        filtersAndSortList: action.payload,
      };
    },
    setSortValue: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        sortValue: action.payload,
      };
    },
    addfiltersValues: (state, action: PayloadAction<string[]>) => {
      return {
        ...state,
        filterValuesList: [...action.payload],
      };
    },
  },
});

export const { setSortValue, addfiltersValues, setFiltersAndSortList } = filterArraySlice.actions;

export default filterArraySlice.reducer;
