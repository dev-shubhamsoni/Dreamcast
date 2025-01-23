
import { mainApi } from "@/redux/api/mainApi";
import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "@/redux/slice/mainSlice"


export const store = () => {
  return configureStore({
    reducer: {

      [mainApi.reducerPath]: mainApi.reducer,
      mainSlice: mainSlice, 

    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([mainApi.middleware]),
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
