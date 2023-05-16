module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: false
                },
                files: {
                    './dist/main.css': './src/main.less'
                }
            }
        },
      uglify: {
        options: {
          compress: true 
        },
        my_target: {
          files: {
            './dist/index.min.js': ['./src/index.js']
          }
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  

    grunt.registerTask('default', ['less:development', 'uglify']);
    grunt.registerTask('production', ['less:production', 'uglify']);
  };
  
