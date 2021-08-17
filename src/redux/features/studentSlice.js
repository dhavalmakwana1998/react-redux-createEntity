import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const studentAdapter = createEntityAdapter();
export const studentSelector = studentAdapter.getSelectors(
  (state) => state.studentSlice
);

export const studentSlice = createSlice({
  name: "student",
  initialState: {
    students: studentAdapter.getInitialState(),
  },
  reducers: {
    addStudent: studentAdapter.addOne,
    updateStudent: studentAdapter.updateOne,
    deleteStudent: studentAdapter.removeOne,
  },
});

export const {
  getStudent,
  clearStudent,
  addStudent,
  updateStudent,
  deleteStudent,
} = studentSlice.actions;

export default studentSlice.reducer;
