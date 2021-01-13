// Runtime: 80 ms, faster than 64.52% of JavaScript online submissions for Merge Sorted Array.
// Memory Usage: 39 MB, less than 9.37% of JavaScript online submissions for Merge Sorted Array.

const merge= (nums1,m,nums2,n)=> {
	nums1.splice(m, n, ...nums2);
    nums1.sort((a,b)=> a-b);
};