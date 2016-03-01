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

  var jsFiles = ['partials/**/*.js', 'directives/**/*.js'];
  var scssFiles = loadFiles('partials/', function(f) {return f.endsWith('.scss')});
  var cssDist = './dist/css/';
  var staticFiles = ['./dist/**/*.*', './index.html', './partials/**/*.html'];

  grunt.initConfig({
    browserSync: {
      bsFiles: {
        src : staticFiles
      },
      options: {
        injectChanges: false,
        atBegin: true,
        server: {
          baseDir: "./"
        }
      }
    },
    browserify: {
      options: {
        alias: {
          'app': './partials/app/app.js'
        }
      },
      dist: {
        files: {
          'dist/js/module.js':  jsFiles
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
    clean: ["dist/css/"] ,
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: 'dist/css/**/*.css',
        dest: 'dist/css/app.css',
      },
    },
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({
            browsers: /* retrocompatibilidade do bootstrap */[
              "Android 2.3",
              "Android >= 4",
              "Chrome >= 20",
              "Firefox >= 24",
              "Explorer >= 8",
              "iOS >= 6",
              "Opera >= 12",
              "Safari >= 6"
            ]
          }),
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'dist/css/app.css',
        dest: 'dist/css/app.min.css'
      }
    },
    watch: {
      options : {
        atBegin: true
      },
      js : {
        files: jsFiles,
        tasks: ['buildJs']
      },
      scss: {
        files: scssFiles,
        tasks: ['buildCss']
      }

    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('buildJs', ['browserify']);
  grunt.registerTask('buildCss', ['clean', 'sass', 'concat', 'postcss:dist']);
  grunt.registerTask('build', ['buildJs', 'buildCss']);
  grunt.registerTask('default', ['watch']);
};
