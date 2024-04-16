import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../../services/vendorProductCategoryService/type";

interface SubCategoriesProps {
  subCategoriesList: Category[];
}

const initialState: SubCategoriesProps = {
  subCategoriesList: [],
};
export const subCateegoriesListSlice = createSlice({
  name: "SubCategoriesSlice",
  initialState,
  reducers: {
    setSubCategoriesList: (state, action: PayloadAction<Category[]>) => {
      return {
        ...state,
        subCategoriesList: action.payload,
      };
    },
  },
});

export const { setSubCategoriesList } = subCateegoriesListSlice.actions;

export default subCateegoriesListSlice.reducer;
