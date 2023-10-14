import {createSlice} from '@reduxjs/toolkit';

interface userInfoProps {
  userName: string;
  userEmail: string;
  expectedBabyDate: string;
  workoutSchedule: string;
}
interface userProfileProps {
  userInfo: userInfoProps;
}
const initialState = {
  userInfo: {
    userName: '',
    userEmail: '',
    expectedBabyDate: '',
    workoutSchedule: '',
  },
} as userProfileProps;

const userInformationSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUserAction(state, action) {
      state.userInfo.userEmail = action.payload ?? '';
    },
    addUserName(state, action) {
      state.userInfo.userName = action.payload ?? '';
    },
    addExpectedBabyDate(state, action) {
      state.userInfo.expectedBabyDate = action.payload ?? '';
    },
    addWorkoutSchedule(state, action) {
      state.userInfo.workoutSchedule = action.payload ?? '';
    },
  },
});

export const {
  loginUserAction,
  addUserName,
  addExpectedBabyDate,
  addWorkoutSchedule,
} = userInformationSlice.actions;

export default userInformationSlice.reducer;
