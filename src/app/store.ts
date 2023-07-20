import { configureStore } from '@reduxjs/toolkit';
import { showReducer} from "../container/SerialSearch/serialSearchSlice";
import {serialInformationReducer} from "../container/SerialDetails/serialDetailsSlice";

export const store = configureStore({
    reducer: {
        showReducer: showReducer,
        serialInformationReducer: serialInformationReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;