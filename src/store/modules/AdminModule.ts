import { Mutation, Action, Module, VuexModule } from "vuex-module-decorators";

import { Actions, Mutations } from "../enums/StoreEnums";

export interface User {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  age: string;
}

export interface UserAuthInfo {
  errors: Array<string>;
  user: User;
  isAuthenticated: boolean;
}

@Module
export default class AdminModule extends VuexModule implements UserAuthInfo {
  errors = [];
  user = {} as User;
  isAuthenticated = false;

  /**
   * Get current user object
   * @returns User
   */
  get currentUser(): User {
    return this.user;
  }

  /**
   * Verify user authentication
   * @returns boolean
   */
  get isUserAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  @Mutation
  [Mutations.SET_USER](user: User) {
    this.user = user;
  }
  @Mutation
  [Mutations.SET_AUTH]() {
    this.isAuthenticated = !this.isAuthenticated;
  }

  @Action
  [Actions.UPDATE_USER](user: User) {
    this.context.commit(Mutations.SET_USER, user);
    this.context.commit(Mutations.SET_AUTH);
  }
}
