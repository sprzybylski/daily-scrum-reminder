module.exports = (grunt) ->

    grunt.initConfig
        nodewebkit:
            options:
                app_name: 'Daily Scrum Reminder',
                build_dir: './builds',
                credits: './public/index.html',
                mac_icns: './public/sample.icns',
                mac: true,
                win: false,
                linux32: false,
                linux64: true,
                src: './public/**/*'
            src: './public/**/*'

    grunt.loadNpmTasks 'grunt-node-webkit-builder'

    grunt.registerTask 'default', ['nodewebkit']
