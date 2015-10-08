/**
 * Created by Akshay on 09/15/2015.
 */
(function(){
    'use strict';

    angular.module('app')
        .controller('PremiumAccountController',PremiumAccountControllerFn);
    PremiumAccountControllerFn.$inject=['$rootScope','$scope'];
    function PremiumAccountControllerFn($rootScope,$scope){
        var premiumVm = this;

        this.setAccountType=function(){
            $rootScope.accounttype='Premium Account';

        };
    }




})();