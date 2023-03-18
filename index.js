// =================   1   ================
// //BROUTE FORCE APPROACH
// function LastWord(s) {
//     // Trim any trailing spaces from the input string
//     s = s.trim();
    
//     // Find the position of the last space character
//     let lastSpace = s.lastIndexOf(' ');
    
//     // If there are no spaces, return the length of the input string
//     if (lastSpace === -1) {
//       return s.length;
//     }
    
//     // Extract the last word and return its length
//     return s.substring(lastSpace + 1).length;
//   }
//   let g="my name is najma    ";
//   let b=LastWord(g)
//   console.log(b);

// //   Tc:o👎
// //   Sc:O👎
  


// OPTIMUM SOLUTION

// function LastWord(s) {
//     let length = 0;
//     let end = s.length - 1;
    
//     // Ignore any trailing spaces
//     while (end >= 0 && s[end] === ' ') {
//       end--;
//     }
    
//     // Count the length of the last word
//     while (end >= 0 && s[end] !== ' ') {
//       length++;
//       end--;
//     }
    
//     return length;
//   }
//   let g="my name is najma    ";
//   let b=LastWord(g)
//   console.log(b);

//   Tc:o👎
//   Sc:O(1)



 

// =====================    3   ========================
// function generate(numRows) {
//     const result = [];
  
//     for (let i = 0; i < numRows; i++) {
//       const row = [];
  
//       // Fill the first and last element of each row with 1
//       row[0] = 1;
//       row[i] = 1;
  
//       // Fill the rest of the row with the sum of the two elements above it
//       for (let j = 1; j < i; j++) {
//         row[j] = result[i - 1][j - 1] + result[i - 1][j];
//       }
  
//       result.push(row);
//     }
  
//     return result;
//   }
//   const numRows = 5;
// const result = generate(numRows);

// console.log(result);

// // Tc:o(n^2)
// // Sc:O👎


// ===========    4    ==================
// function majorityEle(nums) {
//   let count1 = 0, count2 = 0;
//   let candidate1 = null, candidate2 = null;
  
//   for (let num of nums) {
//       if (num === candidate1) {
//           count1++;
//       } else if (num === candidate2) {
//           count2++;
//       } else if (count1 === 0) {
//           candidate1 = num;
//           count1 = 1;
//       } else if (count2 === 0) {
//           candidate2 = num;
//           count2 = 1;
//       } else {
//           count1--;
//           count2--;
//       }
//   }
  
//   const result = [];
//   count1 = 0;
//   count2 = 0;
  
//   for (let num of nums) {
//       if (num === candidate1) {
//           count1++;
//       } else if (num === candidate2) {
//           count2++;
//       }
//   }
  
//   if (count1 > nums.length / 3) {
//       result.push(candidate1);
//   }
  
//   if (count2 > nums.length / 3) {
//       result.push(candidate2);
//   }
  
//   return result;
// }

// const nums1 = [3, 2, 3];
// const nums2 = [1];
// const nums3 = [1, 2];

// console.log(majorityEle(nums1)); // Output: [3]
// console.log(majorityEle(nums2)); // Output: [1]
// console.log(majorityEle(nums3)); // Output: [1, 2]


// ----------------------  5------------------------------------

// function Palindrome(s) {
//   let i = 0, j = s.length - 1;
  
//   while (j >= 0) {
//       if (s[i] === s[j]) {
//           i++;
//       }
//       j--;
//   }
  
//   if (i === s.length) {
//       return s;
//   }
  
//   const suffix = s.substring(i).split('').reverse().join('');
  
//   return suffix + s;
// }

// console.log(Palindrome("aacecaaa")); // Expected output: "aaacecaaa"
// console.log(Palindrome("abcd")); // Expected output: "dcbabcd"