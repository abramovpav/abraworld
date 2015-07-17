global.SRC_FOLDER = 'src';
global.BUILD_FOLDER = 'dist';
global.RELEASE_FOLDER = 'release';
global.TMP_FOLDER = 'tmp';


global.config = {
    paths: {
        src: {
            index: SRC_FOLDER + '/index.html',
            assets: [SRC_FOLDER + '/assets/**/*', '!' + SRC_FOLDER + '/assets/images/**/*'],
            images: SRC_FOLDER + '/assets/images/**/*',
            favicon: SRC_FOLDER + '/favicon.png',
            scripts: SRC_FOLDER + '/scripts/**/*.js',
            bootfonts: 'bower_components/bootstrap/dist/fonts/**/*',
            styles: SRC_FOLDER + '/styles/app.less',
            stylesGlob: SRC_FOLDER + '/styles/**/*.css',
            templates: SRC_FOLDER + '/views/**/*.ng-tmpl.jade',
            templatesHTML: SRC_FOLDER + '/views/**/*.ng-tmpl.html',
            templatesCompiled: TMP_FOLDER,
            livereload: [BUILD_FOLDER + '/**/*', '!' + BUILD_FOLDER + '/assets/**/*'],
            modules: './' + SRC_FOLDER + '/scripts/index.js'
        },
        dest: {
            build: {
                styles: BUILD_FOLDER,
                scripts: BUILD_FOLDER,
                fonts: BUILD_FOLDER + '/assets/fonts/bootstrap',
                images: BUILD_FOLDER + '/assets/images',
                favicon: BUILD_FOLDER,
                assets: BUILD_FOLDER + '/assets',
                index: BUILD_FOLDER,
                server: BUILD_FOLDER
            },
            release: {
                styles: RELEASE_FOLDER,
                scripts: RELEASE_FOLDER + '/scripts',
                fonts: RELEASE_FOLDER + '/assets/fonts/bootstrap',
                images: RELEASE_FOLDER + '/assets/images',
                assets: RELEASE_FOLDER + '/assets',
                index: RELEASE_FOLDER,
                server: RELEASE_FOLDER
            }
        }
    },
    filenames: {
        build: {
            styles: 'bundle.css',
            scripts: 'bundle.js'
        },
        release: {
            styles: 'bundle.min.css',
            scripts: 'bundle.min.js'
        },
        templates: {
            compiled: 'templates.js',
            angular: {
                moduleName: 'app.templates',
                prefix: '',
                stripPrefix: 'app/'
            }
        }
    },
    api: {
        endpoint: 'http://0.0.0.0:5000',
        delay: 500,
        endpointsError: true
    },
    ports: {
        staticServer: 9000,
        livereloadServer: 35729
    }
};