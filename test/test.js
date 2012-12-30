var qs,should,expect;
if (typeof require === "function"){
  qs      = require("../queue_stack"),
  should  = require("chai").should(),
  expect  = require("chai").expect;
} else {
  qs = this.queue_stack;
  should  = chai.should();
  expect  = chai.expect;
}

describe("Queue",function(){
  var queue;
  beforeEach(function() {
    queue = qs.createQueue();
  });
  it("Initialize: queue size will be 0",function(){
    queue.size().should.equal(0);
  });
  it("Initialize: queue will be empty",function(){
    queue.isEmpty().should.equal(true);
  });

  describe("#enqueue",function(){
    var queue = qs.createQueue();
    queue.enqueue(1);
    it("queue size will be 1",function(){
      queue.size().should.equal(1);
    });
    it("queue will not be empty",function(){
      queue.isEmpty().should.equal(false);
    });
  });

  describe("#enqueue chain",function(){
    var queue = qs.createQueue();
    queue.enqueue("A").enqueue("B");
    it("queue size will be 2",function(){
      queue.size().should.equal(2);
    });
  });

  describe("#dequeue",function(){
    var queue = qs.createQueue();
    queue.enqueue("1st").enqueue("2nd").enqueue("3rd");
    it("item will be 1st",function(){
      queue.dequeue().should.equal("1st");
    });
    it("queue size will be 2",function(){
      queue.size().should.equal(2);
    });
    it("item will be 2nd",function(){
      queue.dequeue().should.equal("2nd");
    });
    it("item will be 3rd",function(){
      queue.dequeue().should.equal("3rd");
    });
    it("queue will be empty",function(){
      queue.isEmpty().should.equal(true);
    });
    it("dequeue should return undefined",function(){
      expect(queue.dequeue()).to.equal(undefined);
    });
  });

  describe("#peek",function(){
    var queue = qs.createQueue();
    queue.enqueue("1st").enqueue("2nd").enqueue("3rd");
    it("item will be 1st",function(){
      queue.peek().should.equal("1st");
    });
    it("queue size will be still 3",function(){
      queue.size().should.equal(3);
    });
    it("item will be 1st",function(){
      queue.dequeue().should.equal("1st");
    });
  });

  describe("abstruct methods",function(){
    var queue;
    beforeEach(function() {
      queue = qs.createQueue();
      queue.enqueue("1st").enqueue("2nd").enqueue("3rd");
    });
    describe("#empty",function(){
      beforeEach(function() {
        queue.empty();
      });
      it("queue will be empty",function(){
        queue.isEmpty().should.equal(true);
      });
      it("dequeue should return undefined",function(){
        expect(queue.dequeue()).to.equal(undefined);
      });
    });
    describe("#clear",function(){
      beforeEach(function() {
        queue.clear();
      });
      it("queue will be empty",function(){
        queue.isEmpty().should.equal(true);
      });
      it("dequeue should return undefined",function(){
        expect(queue.dequeue()).to.equal(undefined);
      });
    });
    describe("#getArrayCopy",function(){
      it("return array",function(){
        queue.getArrayCopy().should.be.a("Array");
        queue.getArrayCopy().should.have.length(3);
      });
      it("queue size will be still 3",function(){
        queue.size().should.equal(3);
      });
      it("item will be 1st",function(){
        queue.dequeue().should.equal("1st");
      });
    });
    describe("#toString",function(){
      it("return string with default sepalator",function(){
        queue.toString().should.equal("1st,2nd,3rd");
      });
      it("return string with argument sepalator",function(){
        queue.toString(" ").should.equal("1st 2nd 3rd");
      });
      it("queue size will be still 3",function(){
        queue.size().should.equal(3);
      });
      it("item will be 1st",function(){
        queue.dequeue().should.equal("1st");
      });
    });
  });

  describe("etc",function(){
    var queue1,queue2;
    queue1 = qs.createQueue();
    queue1.enqueue("1st").enqueue("2nd").enqueue("3rd");
    queue2 = qs.createQueue();
    queue2.enqueue(1).enqueue(queue1).enqueue(3).enqueue(4);
    it("dequeue should return undefined",function(){
      queue1.size().should.equal(3);
      queue2.size().should.equal(4);
      queue2.dequeue().should.equal(1);
      var q = queue2.dequeue();
      q.dequeue().should.equal("1st");
    });
  });
});


