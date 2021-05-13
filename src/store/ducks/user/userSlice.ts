import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from '../LoadingState';
import { UserState } from './state';

const initialState: UserState = {
  profile: null,
  status: LoadingState.NEVER,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state: UserState, { payload }: PayloadAction<UserState> ) => {
      return {
        ...state,
        profile: payload.profile,
        status: LoadingState.SUCCESS,
      };
    },
    setLoadingState: (state: UserState, { payload }: PayloadAction<LoadingState>) => {
      return {
        ...state,
        status: payload,
      };
    },
    fetchSignIn: (state: UserState) => {
      return {
        ...state,
        profile: null,
        status: LoadingState.LOADING,
        error: null,
      };
    },
    fetchSignOut: (state: UserState) => {
      return {
        ...state,
        profile: null,
        status: LoadingState.LOADED,
        error: null,
      };
    },
  },
  extraReducers: {},
});

export const { setUserData, setLoadingState, fetchSignIn, fetchSignOut } = userSlice.actions;
export default userSlice.reducer;