module.exports = (grunt) ->
    grunt.loadNpmTasks 'grunt-contrib-watch'
    grunt.loadNpmTasks 'grunt-contrib-uglify'
    grunt.loadNpmTasks 'grunt-contrib-jshint'
    grunt.initConfig(
        pkg: grunt.file.readJSON 'package.json' 
        uglify:
            app_task: 
                options: 
                    beautify: false
                    mangle: true #不混淆变量名
                    compress:false #打开或关闭使用默认选项源压缩。
                files:
                    'build/websocket.min.js': [
                        'lib/websocket.js'
                    ]
            # app_task_test: 
            #     options: 
            #         beautify: true
            #         mangle: false #不混淆变量名
            #         # compress:false #打开或关闭使用默认选项源压缩。
            #         compress: false
            #     files:
            #         'test/websocket.min.js': [
            #             'lib/websocket.js'
            #         ]
        jshint: 
            options:
                eqeqeq: true
                trailing: true 
            files: ['lib/websocket.js']
        watch: 
            another: 
                files: ['lib/*.js']
                tasks: ['jshint','uglify']
                options: 
                    livereload: 1244
    )
    grunt.registerTask 'default', ['watch']
