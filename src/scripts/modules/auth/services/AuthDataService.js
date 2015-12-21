'use strict';

module.exports = /*@ngInject*/
    function AuthDataService(DataProvider) {
        var api = {
            api: {
                login: '/api-token-auth/'
                //logout: '/api-auth/logout'
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

