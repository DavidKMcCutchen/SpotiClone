// import { select } from '@ngrx/store';
// import { Action, Store } from '@ngrx/store';
// import { Injectable } from '@angular/core';
// import * as authActions from './auth.actions';
// import * as fromAuth from './auth.reducer';
// import * as authSelectors from './auth.selectors';

// @Injectable({
//   providedIn: 'root',
// })

// export class FeaturesAuthFacade {
//   authLoading$ = this.store.select(authSelectors.selectAuthLoading);
//   isUserAuthenticated$ = this.store.select(
//     authSelectors.selectUserAuthenticated
//   );

//   constructor(
//     private store: Store<fromAuth.FeaturesAuthState>
//   ) {}

//   loginRequest() {
//     this.dispatch(authActions.loginRequested())
//   };

//   // logout() {
//   //   this.dispatch(authActions.logoutClicked());
//   // };

//   // register() {
//   //   this.dispatch(authActions.registerClicked());
//   // }

//   private dispatch(action: Action) {
//     this.store.dispatch(action)
//   }
// }
