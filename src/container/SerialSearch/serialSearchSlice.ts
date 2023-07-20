import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {IShow, IShowState} from "../../types";
import {fetchDataGetInfo} from "../SerialDetails/serialDetailsSlice";

const initialState: IShowState = {
    query: '',
    results: [],
    error:false,
    loading:false,
};

export const fetchData = createAsyncThunk<IShow[], string>(
    'tvShows/fetch',
    async (value) => {
        const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${value}`);
        const data = response.data;
        const tvShows: IShow[] = data.map((result: any) => ({
            name: result.show.name,
            url: result.show.url,
            id: result.show.id,
        }));
        return tvShows;
    }
);

const serialSlice = createSlice({
    name: 'tvShows',
    initialState,
    reducers: {
        changeValue(state, action) {
            state.query = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDataGetInfo.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.results = action.payload;
        });
        builder.addCase(fetchDataGetInfo.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });
    },
});

export const showReducer = serialSlice.reducer;
export const { changeValue } = serialSlice.actions;
