import {LocalStorage} from "./storage/storage";
import {AccessLevel, IdentifyObject} from "../identify/data-access/entities/IdentifyObject";

const storage = new LocalStorage();

const CONTEXT = {
  logged: false,
  user: '',
  touched: '',
  firstName: '',
  lastName: '',
  access: AccessLevel.BANNED
}

export function getUserId(): string {
  if (isLogged()) {
    return CONTEXT.user;
  }
  return '';
}

export function getUserInfo(): string {
  if (isLogged()) {
    return `${CONTEXT.firstName}, ${CONTEXT.lastName} [${CONTEXT.user}]`;
  }
  return '';
}

export function loggedIn(user: IdentifyObject): void {
  CONTEXT.logged = true;
  CONTEXT.user = user.id;
  CONTEXT.firstName = user.firstName;
  CONTEXT.lastName = user.lastName;
  CONTEXT.touched = new Date().toISOString();
  CONTEXT.access = user.access;
  storage.set('context', JSON.stringify(CONTEXT));
}

export function logout(): void {
  storage.clearItem('context');
  CONTEXT.logged = false;
  CONTEXT.user = '';
  CONTEXT.touched = '';
  CONTEXT.firstName = '';
  CONTEXT.lastName = '';
  CONTEXT.access = AccessLevel.BANNED
}

function getAccess(): AccessLevel {
  return CONTEXT.access;
}

export function isAdmin(): boolean {
  return isLogged() && getAccess() == AccessLevel.ADMIN;
}

export function isLogged(): boolean {
  if (CONTEXT.logged && CONTEXT.user) {
    return true;
  }
  const context = storage.get('context');
  if (context) {
    let parsedContext = JSON.parse(context);
    if (parsedContext.touched && new Date().getTime() - new Date(parsedContext.touched).getTime() < 1800000) {
      CONTEXT.logged = parsedContext.logged;
      CONTEXT.user = parsedContext.user;
      CONTEXT.touched = new Date().toISOString();
      CONTEXT.firstName = parsedContext.firstName;
      CONTEXT.lastName = parsedContext.lastName;
      CONTEXT.access = parsedContext.access;
    } else {
      CONTEXT.logged = false;
      CONTEXT.user = '';
      CONTEXT.touched = '';
      CONTEXT.firstName = '';
      CONTEXT.lastName = '';
    }
  }
  return !!(CONTEXT.logged && CONTEXT.user);
}
