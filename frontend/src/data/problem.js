export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
      cpp: `class Solution {
public:
    std::vector<int> twoSum(std::vector<int>& nums, int target) {
        // Write your solution here
    }
};`,
      c: `/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    // Write your solution here
    *returnSize = 0;
    return NULL;
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
      cpp: "[0, 1]\n[1, 2]\n[0, 1]",
      c: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o", "l", "l", "e", "h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h", "a", "n", "n", "a", "H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
      cpp: `class Solution {
public:
    void reverseString(std::vector<char>& s) {
        // Write your solution here
    }
};`,
      c: `void reverseString(char* s, int sSize) {
    // Write your solution here
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
      cpp: "[\"o\",\"l\",\"l\",\"e\",\"h\"]\n[\"h\",\"a\",\"n\",\"n\",\"a\",\"H\"]",
      c: "[\"o\",\"l\",\"l\",\"e\",\"h\"]\n[\"h\",\"a\",\"n\",\"n\",\"a\",\"H\"]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
      cpp: `class Solution {
public:
    bool isPalindrome(std::string s) {
        // Write your solution here
    }
};`,
      c: `bool isPalindrome(char * s) {
    // Write your solution here
    return false;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
      cpp: "true\nfalse\ntrue",
      c: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
      cpp: `class Solution {
public:
    int maxSubArray(std::vector<int>& nums) {
        // Write your solution here
    }
};`,
      c: `int maxSubArray(int* nums, int numsSize) {
    // Write your solution here
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
      cpp: "6\n1\n23",
      c: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
      cpp: `class Solution {
public:
    int maxArea(std::vector<int>& height) {
        // Write your solution here
    }
};`,
      c: `int maxArea(int* height, int heightSize) {
    // Write your solution here
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
      cpp: "49\n1",
      c: "49\n1",
    },
  },


  "merge-two-sorted-lists": {
  id: "merge-two-sorted-lists",
  title: "Merge Two Sorted Lists",
  difficulty: "Easy",
  category: "Linked List",
  description: {
    text: "Merge two sorted linked lists and return it as a sorted list.",
    notes: [
      "The list should be made by splicing together the nodes of the first two lists.",
    ],
  },
  examples: [
    {
      input: "l1 = [1,2,4], l2 = [1,3,4]",
      output: "[1,1,2,3,4,4]",
    },
    {
      input: "l1 = [], l2 = []",
      output: "[]",
    },
    {
      input: "l1 = [], l2 = [0]",
      output: "[0]",
    },
  ],
  constraints: [
    "The number of nodes in both lists is in the range [0, 50]",
    "-100 ≤ Node.val ≤ 100",
    "Both l1 and l2 are sorted in non-decreasing order",
  ],
  starterCode: {
    javascript: `function mergeTwoLists(l1, l2) {
  // Write your code
}

// Expected output format: array after merge`,
    python: `def mergeTwoLists(l1, l2):
    # Write your code
    pass`,
    java: `class Solution {
    public static ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        // Write your code
        return null;
    }
}`,
    cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 * int val;
 * ListNode *next;
 * ListNode() : val(0), next(nullptr) {}
 * ListNode(int x) : val(x), next(nullptr) {}
 * ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        // Write your code
        return nullptr;
    }
};`,
    c: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 * int val;
 * struct ListNode *next;
 * };
 */
struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2) {
    // Write your code
    return NULL;
}`,
    },
  expectedOutput: {
    javascript: "[1,1,2,3,4,4]",
    python: "[1,1,2,3,4,4]",
    java: "[1,1,2,3,4,4]",
    cpp: "[1,1,2,3,4,4]",
    c: "[1,1,2,3,4,4]",
  }
},

