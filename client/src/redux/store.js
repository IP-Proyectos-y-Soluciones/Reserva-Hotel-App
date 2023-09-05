import { configureStore } from "@reduxjs/toolkit";
import bedroomReducer from "./features/bedroomsSlice";
import userReducer from "./features/userSlice";
import planSlice from "./features/planSlice";
import bookingsSlice from "./features/bookingSlice";
import bannerSlice from "./features/bannerSlice";
import categoriesSlice from "./features/categoriesSlice";
import serviceSlice from "./features/serviceSlice";
import testimonialsSlice from "./features/testimonialsSlice";

const store = configureStore({
    reducer:{
        bedrooms: bedroomReducer,
        users:userReducer,
        plans: planSlice,
        bookings: bookingsSlice,
        banner: bannerSlice,
        categories: categoriesSlice,
        service:serviceSlice,
        testimonials:testimonialsSlice,
    },
});

export default store;