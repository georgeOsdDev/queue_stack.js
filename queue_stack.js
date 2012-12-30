// Generated by CoffeeScript 1.4.0

/*
queue_stack.js
Licensed under the incredibly permissive MIT License.
Copyright © 2012 Takeharu.Oshida
*/


(function() {
  "use strict";

  var AbstructQueueStack, Queue, Stack, queue_stack, root;

  root = this;

  AbstructQueueStack = (function() {

    function AbstructQueueStack() {}

    AbstructQueueStack.prototype._getArray = function() {
      return [];
    };

    AbstructQueueStack.prototype.isEmpty = function() {
      return this._getArray().length === 0;
    };

    AbstructQueueStack.prototype.empty = function() {
      return this._getArray().splice(0, this.size());
    };

    AbstructQueueStack.prototype.clear = function() {
      return this.empty();
    };

    AbstructQueueStack.prototype.size = function() {
      return this._getArray().length;
    };

    AbstructQueueStack.prototype.getArrayCopy = function() {
      return this._getArray().slice();
    };

    AbstructQueueStack.prototype.toString = function(separator) {
      if (separator == null) {
        separator = ",";
      }
      return this._getArray().join(separator);
    };

    return AbstructQueueStack;

  })();

  Queue = (function() {

    Queue.prototype = new AbstructQueueStack();

    function Queue() {
      var _array;
      _array = [];
      this._getArray = function() {
        return _array;
      };
    }

    Queue.prototype.enqueue = function(data) {
      this._getArray().push(data);
      return this;
    };

    Queue.prototype.dequeue = function() {
      if (this.isEmpty()) {
        return void 0;
      } else {
        return this._getArray().shift();
      }
    };

    Queue.prototype.peek = function() {
      if (this.isEmpty()) {
        return void 0;
      } else {
        return this._getArray()[0];
      }
    };

    return Queue;

  })();

  Stack = (function() {

    Stack.prototype = new AbstructQueueStack();

    function Stack() {
      var _array;
      _array = [];
      this._getArray = function() {
        return _array;
      };
    }

    Stack.prototype.push = function(data) {
      this._getArray().push(data);
      return this;
    };

    Stack.prototype.pop = function() {
      if (this.isEmpty()) {
        return void 0;
      } else {
        return this._getArray().pop();
      }
    };

    Stack.prototype.peek = function() {
      if (this.isEmpty()) {
        return void 0;
      } else {
        return this._getArray()[this.size() - 1];
      }
    };

    return Stack;

  })();

  queue_stack = {
    createQueue: function() {
      return new Queue();
    },
    createStack: function() {
      return new Stack();
    }
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = queue_stack;
    }
    exports.queue_stack = queue_stack;
  } else {
    root["queue_stack"] = queue_stack;
  }

}).call(this);