"best-time-to-buy-sell-stock": {
  id: "best-time-to-buy-sell-stock",
  title: "Best Time to Buy and Sell Stock",
  difficulty: "Easy",
  category: "Array • Greedy",
  description: {
    text: "Given an array prices where prices[i] is the price of a stock on the ith day, return the maximum profit.",
    notes: [
      "You must buy before selling.",
      "If no profit can be achieved, return 0."
    ]
  },
  examples: [
    {
      input: "prices = [7,1,5,3,6,4]",
      output: "5",
    },
    {
      input: "prices = [7,6,4,3,1]",
      output: "0",
    }
  ],
  constraints: ["1 ≤ prices.length ≤ 10⁵", "0 ≤ prices[i] ≤ 10⁴"],
  starterCode: {
    javascript: `function maxProfit(prices) {
  // Write your code
}`,
    python: `def maxProfit(prices):
    # Write your code
    pass`,
    java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your code
        return 0;
    }
}`,
    cpp: `class Solution {
public:
    int maxProfit(std::vector<int>& prices) {
        // Write your code
        return 0;
    }
};`,
    c: `int maxProfit(int* prices, int pricesSize) {
    // Write your code
    return 0;
}`,
    },
  expectedOutput: {
    javascript: "5\n0",
    python: "5\n0",
    java: "5\n0",
    cpp: "5\n0",
    c: "5\n0",
  }
},

"climbing-stairs": {
  id: "climbing-stairs",
  title: "Climbing Stairs",
  difficulty: "Easy",
  category: "Dynamic Programming",
  description: {
    text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    notes: ["Return the number of distinct ways to climb to the top."]
  },
  examples: [
    { input: "n = 2", output: "2" },
    { input: "n = 3", output: "3" },
  ],
  constraints: ["1 ≤ n ≤ 45"],
  starterCode: {
    javascript: `function climbStairs(n) {
  // Write code
}`,
    python: `def climbStairs(n):
    # Write code
    pass`,
    java: `class Solution {
    public static int climbStairs(int n) {
        // Write code
        return 0;
    }
}`,
    cpp: `class Solution {
public:
    int climbStairs(int n) {
        // Write code
        return 0;
    }
};`,
    c: `int climbStairs(int n) {
    // Write code
    return 0;
}`,
    },
  expectedOutput: {
    javascript: "2\n3",
    python: "2\n3",
    java: "2\n3",
    cpp: "2\n3",
    c: "2\n3",
  }
},

"longest-substring-without-repeat": {
  id: "longest-substring-without-repeat",
  title: "Longest Substring Without Repeating Characters",
  difficulty: "Medium",
  category: "String • Sliding Window",
  description: {
    text: "Given a string s, find the length of the longest substring without repeating characters.",
    notes: []
  },
  examples: [
    { input: 's = "abcabcbb"', output: "3" },
    { input: 's = "bbbbb"', output: "1" },
    { input: 's = "pwwkew"', output: "3" }
  ],
  constraints: ["0 ≤ s.length ≤ 5 * 10⁴", "s consists of English letters, digits, symbols, and spaces"],
  starterCode: {
    javascript: `function lengthOfLongestSubstring(s) {
  // Write code
}`,
    python: `def lengthOfLongestSubstring(s):
    # Write code
    pass`,
    java: `class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write code
        return 0;
    }
}`,
    cpp: `class Solution {
public:
    int lengthOfLongestSubstring(std::string s) {
        // Write code
        return 0;
    }
};`,
    c: `int lengthOfLongestSubstring(char * s) {
    // Write code
    return 0;
}`,
    },
  expectedOutput: {
    javascript: "3\n1\n3",
    python: "3\n1\n3",
    java: "3\n1\n3",
    cpp: "3\n1\n3",
    c: "3\n1\n3",
  }
},

"min-stack": {
  id: "min-stack",
  title: "Min Stack",
  difficulty: "Medium",
  category: "Stack • Design",
  description: {
    text: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
    notes: [
      "Implement the MinStack class.",
      "All operations should run in O(1) time."
    ]
  },
  examples: [
    {
      input: "MinStack push  -2, 0, -3 → getMin() → pop() → top() → getMin()",
      output: "-3, 0, -2"
    }
  ],
  constraints: ["-2³¹ ≤ val ≤ 2³¹ - 1"],
  starterCode: {
    javascript: `class MinStack {
  constructor() {
    // Write code
  }
  push(val) {}
  pop() {}
  top() {}
  getMin() {}
}`,
    python: `class MinStack:
    def __init__(self):
        pass
    def push(self, val):
        pass
    def pop(self):
        pass
    def top(self):
        pass
    def getMin(self, val):
        pass`,
    java: `class MinStack {
    public MinStack() {

    }
    public void push(int val) {}
    public void pop() {}
    public int top() { return 0; }
    public int getMin() { return 0; }
}`,
    cpp: `class MinStack {
public:
    MinStack() {
        // Write code
    }
    
    void push(int val) {
        // Write code
    }
    
    void pop() {
        // Write code
    }
    
    int top() {
        // Write code
        return 0;
    }
    
    int getMin() {
        // Write code
        return 0;
    }
};`,
    c: `typedef struct {
    // Write code
} MinStack;


MinStack* minStackCreate() {
    // Write code
    return NULL;
}

void minStackPush(MinStack* obj, int val) {
    // Write code
}

void minStackPop(MinStack* obj) {
    // Write code
}

int minStackTop(MinStack* obj) {
    // Write code
    return 0;
}

