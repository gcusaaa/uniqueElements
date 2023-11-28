// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["1", "2", "3", "4", "5", "6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]



function findUnique(array1, array2) {
    let arrayscombine = [...array1, ...array2];

    let uniqueElements = arrayscombine.filter((value, index, self) => {
    return self.indexOf(value) == index;
    });

    return uniqueElements.map(String).sort();
}

console.log(findUnique([1, 2, 3], [100, 2, 1, 10]));
console.log(findUnique([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
console.log(findUnique([1, 2, 3], [100, 2, 1, 10]));