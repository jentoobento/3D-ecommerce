// A regex to validate email addresses client side
export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

// The key used to store the login token in the auth cookie
export const LOGIN_TOKEN_KEY = 'myapp-user';

export const MIN_PASSWORD_LENGTH = 8;

export const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