int minStackGetMin(MinStack* obj) {
    // Write code
    return 0;
}

void minStackFree(MinStack* obj) {
    // Write code
}`,
    },
  expectedOutput: {
    javascript: "-3\n0\n-2",
    python: "-3\n0\n-2",
    java: "-3\n0\n-2",
    cpp: "-3\n0\n-2",
    c: "-3\n0\n-2",
  }
},

  "reverse-linked-list": {
    id: "reverse-linked-list",
    title: "Reverse Linked List",
    difficulty: "Easy",
    category: "Linked List",
    description: {
      text: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
      notes: ["You can solve this problem iteratively or recursively."],
    },
    examples: [
      { input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]" },
      { input: "head = [1,2]", output: "[2,1]" },
    ],
    constraints: ["The number of nodes in the range [0, 5000]."],
    starterCode: {
      javascript: `function reverseList(head) {
  // Write code
}`,
      python: `def reverseList(head):
    # Write code
    pass`,
      java: `class Solution {
    public static ListNode reverseList(ListNode head) {
        // Write code
        return null;
    }
}`,
      cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 * int val;
 * ListNode *next;
 * // ... constructors ...
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        // Write code
        return nullptr;
    }
};`,
      c: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 * int val;
 * struct ListNode *next;
 * };
 */
