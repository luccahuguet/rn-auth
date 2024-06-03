import axios from "axios";

const BASE_URL = "https://identitytoolkit.googleapis.com";
const SIGNUP_PATH = "v1/accounts:signUp?key=";
const API_KEY = "AIzaSyCjZ9rT9PgTAz_0R4F5W7-jixXGci6KO9s";
const url = BASE_URL + SIGNUP_PATH + API_KEY;

async function authenticate(mode, email, password) {
  let url = `${BASE_URL}/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  return response.data.idToken;
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
