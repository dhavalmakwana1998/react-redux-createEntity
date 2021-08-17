import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "./features/studentSlice";

const preloadedState = {
  studentSlice: {
    ids: [1, 2, 3, 4],
    entities: {
      1: {
        id: 1,
        firstName: "Vickey",
        lastName: "Doe",
        email: "test@gmail.com",
        phone: "0987654321",
        address: "860 Gautama Turnpike",
      },
      2: {
        id: 2,
        firstName: "Kamal",
        lastName: "Chaturvedi",
        email: "test@gmail.com",
        phone: "0987654321",
        address: "52520 Bhisham Brooks",
      },
      3: {
        id: 3,
        firstName: "Dm",
        lastName: "Mak",
        email: "dhavalmakwana191@gmail.com",
        phone: "7600446773",
        address:
          "400, shree hari krupa, luhar sheri,, call me when delivery : 7600446773",
      },
      4: {
        id: 4,
        firstName: "Test1",
        lastName: "Test",
        email: "test@gmail.com",
        phone: "0987654321",
        address: "57761 Shreyashi Junctions",
      },
    },
  },
};
export default configureStore({
  reducer: {
    studentSlice: StudentReducer,
  },
  preloadedState,
});
