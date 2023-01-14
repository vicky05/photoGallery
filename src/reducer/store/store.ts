import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { rootReducer } from "./rootReducer";
import { createLogger } from 'redux-logger';
import root from '../../sagas/index';

let sagaMiddleWare = createSagaMiddleware();
const middleWare: any = [sagaMiddleWare];
const logger = createLogger();
middleWare.push(logger);

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWare),
});
export type RootState = ReturnType<typeof store.getState>;

sagaMiddleWare.run(root);