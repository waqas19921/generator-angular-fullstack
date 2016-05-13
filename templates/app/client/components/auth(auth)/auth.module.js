'use strict';
import angular from 'angular';
// import constants from '';
// import util from '../util/util.module';
import ngCookies from 'angular-cookies';
import {authInterceptor} from './interceptor.serice';
import {routerDecorator} from './router.decorator';
import {AuthResource} from './auth.service';
import {UserResource} from './user.service';
<%_ if (filters.ngroute) { _%>
import ngRoute from 'angular-route';<% } %>
<%_ if (filters.uirouter) { _%>
import uiRouter from 'angular-ui-router';<% } %>

export default angular.module('<%= scriptAppName %>.auth', [
  '<%= scriptAppName %>.constants',
  '<%= scriptAppName %>.util',
  ngCookies<% if(filters.ngroute) { %>,
  ngRoute<% } if(filters.uirouter) { %>,
  uiRouter<% } %>
])
  .factory('authInterceptor', authInterceptor)
  .run(routerDecorator)
  .factory('Auth', AuthService)
  .factory('User', UserResource)
  .config(function($httpProvider) {
  	'ngInject';
    $httpProvider.interceptors.push('authInterceptor');
  })
  .name;
