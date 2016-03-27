'use strict';

angular.module('aplicaleApp.version', [
  'aplicaleApp.version.interpolate-filter',
  'aplicaleApp.version.version-directive'
])

.value('version', '0.1');
