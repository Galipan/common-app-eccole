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
    this.isSchool = Auth.isSchool()  && Auth.isLoggedIn();
    this.isParent = Auth.isParent()  && Auth.isLoggedIn();
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('commonAppEccoleApp')
  .controller('NavbarController', NavbarController);
