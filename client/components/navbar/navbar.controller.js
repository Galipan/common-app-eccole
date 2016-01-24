'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    title: 'Inicio',
    state: 'main'
  }, {
    title: 'Para Padres',
    state: 'parents'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('commonAppEccoleApp')
  .controller('NavbarController', NavbarController);
