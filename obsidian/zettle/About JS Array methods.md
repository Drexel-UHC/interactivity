
#JavaScript Arrays methods are used to store and manipulate sets of data. Using these devs can perform different operations such as adding and removing elements, filtering, mapping, reducing and many more. 

1. [[push():]] Adds one or more elements to the end of an array and returns the new lenght of the array.
2. [[pop:]] Removes the last element from an array and returns that element. 
3. [[shift():]] Removes the first element from an array and returns that element. This method also changes the length of the array.
4. [[unshift():]] Adds one or more elements to the beginning of an array and returns the new length of the array.
5.  [[slice():]] Returns a shallow copy of a portion of an array into a new array object.
6. [[splice():]] Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
7. [[forEach():]] Executes a provided function once for each array element.
8. [[map():]] Creates a new array with the results of calling a provided function on every element in the calling array.
9. [[filter():]] Creates a new array with all elements that pass the test implemented by the provided function.
10. [[reduce():]] Executes a provided function for each value of the array (from left-to-right) and returns a single value that is the accumulated result.
11. [[sort():]] Sorts the elements of an array in place and returns the sorted array.
12. [[reverse():]] Reverses the order of the elements in an array in place and returns the reversed array.


>[!tip] [[push():]]

```
let arr = [1, 2, 3];
let length = arr.push(4, 5);
console.log(arr); // [1, 2, 3, 4, 5]
console.log(length); // 5

```

>[!tip] [[pop():]]

```
let arr = [1, 2, 3];
let lastElement = arr.pop();
console.log(arr); // [1, 2]
console.log(lastElement); // 3

```

>[!tip] [[shift():]]

```
let arr = [1, 2, 3];
let firstElement = arr.shift();
console.log(arr); // [2, 3]
console.log(firstElement); // 1

```

>[!tip] [[unshift():]]

```
let arr = [1, 2, 3];
let length = arr.unshift(0, -1);
console.log(arr); // [0, -1, 1, 2, 3]
console.log(length); // 5

```

>[!tip] [[slice():]]

```
let arr = [1, 2, 3, 4, 5];
let subArr = arr.slice(2, 4);
console.log(subArr); // [3, 4]

```

>[!tip] [[splice():]]

```
let arr = [1, 2, 3, 4, 5];
let removed = arr.splice(2, 2, 'a', 'b');
console.log(arr); // [1, 2, 'a', 'b', 5]
console.log(removed); // [3, 4]

```

>[!tip] [[forEach():]]

```
let arr = [1, 2, 3];
arr.forEach(function(element) {
  console.log(element * 2);
});
// Output: 2 4 6

```

>[!tip] [[map():]]

```
let arr = [1, 2, 3];
let doubledArr = arr.map(function(element) {
  return element * 2;
});
console.log(doubledArr); // [2, 4, 6]

```

>[!tip] [[filter():]]

```
let arr = [1, 2, 3, 4, 5];
let filteredArr = arr.filter(function(element) {
  return element % 2 === 0;
});
console.log(filteredArr); // [2, 4]

```

>[!tip] [[reduce():]]

```
let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
console.log(sum); // 15

```

>[!tip] [[sort():]]

```
let arr = [3, 2, 1, 4, 5];
arr.sort();
console.log(arr); // [1, 2, 3, 4, 5]

```

>[!tip] [[reduce():]]

```
let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]

```

