import { configureStore } from "@reduxjs/toolkit";
import bedroomReducer from "./features/bedroomsSlice";
import userReducer from "./features/userSlice";
import planSlice from "./features/planSlice";
import bookingsSlice from "./features/bookingSlice"
import categoriesSlice from "./features/categoriesSlice";

const store = configureStore({
    reducer:{
        bedrooms: bedroomReducer,
        users:userReducer,
        plans: planSlice,
        bookings: bookingsSlice,
        categories: categoriesSlice,
    },
});

export default store;