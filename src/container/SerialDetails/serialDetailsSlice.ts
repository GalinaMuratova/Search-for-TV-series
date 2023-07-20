import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {IInformation, IShowInfo} from "../../types";

const initialState: IShowInfo = {
    results: {
        name:'',
        language: '',
        status: '',
        summary: '',
        img: '',
        runtime: 0
    },
    loading: false,
    error: false,
};

export const fetchDataGetInfo = createAsyncThunk<IInformation, number>(
    'tvShows/fetchGetInfo',
    async (id) => {
        const response = await axios.get(`http://api.tvmaze.com/shows/${id}`);
        const dataResponse = response.data;
        const tvShows: IInformation = {
            name: dataResponse.name,
            language: dataResponse.language,
            status: dataResponse.status,
            summary: dataResponse.summary,
            img: dataResponse.image.medium,
            runtime: dataResponse.runtime
        }
        return tvShows;
    }
);

const serialInformationSlice = createSlice({
    name: 'tvShowsDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDataGetInfo.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(fetchDataGetInfo.fulfilled, (state, action) => {
            state.loading = false;
            state.results = action.payload;
            console.log(state.results);
        });
        builder.addCase(fetchDataGetInfo.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });
    },
});

export const serialInformationReducer = serialInformationSlice.reducer;