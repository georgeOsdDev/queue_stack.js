log = console.log
crypto = require 'crypto'
{ exec } = require 'child_process'

Coffee =
  cmd: "coffee"
  options: [
    "-c"                                #compile option
    "-o ."                              #dest
    "./lib/queue_stack.coffee"          #src
  ]

Coffeelint =
  cmd: "coffeelint"
  options: [
    "-f ./test/coffeelint.json"         #config file
    "-r"                                #recurisve
    "./"                                #src
  ]

Uglifyjs =
  cmd: "uglifyjs"
  options: [
    "--verbose"                         #verbose
    "-o queue_stack.min.js"             #verbose
    "./queue_stack.js"                  #src
  ]

Mocha =
  cmd: "mocha"
  options: [
    "./test/test.js"
  ]

task 'compile', (options) ->
  execGlobalCommand(Coffeelint)
  execGlobalCommand(Coffee)
  # execGlobalCommand(Stylus)

task 'uglify', (options) ->
  execGlobalCommand(Uglifyjs)

task 'lint', (options) ->
  execGlobalCommand(Coffeelint)

task 'mocha', (options) ->
  execGlobalCommand(Mocha)

task 'test', (options) ->
  execGlobalCommand(Mocha)

task 'clean', (options) ->
  clean()

execGlobalCommand = (command) ->
  exec "#{command.cmd} #{command.options.join(' ')}", (err, stdout, stderr)->
    log stdout + stderr
    if (command.callback)
      exec "#{command.callback}", (err, stdout, stderr)->
        log stdout + stderr

clean = ->
  exec 'rm -rf ./*.js', (err, stdout, stderr)->
    throw err if err
    log stdout + stderr