struct ListNode* reverseList(struct ListNode* head) {
    // Write code
    return NULL;
}`,
    },
    expectedOutput: {
      javascript: "[5,4,3,2,1]\n[2,1]",
      python: "[5,4,3,2,1]\n[2,1]",
      java: "[5,4,3,2,1]\n[2,1]",
      cpp: "[5,4,3,2,1]\n[2,1]",
      c: "[5,4,3,2,1]\n[2,1]",
    }
  },

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "String • Stack",
    description: {
      text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      notes: ["A valid string must have matching open and close brackets in the correct order."],
    },
    examples: [
      { input: 's = "()[]{}", output: "true"' },
      { input: 's = "([)]", output: "false"' },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴"],
    starterCode: {
      javascript: `function isValid(s) {
  // Write code
}`,
      python: `def isValid(s):
    # Write code
    pass`,
      java: `class Solution {
    public static boolean isValid(String s) {
        // Write code
        return false;
    }
}`,
      cpp: `class Solution {
public:
    bool isValid(std::string s) {
        // Write code
        return false;
    }
};`,
      c: `bool isValid(char * s) {
    // Write code
    return false;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
      cpp: "true\nfalse",
      c: "true\nfalse",
    }
  },

  "binary-search": {
    id: "binary-search",
    title: "Binary Search",
    difficulty: "Easy",
    category: "Array • Binary Search",
    description: {
      text: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.",
      notes: ["You must write an algorithm with O(log n) runtime complexity."],
    },
    examples: [
      { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" },
      { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴"],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write code
}`,
      python: `def search(nums, target):
    # Write code
    pass`,
      java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write code
        return -1;
    }
}`,
      cpp: `class Solution {
public:
    int search(std::vector<int>& nums, int target) {
        // Write code
        return -1;
    }
};`,
      c: `int search(int* nums, int numsSize, int target) {
    // Write code
    return -1;
}`,
    },
    expectedOutput: {
      javascript: "4\n-1",
      python: "4\n-1",
      java: "4\n-1",
      cpp: "4\n-1",
      c: "4\n-1",
    }
  },

  "group-anagrams": {
    id: "group-anagrams",
    title: "Group Anagrams",
    difficulty: "Medium",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
      notes: ["An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once."],
    },
    examples: [
      { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]' },
      { input: 'strs = ["a"]', output: '[["a"]]' },
    ],
    constraints: ["1 ≤ strs.length ≤ 10⁴"],
    starterCode: {
      javascript: `function groupAnagrams(strs) {
  // Write code
}`,
      python: `def groupAnagrams(strs):
    # Write code
    pass`,
      java: `import java.util.*;

class Solution {
    public static List<List<String>> groupAnagrams(String[] strs) {
        // Write code
        return new ArrayList<>();
    }
}`,
      cpp: `class Solution {
public:
    std::vector<std::vector<std::string>> groupAnagrams(std::vector<std::string>& strs) {
        // Write code
        return {};
    }
};`,
      c: `/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: The returned array must be malloced, assume caller calls free().
 */
char*** groupAnagrams(char** strs, int strsSize, int* returnSize, int** returnColumnSizes) {
    // Write code
    *returnSize = 0;
    *returnColumnSizes = NULL;
    return NULL;
}`,
    },
    expectedOutput: {
      javascript: '[["bat"],["nat","tan"],["ate","eat","tea"]]\n[["a"]]',
      python: '[["bat"],["nat","tan"],["ate","eat","tea"]]\n[["a"]]',
      java: '[["bat"],["nat","tan"],["ate","eat","tea"]]\n[["a"]]',
      cpp: '[["bat"],["nat","tan"],["ate","eat","tea"]]\n[["a"]]',
      c: '[["bat"],["nat","tan"],["ate","eat","tea"]]\n[["a"]]',
    }
  },

  "invert-binary-tree": {
    id: "invert-binary-tree",
    title: "Invert Binary Tree",
    difficulty: "Easy",
    category: "Tree • Depth-First Search",
    description: {
      text: "Given the root of a binary tree, invert the tree, and return its root.",
      notes: ["Inverting means swapping the left and right children for every node."],
    },
    examples: [
      { input: "root = [4,2,7,1,3,6,9]", output: "[4,7,2,9,6,3,1]" },
      { input: "root = [2,1,3]", output: "[2,3,1]" },
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 100]."],
    starterCode: {
      javascript: `function invertTree(root) {
  // Write code
}`,
      python: `def invertTree(root):
    # Write code
    pass`,
      java: `class Solution {
    public static TreeNode invertTree(TreeNode root) {
        // Write code
        return null;
    }
}`,
      cpp: `/**
 * Definition for a binary tree node.
 * struct TreeNode {
 * int val;
 * TreeNode *left;
 * TreeNode *right;
 * // ... constructors ...
 * };
 */
class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        // Write code
        return nullptr;
    }
};`,
      c: `/**
 * Definition for a binary tree node.
 * struct TreeNode {
 * int val;
 * struct TreeNode *left;
 * struct TreeNode *right;
 * };
 */
struct TreeNode* invertTree(struct TreeNode* root) {
    // Write code
    return NULL;
}`,
    },
    expectedOutput: {
      javascript: "[4,7,2,9,6,3,1]\n[2,3,1]",
      python: "[4,7,2,9,6,3,1]\n[2,3,1]",
      java: "[4,7,2,9,6,3,1]\n[2,3,1]",
      cpp: "[4,7,2,9,6,3,1]\n[2,3,1]",
      c: "[4,7,2,9,6,3,1]\n[2,3,1]",
    }
  },

  "middle-of-the-linked-list": {
    id: "middle-of-the-linked-list",
    title: "Middle of the Linked List",
    difficulty: "Easy",
    category: "Linked List • Two Pointers",
    description: {
      text: "Given the head of a singly linked list, return the middle node of the linked list.",
      notes: ["If there are two middle nodes, return the second middle node."],
    },
    examples: [
      { input: "head = [1,2,3,4,5]", output: "[3,4,5]" },
      { input: "head = [1,2,3,4,5,6]", output: "[4,5,6]" },
    ],
    constraints: ["The number of nodes in the list is in the range [1, 100]."],
    starterCode: {
      javascript: `function middleNode(head) {
  // Write code
}`,
      python: `def middleNode(head):
    # Write code
    pass`,
      java: `class Solution {
    public static ListNode middleNode(ListNode head) {
        // Write code
        return null;
    }
}`,
      cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 * int val;
 * // ... constructors ...
 * };
 */
class Solution {
public:
    ListNode* middleNode(ListNode* head) {
        // Write code
        return nullptr;
    }
};`,
      c: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 * int val;
 * struct ListNode *next;
 * };
 */
struct ListNode* middleNode(struct ListNode* head) {
    // Write code
    return NULL;
}`,
    },
    expectedOutput: {
      javascript: "[3,4,5]\n[4,5,6]",
      python: "[3,4,5]\n[4,5,6]",
      java: "[3,4,5]\n[4,5,6]",
      cpp: "[3,4,5]\n[4,5,6]",
      c: "[3,4,5]\n[4,5,6]",
    }
  },

  "contains-duplicate": {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
      notes: ["Using a set or a hash map can make the solution efficient."],
    },
    examples: [
      { input: "nums = [1,2,3,1]", output: "true" },
      { input: "nums = [1,2,3,4]", output: "false" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵"],
    starterCode: {
      javascript: `function containsDuplicate(nums) {
  // Write code
}`,
      python: `def containsDuplicate(nums):
    # Write code
    pass`,
      java: `import java.util.*;

class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write code
        return false;
    }
}`,
      cpp: `class Solution {
public:
    bool containsDuplicate(std::vector<int>& nums) {
        // Write code
        return false;
    }
};`,
      c: `bool containsDuplicate(int* nums, int numsSize) {
    // Write code
    return false;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
      cpp: "true\nfalse",
      c: "true\nfalse",
    }
  },

  "find-the-difference": {
    id: "find-the-difference",
    title: "Find the Difference",
    difficulty: "Easy",
    category: "String • Bit Manipulation",
    description: {
      text: "You are given two strings s and t. String t is generated by randomly shuffling string s and then adding one more letter at a random position. Return the letter that was added to t.",
      notes: ["You can use a character frequency map or the XOR operator."],
    },
    examples: [
      { input: 's = "abcd", t = "abcde"', output: "e" },
      { input: 's = "", t = "y"', output: "y" },
    ],
    constraints: ["0 ≤ s.length ≤ 1000"],
    starterCode: {
      javascript: `function findTheDifference(s, t) {
  // Write code
}`,
      python: `def findTheDifference(s, t):
    # Write code
    pass`,
      java: `class Solution {
    public static char findTheDifference(String s, String t) {
        // Write code
        return ' ';
    }
}`,
      cpp: `class Solution {
public:
    char findTheDifference(std::string s, std::string t) {
        // Write code
        return ' ';
    }
};`,
      c: `char findTheDifference(char * s, char * t) {
    // Write code
    return ' ';
}`,
    },
    expectedOutput: {
      javascript: "e\ny",
      python: "e\ny",
      java: "e\ny",
      cpp: "e\ny",
      c: "e\ny",
    }
  },

  "palindrome-linked-list": {
    id: "palindrome-linked-list",
    title: "Palindrome Linked List",
    difficulty: "Easy",
    category: "Linked List • Two Pointers",
    description: {
      text: "Given the head of a singly linked list, return true if it is a palindrome.",
      notes: ["A palindrome reads the same forwards and backwards."],
    },
    examples: [
      { input: "head = [1,2,2,1]", output: "true" },
      { input: "head = [1,2]", output: "false" },
    ],
    constraints: ["The number of nodes in the list is in the range [1, 10⁵]."],
    starterCode: {
      javascript: `function isPalindrome(head) {
  // Write code
}`,
      python: `def isPalindrome(head):
    # Write code
    pass`,
      java: `class Solution {
    public static boolean isPalindrome(ListNode head) {
        // Write code
        return false;
    }
}`,
      cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 * int val;
 * // ... constructors ...
 * };
 */
class Solution {
public:
    bool isPalindrome(ListNode* head) {
        // Write code
        return false;
    }
};`,
      c: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 * int val;
 * struct ListNode *next;
 * };
 */
bool isPalindrome(struct ListNode* head) {
    // Write code
    return false;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
      cpp: "true\nfalse",
      c: "true\nfalse",
    }
  },

  "majority-element": {
    id: "majority-element",
    title: "Majority Element",
    difficulty: "Easy",
    category: "Array • Counting",
    description: {
      text: "Given an array nums of size n, return the **majority element**.",
      notes: ["The majority element is the element that appears **more than** $\lfloor n/2 \rfloor$ times. You may assume that the majority element always exists in the array."],
    },
    examples: [
      { input: "nums = [3,2,3]", output: "3" },
      { input: "nums = [2,2,1,1,1,2,2]", output: "2" },
    ],
    constraints: ["$n == \text{nums.length}$", "$1 \le n \le 5 \cdot 10^4$"],
    starterCode: {
      javascript: `function majorityElement(nums) {
  // Write code
}`,
      python: `def majorityElement(nums):
    # Write code
    pass`,
      java: `class Solution {
    public static int majorityElement(int[] nums) {
        // Write code
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int majorityElement(std::vector<int>& nums) {
        // Write code
        return 0;
    }
};`,
      c: `int majorityElement(int* nums, int numsSize) {
    // Write code
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3\n2",
      python: "3\n2",
      java: "3\n2",
      cpp: "3\n2",
      c: "3\n2",
    }
  },

  "add-two-numbers": {
    id: "add-two-numbers",
    title: "Add Two Numbers",
    difficulty: "Medium",
    category: "Linked List • Math",
    description: {
      text: "You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
      notes: ["You may assume the two numbers do not contain any leading zero, except the number 0 itself."],
    },
    examples: [
      { input: "l1 = [2,4,3], l2 = [5,6,4]", output: "[7,0,8]", explanation: "(342 + 465 = 807)" },
      { input: "l1 = [0], l2 = [0]", output: "[0]" },
    ],
    constraints: ["The number of nodes in each linked list is in the range [1, 100]."],
    starterCode: {
      javascript: `function addTwoNumbers(l1, l2) {
  // Write code
}`,
      python: `def addTwoNumbers(l1, l2):
    # Write code
    pass`,
      java: `class Solution {
    public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        // Write code
        return null;
    }
}`,
      cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 * int val;
 * // ... constructors ...
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        // Write code
        return nullptr;
    }
};`,
      c: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 * int val;
 * struct ListNode *next;
 * };
 */
struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    // Write code
    return NULL;
}`,
    },
  	expectedOutput: {
      javascript: "[7,0,8]\n[0]",
      python: "[7,0,8]\n[0]",
      java: "[7,0,8]\n[0]",
      cpp: "[7,0,8]\n[0]",
      c: "[7,0,8]\n[0]",
    }
  },

  "search-in-rotated-sorted-array": {
    id: "search-in-rotated-sorted-array",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Array • Binary Search",
    description: {
      text: "There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k. Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
      notes: ["You must write an algorithm with $O(\log n)$ runtime complexity."],
    },
    examples: [
      { input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4" },
      { input: "nums = [4,5,6,7,0,1,2], target = 3", output: "-1" },
    ],
    constraints: ["$1 \le \text{nums.length} \le 5000$"],
    starterCode: {
      javascript: `function searchRotated(nums, target) {
  // Write code
}`,
      python: `def searchRotated(nums, target):
    # Write code
    pass`,
      java: `class Solution {
    public static int searchRotated(int[] nums, int target) {
        // Write code
        return -1;
    }
}`,
      cpp: `class Solution {
public:
    int searchRotated(std::vector<int>& nums, int target) {
        // Write code
        return -1;
    }
};`,
      c: `int searchRotated(int* nums, int numsSize, int target) {
    // Write code
    return -1;
}`,
    },
    expectedOutput: {
      javascript: "4\n-1",
      python: "4\n-1",
      java: "4\n-1",
      cpp: "4\n-1",
      c: "4\n-1",
    }
  },

  "word-break": {
    id: "word-break",
    title: "Word Break",
    difficulty: "Medium",
    category: "Dynamic Programming • Hash Set",
    description: {
      text: "Given a string $s$ and a dictionary of strings `wordDict`, return `true` if $s$ can be segmented into a space-separated sequence of one or more dictionary words. The same word in the dictionary may be reused multiple times in the segmentation.",
      notes: [],
    },
    examples: [
      { input: 's = "leetcode", wordDict = ["leet","code"]', output: "true" },
      { input: 's = "applepenapple", wordDict = ["apple","pen"]', output: "true" },
    ],
    constraints: ["$1 \le s.\text{length} \le 300$"],
    starterCode: {
      javascript: `function wordBreak(s, wordDict) {
  // Write code
}`,
      python: `def wordBreak(s, wordDict):
    # Write code
    pass`,
      java: `import java.util.*;

