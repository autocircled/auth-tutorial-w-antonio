/**
 * An array of public routes
 * This routes do not require authentication
 * 
 * @type {string[]}
 */
export const publicRoutes = [
    "/"
];

/**
 * An array of auth routes
 * This routes redirect loggedin users to settings page 
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register"
];

/**
 * The prefix for api authentication routes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect after login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";