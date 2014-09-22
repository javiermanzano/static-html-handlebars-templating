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
      },
      sass: {
      	files: 'sass/**/*.scss',
      	tasks: ['compass']
      }
    },
    'compile-handlebars': {
    	allStatic: {
			template: 'templates/*.hbs',
			templateData: 'templates/data.json',
			partials: 'templates/partials/*.hbs',
			output: 'output/*.html'
	    }
    },
    compass: {                  // Task
	    dist: {                   // Target
	      options: {              // Target options
	        sassDir: 'sass',
	        cssDir: 'css',
	        environment: 'production'
	      }
	    },
	    dev: {                    // Another target
	      options: {
	        sassDir: 'sass',
	        cssDir: 'css'
	      }
	    }
	}
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-compile-handlebars');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task.
  grunt.registerTask('default', ['compile-handlebars', 'compass']);

};