class Solution {
    public static boolean wordBreak(String s, List<String> wordDict) {
        // Write code
        return false;
    }
}`,
      cpp: `class Solution {
public:
    bool wordBreak(std::string s, std::vector<std::string>& wordDict) {
        // Write code
        return false;
    }
};`,
      c: `bool wordBreak(char * s, char ** wordDict, int wordDictSize) {
    // Write code
    return false;
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue",
      python: "True\nTrue",
      java: "true\ntrue",
      cpp: "true\ntrue",
      c: "true\ntrue",
    }
  },

  "rotate-image": {
    id: "rotate-image",
    title: "Rotate Image",
    difficulty: "Medium",
    category: "Array • Matrix",
    description: {
      text: "You are given an $n \times n$ 2D matrix representing an image, rotate the image by **90 degrees (clockwise)**.",
      notes: ["You have to rotate the image **in-place**, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix for the rotation."],
    },
    examples: [
      { input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[[7,4,1],[8,5,2],[9,6,3]]" },
      { input: "matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]", output: "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]" },
    ],
    constraints: ["$1 \le n \le 20$"],
    starterCode: {
      javascript: `function rotate(matrix) {
  // Write code (modifies matrix in place)
}`,
      python: `def rotate(matrix):
    # Write code (modifies matrix in place)
    pass`,
      java: `class Solution {
    public static void rotate(int[][] matrix) {
        // Write code (modifies matrix in place)
    }
}`,
      cpp: `class Solution {
public:
    void rotate(std::vector<std::vector<int>>& matrix) {
        // Write code (modifies matrix in place)
    }
};`,
      c: `void rotate(int** matrix, int matrixSize, int* matrixColSize) {
    // Write code (modifies matrix in place)
}`,
    },
  	expectedOutput: {
      javascript: "[[7,4,1],[8,5,2],[9,6,3]]\n[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]",
      python: "[[7,4,1],[8,5,2],[9,6,3]]\n[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]",
      java: "[[7,4,1],[8,5,2],[9,6,3]]\n[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]",
      cpp: "[[7,4,1],[8,5,2],[9,6,3]]\n[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]",
      c: "[[7,4,1],[8,5,2],[9,6,3]]\n[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]",
    }
  },

  "unique-paths": {
    id: "unique-paths",
    title: "Unique Paths",
    difficulty: "Medium",
    category: "Dynamic Programming • Math",
    description: {
  	  text: "A robot is located at the top-left corner of an $m \times n$ grid. The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid. Return the number of possible unique paths that the robot can take to reach the bottom-right corner.",
  	  notes: [],
  	},
  	examples: [
  	  { input: "m = 3, n = 7", output: "28" },
  	  { input: "m = 3, n = 2", output: "3" },
  	],
  	constraints: ["$1 \le m, n \le 100$"],
  	starterCode: {
  	  javascript: `function uniquePaths(m, n) {
  // Write code
}`,
  	  python: `def uniquePaths(m, n):
    # Write code
    pass`,
  	  java: `class Solution {
  	  public static int uniquePaths(int m, int n) {
  	     // Write code
  	     return 0;
  	  }
}`,
  	  cpp: `class Solution {
public:
    int uniquePaths(int m, int n) {
        // Write code
        return 0;
    }
};`,
  	  c: `int uniquePaths(int m, int n) {
    // Write code
    return 0;
}`,
  	},
  	expectedOutput: {
  	  javascript: "28\n3",
  	  python: "28\n3",
  	  java: "28\n3",
  	  cpp: "28\n3",
  	  c: "28\n3",
  	}
  },

  "merge-k-sorted-lists": {
    id: "merge-k-sorted-lists",
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    category: "Linked List • Divide and Conquer • Heap (Priority Queue)",
    description: {
      text: "You are given an array of $k$ linked-lists `lists`, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
      notes: [],
    },
    examples: [
      { input: "lists = [[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]" },
      { input: "lists = []", output: "[]" },
    ],
    constraints: ["$k$ is the length of the lists array. $0 \le k \le 10^4$"],
    starterCode: {
      javascript: `function mergeKLists(lists) {
  // Write code
}`,
      python: `def mergeKLists(lists):
    # Write code
    pass`,
      java: `class Solution {
  	  public static ListNode mergeKLists(ListNode[] lists) {
  	     // Write code
  	     return null;
  	  }
}`,
  	  cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 * int val;
 * // ... constructors ...
 * };
 */
class Solution {
public:
    ListNode* mergeKLists(std::vector<ListNode*>& lists) {
        // Write code
        return nullptr;
    }
};`,
  	  c: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 * int val;
 * struct ListNode *next;
 * };
 */
struct ListNode* mergeKLists(struct ListNode** lists, int listsSize) {
    // Write code
    return NULL;
}`,
    },
  	expectedOutput: {
  	  javascript: "[1,1,2,3,4,4,5,6]\n[]",
  	  python: "[1,1,2,3,4,4,5,6]\n[]",
  	  java: "[1,1,2,3,4,4,5,6]\n[]",
  	  cpp: "[1,1,2,3,4,4,5,6]\n[]",
  	  c: "[1,1,2,3,4,4,5,6]\n[]",
  	}
  },

  "median-of-two-sorted-arrays": {
    id: "median-of-two-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    category: "Array • Binary Search",
    description: {
      text: "Given two sorted arrays `nums1` and `nums2` of size $m$ and $n$ respectively, return the median of the two sorted arrays.",
      notes: ["The overall run time complexity should be $O(\log(m+n))$."],
    },
    examples: [
      { input: "nums1 = [1,3], nums2 = [2]", output: "2.00000" },
      { input: "nums1 = [1,2], nums2 = [3,4]", output: "2.50000" },
    ],
  	constraints: ["$0 \le m, n \le 1000$"],
  	starterCode: {
  	  javascript: `function findMedianSortedArrays(nums1, nums2) {
  // Write code
}`,
  	  python: `def findMedianSortedArrays(nums1, nums2):
  	  # Write code
  	  pass`,
  	  java: `class Solution {
  	  public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
  	     // Write code
  	     return 0.0;
  	  }
}`,
  	  cpp: `class Solution {
public:
    double findMedianSortedArrays(std::vector<int>& nums1, std::vector<int>& nums2) {
        // Write code
        return 0.0;
    }
};`,
  	  c: `double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    // Write code
    return 0.0;
}`,
  	},
  	expectedOutput: {
  	  javascript: "2.00000\n2.50000",
  	  python: "2.00000\n2.50000",
  	  java: "2.00000\n2.50000",
  	  cpp: "2.00000\n2.50000",
  	  c: "2.00000\n2.50000",
  	}
  },

  "regular-expression-matching": {
    id: "regular-expression-matching",
    title: "Regular Expression Matching",
    difficulty: "Hard",
    category: "String • Dynamic Programming",
    description: {
  	  text: "Given an input string $s$ and a pattern $p$, implement regular expression matching with support for `.` and `*`.",
  	  notes: ["` . ` matches any single character. ` * ` matches zero or more of the preceding element."],
  	},
  	examples: [
  	  { input: 's = "aa", p = "a"', output: "false" },
  	  { input: 's = "aa", p = "a*"', output: "true" },
  	  { input: 's = "ab", p = ".*"', output: "true" },
  	],
  	constraints: ["$1 \le s.\text{length}, p.\text{length} \le 20$"],
  	starterCode: {
  	  javascript: `function isMatch(s, p) {
  // Write code
}`,
  	  python: `def isMatch(s, p):
  	  # Write code
  	  pass`,
  	  java: `class Solution {
  	  public static boolean isMatch(String s, String p) {
  	     // Write code
  	     return false;
  	  }
}`,
  	  cpp: `class Solution {
public:
    bool isMatch(std::string s, std::string p) {
        // Write code
        return false;
    }
};`,
  	  c: `bool isMatch(char * s, char * p) {
    // Write code
    return false;
}`,
  	},
  	expectedOutput: {
  	  javascript: "false\ntrue\ntrue",
  	  python: "False\nTrue\nTrue",
  	  java: "false\ntrue\ntrue",
  	  cpp: "false\ntrue\ntrue",
  	  c: "false\ntrue\ntrue",
  	}
  },

  "trapping-rain-water": {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Array • Two Pointers • Dynamic Programming",
    description: {
      text: "Given $n$ non-negative integers representing an elevation map where the width of each bar is 1, compute how much rainwater it can trap after raining.",
      notes: ["This can be solved efficiently using two pointers or dynamic programming."],
    },
  	examples: [
  	  { input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" },
  	  { input: "height = [4,2,0,3,2,5]", output: "9" },
  	],
  	constraints: ["$1 \le n \le 2 \cdot 10^4$"],
  	starterCode: {
  	  javascript: `function trap(height) {
  // Write code
}`,
  	  python: `def trap(height):
  	  # Write code
  	  pass`,
  	  java: `class Solution {
  	  public static int trap(int[] height) {
  	     // Write code
  	     return 0;
  	  }
}`,
  	  cpp: `class Solution {
public:
    int trap(std::vector<int>& height) {
        // Write code
        return 0;
    }
};`,
  	  c: `int trap(int* height, int heightSize) {
    // Write code
    return 0;
}`,
  	},
  	expectedOutput: {
  	  javascript: "6\n9",
  	  python: "6\n9",
  	  java: "6\n9",
  	  cpp: "6\n9",
  	  c: "6\n9",
  	}
  },

  "longest-valid-parentheses": {
    id: "longest-valid-parentheses",
    title: "Longest Valid Parentheses",
    difficulty: "Hard",
    category: "String • Dynamic Programming • Stack",
    description: {
      text: "Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.",
      notes: [],
    },
  	examples: [
  	  { input: 's = "(()"', output: "2", explanation: 'The longest valid substring is "()".' },
  	  { input: 's = ")()())"', output: "4", explanation: 'The longest valid substring is "()()".' },
  	],
  	constraints: ["$0 \le s.\text{length} \le 3 \cdot 10^4$"],
  	starterCode: {
  	  javascript: `function longestValidParentheses(s) {
  // Write code
}`,
  	  python: `def longestValidParentheses(s):
  	  # Write code
  	  pass`,
  	  java: `class Solution {
  	  public static int longestValidParentheses(String s) {
  	     // Write code
  	     return 0;
  	  }
}`,
  	  cpp: `class Solution {
public:
    int longestValidParentheses(std::string s) {
        // Write code
        return 0;
    }
};`,
  	  c: `int longestValidParentheses(char * s) {
    // Write code
    return 0;
}`,
  	},
  	expectedOutput: {
  	  javascript: "2\n4",
  	  python: "2\n4",
  	  java: "2\n4",
  	  cpp: "2\n4",
  	  c: "2\n4",
  	}
  }

};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/js.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
  cpp: {
    name: "C++",
    icon: "/cpp.png",
    monacoLang: "cpp",
  },
  c: {
    name: "C",
    icon: "/c.png",
    monacoLang: "c",
  },
};