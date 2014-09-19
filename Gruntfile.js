'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    clean: {
      src: ['dist']
    },
    watch: {
      handlebars: {
        files: 'templates/**/*.hbs',
        tasks: ['compile-handlebars']
      }
    },
    'compile-handlebars': {
    	allStatic: {
			template: 'templates/*.hbs',
			templateData: 'templates/data.json',
			output: 'output/*.html'
	    }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-compile-handlebars');

  // Default task.
  grunt.registerTask('default', ['compile-handlebars']);

};