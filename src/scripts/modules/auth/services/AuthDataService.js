'use strict';

module.exports = /*@ngInject*/
    function AuthDataService(DataProvider) {
        var api = {
            api: {
                login: '/api-auth/login',
                logout: '/api-auth/logout'
            }
        };
        function _login(creadentials) {
            return DataProvider.post(
                api.api.login,
                creadentials
            )
        }
        return {
            auth: {
                login: _login
            }
        }
    };

