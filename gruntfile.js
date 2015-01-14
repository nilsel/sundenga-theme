
module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: false,
          optimization: 2,
          sourceMap: true,
          sourceMapFilename: "bootstrap.css.map",
          sourceMapBasepath: "less/"
        },
        files: {
          // target.css file: source.less file
          "css/style.css": "less/style.less"
        }
      }
    },
    watch: {
      styles: {
        // Which files to watch (all .less files recursively in the less directory)
        files: ['less/**/*.less'],
        tasks: ['less', 'copy'],
        options: {
          nospawn: true
        }
      }
    },
    copy: {
      main: {
        src: 'css/**',
        dest: '/Volumes/sundenga-theme/',
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['watch']);
};
