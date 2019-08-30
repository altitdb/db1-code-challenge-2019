let loggedIn = false;

export const isLoggedIn = () => loggedIn;

export const setLoggedIn = (logged) => {
    loggedIn = logged;
}