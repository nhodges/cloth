module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    sass: {
      dist: {
        options: {
          outputStyle: "nested"
        },
        files: {
          "dist/css/app.css": "src/cloth.scss"
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      grunt: {
        files: ["Gruntfile.js"]
      },
      sass: {
        files: "src/cloth.scss",
        tasks: ["sass"]
      }
    }
  });
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.registerTask("build", ["sass"]);
  grunt.registerTask("default", ["build", "watch"]);
};
