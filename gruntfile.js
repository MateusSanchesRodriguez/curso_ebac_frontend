module.exports = function(grunt) {
    // Configuração do Grunt
    grunt.initConfig({
      // Tarefa para compilar LESS
        less: {
            development: {
                options: {
                    compress: false // Compressão do CSS desativada para desenvolvimento
                },
                files: {
                    './dist/main.css': './src/main.less' // Caminhos para os arquivos LESS de entrada e CSS de saída
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
  