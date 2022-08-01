const twoSum = (array, goal) => {
    let indexes = [];

    for(let i = 0; i < array.length; i++){
       for(let j = i + 1; j < array.length; j++){
          if (array[i] + array[j] === goal) {
            indexes.push(i);
            indexes.push(j);
          }
       }
    }
    return indexes;
}

console.log(twoSum([2,3,4,5,1,2], 8));






var twoSums = function(nums, target) {
    let map = new Map;
    for (var i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i);
    }
}

console.log(twoSums([2,3,4,5,1,2], 8));
