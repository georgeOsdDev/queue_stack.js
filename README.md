# queue_stack.js
Some Queue and Stack utility for both server-side and client-side javascript.

## Usage
### Queue

```javascript
var myQueue = queue_stack.createQueue();
myQueue.size();         // 0
myQueue.isEmpty();      // true
myQueue.dequeue();      // undefined

myQueue.enqueue("1st").enqueue("2nd").enqueue("3rd");
myQueue.size();         // 3
myQueue.getArrayCopy(); // ["1st","2nd","3rd"]　Non-destructive
myQueue.toString(",");  // "1st,2nd,3rd"　Non-destructive
myQueue.dequeue();      // "1st"
myQueue.peek();         // "2nd"　Non-destructive
myQueue.dequeue();      // "2nd"

myQueue.clear();
myQueue.size();         // 0
myQueue.isEmpty();      // true
myQueue.dequeue();      // undefined
```

### Stack

```javascript
var myStack = queue_stack.createStack();
myStack.size();         // 0
myStack.isEmpty();      // true
myStack.dequeue();      // undefined

myStack.push("1st").push("2nd").push("3rd");
myStack.size();         // 3
myStack.getArrayCopy(); // ["1st","2nd","3rd"]　Non-destructive
myStack.toString(" ");  // "1st 2nd 3rd"　Non-destructive
myStack.pop();          // "3rd"
myStack.peek();         // "2nd"　Non-destructive
myStack.pop();          // "2nd"

myStack.clear();
myStack.size();         // 0
myStack.isEmpty();      // true
myStack.pop();          // undefined
```


## License

Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT License](http://creativecommons.org/licenses/MIT/)
<br/>Copyright &copy; 2012 [Takeharu.Oshida](http://georgeosddev.github.com)