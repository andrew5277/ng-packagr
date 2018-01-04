import { AppComponent } from './app.component';
//import { WelcomeComponent } from './welcome.component';
import { Transition } from '@uirouter/core';

/**
 * This is the parent state for the entire application.
 *
 * This state's primary purposes are:
 * 1) Shows the outermost chrome (including the navigation and logout for authenticated users)
 * 2) Provide a viewport (ui-view) for a substate to plug into
 */
export const appState = {
  name: 'main',
  redirectTo: 'main.home',
  component: AppComponent,
};
export const homeState = {
  name: 'main.home',
  url: '/home',
  component: AppComponent,
};
export const editState = {
  name: 'main.edit',
  url: '/home',
  component: AppComponent,
};
export const viewState = {
  name: 'main.view',
  url: '/home',
  component: AppComponent,
};
export const searchState = {
  name: 'main.search',
  url: '/home',
  component: AppComponent,
};
///**
// * This is the 'welcome' state.  It is the default state (as defined by app.js) if no other state
// * can be matched to the URL.
// */
//export const welcomeState = {
//  parent: 'app',
//  name: 'welcome',
//  url: '/welcome',
//  component: WelcomeComponent,
//};

/**
 * This is a home screen for authenticated users.
 *
 * It shows giant buttons which activate their respective submodules: Messages, Contacts, Preferences
 */
//export const homeState = {
//  name: 'main.home',
//  url: '/home',
//  component: HomeComponent,
//};


/**
 * This is the login state.  It is activated when the user navigates to /login, or if a unauthenticated
 * user attempts to access a protected state (or substate) which requires authentication. (see routerhooks/requiresAuth.js)
 *
 * It shows a fake login widget and prompts the user to authenticate.  Once the user authenticates, it then
 * reactivates the state that the user originally came from.
 */
//export const loginState = {
//  name: 'login',
//  url: '/login',
//  component: LoginComponent,
//  resolve: [
//    { token: 'returnTo', deps: [Transition], resolveFn: returnTo },
//  ]
//};


/**
 * A resolve function for 'login' state which figures out what state to return to, after a successful login.
 *
 * If the user was initially redirected to login state (due to the requiresAuth redirect), then return the toState/params
 * they were redirected from.  Otherwise, if they transitioned directly, return the fromState/params.  Otherwise
 * return the main "home" state.
 */
export function returnTo($transition$: Transition): any {
  if ($transition$.redirectedFrom() != null) {
    // The user was redirected to the login state (e.g., via the requiresAuth hook when trying to activate contacts)
    // Return to the original attempted target state (e.g., contacts)
    return $transition$.redirectedFrom().targetState();
  }

  const $state = $transition$.router.stateService;

  // The user was not redirected to the login state; they directly activated the login state somehow.
  // Return them to the state they came from.
  let fromStateName = $transition$.from().name;
  if (fromStateName !== '' && fromStateName !== "logout") {
    return $state.target($transition$.from(), $transition$.params('from'));
  }

  // If the fromState's name is empty, then this was the initial transition. Just return them to the home state
  return $state.target('main.home');
}

//export const logoutState = {
//  name: 'logout',
//  url: '/logout',
//  component: LogoutComponent,
//};

//// This future state is a placeholder for all the lazy loaded Contacts states
//// The Contacts NgModule isn't loaded until a Contacts link is activated
//export const contactsFutureState = {
//  name: 'contacts.**',
//  url: '/contacts',
//  loadChildren: './contacts/contacts.module#ContactsModule'
//};

//// This future state is a placeholder for the lazy loaded Prefs states
//export const prefsFutureState = {
//  name: 'prefs.**',
//  url: '/prefs',
//  loadChildren: './prefs/prefs.module#PrefsModule'
//};

//// This future state is a placeholder for the lazy loaded My Messages feature module
//export const mymessagesFutureState = {
//  name: 'mymessages.**',
//  url: '/mymessages',
//  loadChildren: './mymessages/mymessages.module#MymessagesModule'
//};

export const APP_STATES = [
  appState,
  //welcomeState,
  homeState,
  editState,
  viewState,
  searchState
  //loginState,
  //logoutState
  //contactsFutureState,
  //prefsFutureState,
  //mymessagesFutureState,
];
