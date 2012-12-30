###
queue_stack.js
Licensed under the incredibly permissive MIT License.
Copyright © 2012 Takeharu.Oshida
###
"use strict"
root = this

class AbstructQueueStack
  _getArray: ->
    []

  # return queue is empty or not
  isEmpty: ->
    @_getArray().length is 0

  # clear all item in queue
  empty: ->
    @_getArray().splice(0,@size())

  # alias of empty
  clear: ->
    @empty()

  # return queue size
  size: ->
    @_getArray().length

  getArrayCopy: ->
    @_getArray().slice()

  toString: (separator=",")->
    @_getArray().join(separator)

class Queue
  Queue.prototype = new AbstructQueueStack()
  constructor: ->
    _array = []
    @_getArray = ->
      _array

  # enqueue item
  enqueue: (data) ->
    @_getArray().push data
    @

  # dequeue item
  dequeue: ->
    if @isEmpty() then undefined else @_getArray().shift()

  # peek item
  peek: ->
    if @isEmpty() then undefined else @_getArray()[0]

class Stack
  Stack.prototype = new AbstructQueueStack()
  constructor: ->
    _array = []
    @_getArray = ->
      _array

  push: (data) ->
    @_getArray().push data
    @ #chain

  pop: ->
    if @isEmpty() then undefined else @_getArray().pop()

  peek: ->
    if @isEmpty() then undefined else @_getArray()[@size()-1]

queue_stack =
  createQueue: ->
    new Queue()

  createStack: ->
    new Stack()

if typeof exports isnt 'undefined'
  if typeof module isnt 'undefined' and module.exports
    module.exports = queue_stack
  exports.queue_stack = queue_stack
else
  root["queue_stack"] = queue_stack

