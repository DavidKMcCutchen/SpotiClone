// import { Action, createReducer, on } from '@ngrx/store';

// import * as FeaturesAuthActions from './auth.actions';

// export const AUTH_FEATURE_KEY = 'auth';

// export interface FeaturesAuthState {
//   loading: boolean;
//   access_token?: string;
//   isAuthenticated: boolean;
// }

// export const initialState: FeaturesAuthState = {
//   loading: false,
//   isAuthenticated: false,
// };

// const reducer = createReducer(
//   initialState,
//   on(FeaturesAuthActions.loginRequested, (state) => ({
//     ...state,
//     loading: true,
//   })),
//   on(FeaturesAuthActions.loginRequestAccepted, (state, { access_token }) => ({
//     ...state,
//     loading: false,
//     isAuthenticated: !!access_token,
//     access_token,
//   })),
//   // on(FeaturesAuthActions.loginRequestRejected, (state) => ({
//   //   ...state,
//   //   loading: false,
//   // })),
//   on(FeaturesAuthActions.hydrateToken, (state, { access_token }) => ({
//     ...state,
//     isAuthenticated: !!access_token,
//     access_token,
//   })),
//   // on(FeaturesAuthActions.logoutClicked, () => ({
//   //   ...initialState,
//   // })),
//   // on(FeaturesAuthActions.registerClicked, () => ({
//   //   ...initialState
//   // }))
// );

// export function authReducer(
//   state: FeaturesAuthState | undefined,
//   action: Action
// ) {
//   return reducer(state, action);
// }
