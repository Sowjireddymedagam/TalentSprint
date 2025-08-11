const arr = [1, 2, 3, 4, 3, 2, 5, 6, 7, 8, 9, 4, 3, 2, 5]
const set = new Set();

set.add(10);
set.add(20);
set.add(30);
set.add(10);
set.add(20);
set.add(30);
set.add(40);
set.add(50);
console.log(set.delete(30));
console.log(set.keys());
console.log(set.values());
console.log(set.entries());
console.log(set.size);

const set1 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
const set2 = new Set([1, 2, 5, 7, 3])

console.log(set1.union(set2));
console.log(set1.intersection(set2));
console.log(set1.difference(set2));


const date = new Date()



