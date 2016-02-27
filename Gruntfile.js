var file = require("file");
var path = require("path");

module.exports = function(grunt) {

  var loadFiles = function(start, filenameFilter) {
    var dest = [];
    file.walkSync(start, function(dirPath, dirs, files) {
      for (var i in files) {
        var f = files[i];
        if (filenameFilter(f)) {
          dest.push(path.resolve(dirPath, f));
        }
      }
    });
    return dest;
  }

  var srcFiles = ['partials/**/*.js', 'directives/**/*.js'];
  var scssFiles = loadFiles('partials/', function(f) {return f.endsWith('.scss')});
  var cssDist = './dist/css/';
  var staticFiles = ['./dist/**/*.*', './index.html', './partials/**/*.html'];

  grunt.initConfig({
    browserify: {
      options: {
        alias: {
          'app': './partials/app/app.js'
        }
      },
      dist: {
        files: {
          'dist/js/module.js':  srcFiles
        }
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'partials',
          src: ['**/*.scss'],
          dest: 'dist/css',
          ext: '.css'
        }]
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: 'dist/css/**/*.css',
        dest: 'dist/css/app.css',
      },
    },
    cssmin: {
      target: {
        files: {
          'dist/css/app.min.css': ['dist/css/app.css']
        }
      }
    },
    browserSync: {
      bsFiles: {
        src : staticFiles
      },
      options: {
        atBegin: true,
        server: {
          baseDir: "./"
        }
      }
    },
    watch: {
      options : {
        atBegin: true
      },
      js : {
        files: srcFiles,
        tasks: ['browserify']
      },
      scss: {
        files: scssFiles,
        tasks: ['sass', 'concat', 'cssmin']
      }

    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('build', ['browserify', 'sass', 'concat', 'cssmin']);
  grunt.registerTask('default', ['watch']);
};
