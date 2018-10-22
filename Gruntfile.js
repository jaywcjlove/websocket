module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      app_task: {
        options: {
          beautify: false,
          mangle: true,
          compress: false
        },
        files: {
          'build/websocket.min.js': ['lib/websocket.js'],
          'test/websocket.min.js': ['lib/websocket.js']
        }
      }
    },
    jshint: {
      options: {
        eqeqeq: true,
        trailing: true
      },
      files: ['lib/websocket.js']
    },
    watch: {
      another: {
        files: ['lib/*.js'],
        tasks: ['jshint', 'uglify'],
        options: {
          livereload: true
        }
      }
    },
    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          args: ['dev'],
          // nodeArgs: ['--inspect'],
          callback: function (nodemon) {
            return nodemon.on('log', function (event) {
              return console.log(event.colour);
            });
          },
          env: {
            PORT: '8181'
          },
          cwd: __dirname,
          ignore: ['node_modules/**', 'bower_components/**'],
          debug: true,
          ext: 'js,coffee,html',
          watch: ['*', 'test/*'],
          delay: 1,
          legacyWatch: true
        }
      }
    },
    concurrent: {
      target: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  });
  grunt.option('force', true);
  return grunt.registerTask('default', ['concurrent:target']);
};