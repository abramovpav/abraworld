'use strict';

module.exports = /*@ngInject*/
    function UsersDataService(DataProvider) {
        var api = {
            users: {
                get: '/api/users/'
            },
            user: {
                get: '/api/users/{id}'
            }
        };
        function _getUsers() {
            return DataProvider.get(
                api.users.get
            )
        }
        function _getUser(id) {
            return DataProvider.get(
                api.user.get.replace('{id}', id)
            )
        }
        return {
            users: {
                get: _getUsers
            },
            user: {
                get: _getUser
            }
        }
    };

