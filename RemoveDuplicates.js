// Remove Duplicates from Sorted Array
// Easy
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
// Custom Judge:
// The judge will test your solution with the following code:
// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length
 
// int k = removeDuplicates(nums); // Calls your implementation
 
// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.
 
// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).


// Let’s write down the steps to solve this problem:
// * 		Return 0 if the given array is empty.
// * 		Declare two pointers, i and j, and set them to 0 and 1, respectively.
// * 		Use a while loop to check if the number with index j is equal to the number with index i.
// * 		If not, increment i by 1 and copy the value of the number with index j to the element at the index i and then increment j by 1.
// * 		If they are equal, increment j to skip the duplicate.
// * 		After the loop finishes, return the length of the unique numbers, which equals to i + 1.





var removeDuplicates = function(nums) {
  
  if (nums.length == 0) return 0;
  // console.log(nums.length)
  let i = 0;
  
  var list = new Array();
  
  for (let j = 1; j < nums.length+1; j++){
      if (nums[j] !== nums[i]) {
        i++;
        nums [i] = nums[j];
        list.push(i)
      }
  }
  return list
}

console.log(removeDuplicates([1,2,2,3,4,5,5,5,6]));

