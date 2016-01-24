'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    title: 'Inicio',
    state: 'main'
  }, {
    title: 'Para Padres',
    state: 'parents'
  }, {
    title: 'Para Colegios',
    state: 'schools'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.isParent = Auth.isParent;
    this.isSchool = Auth.isSchool;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('commonAppEccoleApp')
  .controller('NavbarController', NavbarController);