describe("Stack",function(){
  var stack;
  beforeEach(function() {
    stack = qs.createStack();
  });
  it("Initialize: stack size will be 0",function(){
    stack.size().should.equal(0);
  });
  it("Initialize: stack will be empty",function(){
    stack.isEmpty().should.equal(true);
  });
  
  describe("#push",function(){
    var stack = qs.createStack();
    stack.push(1);
    it("stack size will be 1",function(){
      stack.size().should.equal(1);
    });
    it("stack will not be empty",function(){
      stack.isEmpty().should.equal(false);
    });
  });

  describe("#push chain",function(){
    var stack = qs.createStack();
    stack.push("A").push("B");
    it("stack size will be 2",function(){
      stack.size().should.equal(2);
    });
  });

  describe("#pop",function(){
    var stack = qs.createStack();
    stack.push("1st").push("2nd").push("3rd");
    it("item will be 3rd",function(){
      stack.pop().should.equal("3rd");
    });
    it("stack size will be 2",function(){
      stack.size().should.equal(2);
    });
    it("item will be 2nd",function(){
      stack.pop().should.equal("2nd");
    });
    it("item will be 1st",function(){
      stack.pop().should.equal("1st");
    });
    it("stack will be empty",function(){
      stack.isEmpty().should.equal(true);
    });
    it("pop should return undefined",function(){
      expect(stack.pop()).to.equal(undefined);
    });
  });

  describe("#peek",function(){
    var stack = qs.createStack();
    stack.push("1st").push("2nd").push("3rd");
    it("item will be 3rd",function(){
      stack.peek().should.equal("3rd");
    });
    it("stack size will be still 3",function(){
      stack.size().should.equal(3);
    });
    it("item will be 3rd",function(){
      stack.pop().should.equal("3rd");
    });
  });

  describe("abstruct methods",function(){
    var stack;
    beforeEach(function() {
      stack = qs.createStack();
      stack.push("1st").push("2nd").push("3rd");
    });
    describe("#empty",function(){
      beforeEach(function() {
        stack.empty();
      });
      it("stack will be empty",function(){
        stack.isEmpty().should.equal(true);
      });
      it("pop should return undefined",function(){
        expect(stack.pop()).to.equal(undefined);
      });
    });
    describe("#clear",function(){
      beforeEach(function() {
        stack.clear();
      });
      it("stack will be empty",function(){
        stack.isEmpty().should.equal(true);
      });
      it("pop should return undefined",function(){
        expect(stack.pop()).to.equal(undefined);
      });
    });
    describe("#getArrayCopy",function(){
      it("return array",function(){
        stack.getArrayCopy().should.be.a("Array");
        stack.getArrayCopy().should.have.length(3);
      });
      it("stack size will be still 3",function(){
        stack.size().should.equal(3);
      });
      it("item will be 3rd",function(){
        stack.pop().should.equal("3rd");
      });
    });
    describe("#toString",function(){
      it("return string with default sepalator",function(){
        stack.toString().should.equal("1st,2nd,3rd");
      });
      it("return string with argument sepalator",function(){
        stack.toString(" ").should.equal("1st 2nd 3rd");
      });
      it("stack size will be still 3",function(){
        stack.size().should.equal(3);
      });
      it("item will be 3rd",function(){
        stack.pop().should.equal("3rd");
      });
    });
  });


  describe("etc",function(){
    var stack1,stack2;
    stack1 = qs.createStack();
    stack1.push("1st").push("2nd").push("3rd");
    stack2 = qs.createStack();
    stack2.push(1).push(stack1).push(3).push(4);
    it("pop should return undefined",function(){
      stack1.size().should.equal(3);
      stack2.size().should.equal(4);
      stack2.pop().should.equal(4);
      stack2.pop().should.equal(3);
      var q = stack2.pop();
      q.pop().should.equal("3rd");
    });
  });
});