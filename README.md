# Transport route

You have a starry sky map. It shows the name of each star, as well as the distance from it to other stars in light seconds. Implement the function `solution`, which should take three arguments: the object in which the keys are the names of the stars, and the values are the distances to the stars (one-way traffic in space), and the names of the starting and ending points of the path -` start` and `finish` respectively. The function should return the shortest distance from the star `start` to the star` finish` and the path to be taken.

**Function signature:**
```js
const solution = function(graph, start, finish)  {
    // your solution
}
```

**Input data example:**

```js
const graph = {
  start: { A: 50, B: 20 },
  A: { C: 40, D: 20 },
  B: { A: 90, D: 90 },
  C: { D: 160, finish: 50 },
  D: { finish: 20 },
  finish: {}
};
const start = 'start';
const finish = 'finish';
```

**Output data example:**

```js
{
    distance: 90,
    path: ['start', 'A', 'D', 'finish']
}
```
