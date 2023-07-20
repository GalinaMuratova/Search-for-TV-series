import { configureStore } from '@reduxjs/toolkit';
import { showReducer} from "../container/SerialSearch/serialSearchSlice";

export const store = configureStore({
    reducer: {
        showReducer: showReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;