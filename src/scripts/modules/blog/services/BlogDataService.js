'use strict';

module.exports = /*@ngInject*/
    function BlogDataService(DataProvider) {
        var api = {
            articles: {
                get: '/api/articles'
            },
            article: {
                get: '/api/articles/{id}'
            }
        };
        function _getArticles() {
            return DataProvider.get(
                api.articles.get
            )
        }
        function _getArticle(id) {
            return DataProvider.get(
                api.article.get.replace('{id}', id)
            )
        }
        return {
            articles: {
                get: _getArticles
            },
            article: {
                get: _getArticle
            }
        }
    };

