module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'pattern-library/source/css/style.css': 'pattern-library/source/css/scss/style.scss'
                }
            }
        },
        watch: {
            files: ['**/*.scss'],
            tasks: ['sass']
        },
        exec: {
            generate: 'php pattern-library/core/console --generate'
        }
    });
    grunt.registerTask( 'default' , [ 'sass' , 'exec:generate' ] );

};