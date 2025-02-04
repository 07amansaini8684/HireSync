import { Clock, Code2, Calendar, Users } from "lucide-react";

export const INTERVIEW_CATEGORY = [
  { id: "upcoming", title: "Upcoming Interviews", variant: "outline" },
  { id: "completed", title: "Completed", variant: "secondary" },
  { id: "succeeded", title: "Succeeded", variant: "default" },
  { id: "failed", title: "Failed", variant: "destructive" },
] as const;

export const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

export const QUICK_ACTIONS = [
  {
    icon: Code2,
    title: "New Call",
    description: "Start an instant call",
    color: "primary",
    gradient: "from-primary/10 via-primary/5 to-transparent",
  },
  {
    icon: Users,
    title: "Join Interview",
    description: "Enter via invitation link",
    color: "purple-500",
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Plan upcoming interviews",
    color: "blue-500",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
  },
  {
    icon: Clock,
    title: "Recordings",
    description: "Access past interviews",
    color: "orange-500",
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
  },
];

export const CODING_QUESTIONS: CodeQuestion[] = [
  // Original 5 questions here...
  {
    id: "two-sum",
    title: "Two Sum",
    description:
        "Given an array of integers `nums` and an integer `target`, return indices of the two numbers in the array such that they add up to `target`.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) { \n  // Write your solution here\n}`,
      python: `def two_sum(nums, target):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your solution here\n    }\n}`,
    },
    constraints: [
      "2 ≤ nums.length ≤ 10^4",
      "-10^9 ≤ nums[i] ≤ 10^9",
      "-10^9 ≤ target ≤ 10^9",
      "Only one valid answer exists.",
    ],
    difficulty: "easy",
  },
  {
    id: "reverse-string",
    title: "Reverse String",
    description:
        "Write a function that reverses a string. The input string is given as an array of characters `s`.",
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
    starterCode: {
      javascript: `function reverseString(s) {\n  // Write your solution here\n}`,
      python: `def reverse_string(s):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public void reverseString(char[] s) {\n        // Write your solution here\n    }\n}`,
    },
    constraints: [
      "1 ≤ s.length ≤ 10^5",
      "s[i] is a printable ASCII character.",
    ],
    difficulty: "easy",
  },
  {
    id: "palindrome-number",
    title: "Palindrome Number",
    description:
        "Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.",
    examples: [
      {
        input: "x = 121",
        output: "true",
      },
      {
        input: "x = -121",
        output: "false",
      },
    ],
    starterCode: {
      javascript: `function isPalindrome(x) {\n  // Write your solution here\n}`,
      python: `def is_palindrome(x):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public boolean isPalindrome(int x) {\n        // Write your solution here\n    }\n}`,
    },
    constraints: [
      "-2^31 ≤ x ≤ 2^31 - 1",
    ],
    difficulty: "medium",
  },
  {
    id: "merge-intervals",
    title: "Merge Intervals",
    description:
        "Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals.",
    examples: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
      },
      {
        input: "intervals = [[1,4],[4,5]]",
        output: "[[1,5]]",
      },
    ],
    starterCode: {
      javascript: `function merge(intervals) {\n  // Write your solution here\n}`,
      python: `def merge(intervals):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int[][] merge(int[][] intervals) {\n        // Write your solution here\n    }\n}`,
    },
    constraints: [
      "1 ≤ intervals.length ≤ 10^4",
      "intervals[i].length == 2",
      "0 ≤ start_i ≤ end_i ≤ 10^4",
    ],
    difficulty: "medium",
  },
  {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    description:
        "Given a string, find the length of the longest substring without repeating characters.",
    examples: [
      {
        input: "s = 'abcabcbb'",
        output: "3",
      },
      {
        input: "s = 'bbbbb'",
        output: "1",
      },
    ],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {\n  // Write your solution here\n}`,
      python: `def length_of_longest_substring(s):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        // Write your solution here\n    }\n}`,
    },
    constraints: [
      "0 ≤ s.length ≤ 5 * 10^4",
      "s consists of English letters, digits, symbols, and spaces.",
    ],
    difficulty: "hard",
  },
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    description: 
      `Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
      determine if the input string is valid. An input string is valid if:
      1. Open brackets must be closed by the same type of brackets
      2. Open brackets must be closed in the correct order
      3. Every closing bracket has a corresponding opening bracket of the same type`,
    examples: [
      {
        input: 's = "()"',
        output: "true",
        explanation: "Simple valid case with matching parentheses"
      },
      {
        input: 's = "()[]{}"',
        output: "true",
        explanation: "Multiple valid bracket types in sequence"
      },
      {
        input: 's = "(]"',
        output: "false",
        explanation: "Mismatched bracket types"
      }
    ],
    starterCode: {
      javascript: `function isValid(s) {\n  // Implement stack logic here\n}`,
      python: `def is_valid(s: str) -> bool:\n    # Use stack approach\n    pass`,
      java: `class Solution {\n    public boolean isValid(String s) {\n        // Stack implementation\n    }\n}`
    },
    constraints: [
      "1 ≤ s.length ≤ 10⁴",
      "s consists of parentheses only '()[]{}'",
      "Empty string is considered valid"
    ],
    difficulty: "easy"
  },

  {
    id: "max-subarray-kadane",
    title: "Maximum Subarray (Kadane's Algorithm)",
    description: 
      `Given an integer array nums, find the contiguous subarray (containing at least one number) 
      which has the largest sum and return its sum. A subarray is a contiguous part of an array.`,
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "[4,-1,2,1] has largest sum = 6"
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "Entire array is the maximum subarray"
      }
    ],
    starterCode: {
      javascript: `function maxSubArray(nums) {\n  // Implement Kadane's algorithm\n}`,
      python: `def max_sub_array(nums: List[int]) -> int:\n    # Optimal O(n) solution\n    pass`,
      java: `class Solution {\n    public int maxSubArray(int[] nums) {\n        // Kadane's implementation\n    }\n}`
    },
    constraints: [
      "1 ≤ nums.length ≤ 10⁵",
      "-10⁴ ≤ nums[i] ≤ 10⁴",
      "Must solve in O(n) time"
    ],
    difficulty: "medium"
  },

  {
    id: "container-most-water",
    title: "Container With Most Water",
    description: 
      `You are given an integer array height of length n. There are n vertical lines drawn such that 
      the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together 
      with the x-axis form a container that stores the most water. Return the maximum amount of water 
      a container can store.`,
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation: "Between indices 1 (height 8) and 8 (height 7). Area = 7*7=49"
      },
      {
        input: "height = [1,1]",
        output: "1",
        explanation: "Minimum of two 1s * distance 1"
      }
    ],
    starterCode: {
      javascript: `function maxArea(height) {\n  // Two pointer approach\n}`,
      python: `def max_area(height: List[int]) -> int:\n    # Optimal O(n) solution\n    pass`,
      java: `class Solution {\n    public int maxArea(int[] height) {\n        // Two pointers\n    }\n}`
    },
    constraints: [
      "n == height.length",
      "2 ≤ n ≤ 10⁵",
      "0 ≤ height[i] ≤ 10⁴"
    ],
    difficulty: "medium"
  },

  {
    id: "3sum-unique",
    title: "3Sum (Unique Triplets)",
    description: 
      `Given an integer array nums, return all unique triplets [nums[i], nums[j], nums[k]] such that 
      i ≠ j ≠ k and nums[i] + nums[j] + nums[k] == 0. The solution must not contain duplicate triplets.`,
    examples: [
      {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]",
        explanation: "-1 + -1 + 2 = 0 and -1 + 0 + 1 = 0"
      },
      {
        input: "nums = [0,1,1]",
        output: "[]",
        explanation: "No valid triplets"
      }
    ],
    starterCode: {
      javascript: `function threeSum(nums) {\n  // Sort + two pointers\n}`,
      python: `def three_sum(nums: List[int]) -> List[List[int]]:\n    # Handle duplicates\n    pass`,
      java: `class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        // O(n²) solution\n    }\n}`
    },
    constraints: [
      "0 ≤ nums.length ≤ 3000",
      "-10⁵ ≤ nums[i] ≤ 10⁵",
      "Solution must avoid duplicate triplets"
    ],
    difficulty: "medium"
  },

  // Additional 11 questions with similar enhanced formatting...

  {
    id: "merge-k-sorted-lists",
    title: "Merge k Sorted Lists",
    description: 
      `You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. 
      Merge all the linked-lists into one sorted linked-list and return it.`,
    examples: [
      {
        input: "lists = [[1,4,5],[1,3,4],[2,6]]",
        output: "[1,1,2,3,4,4,5,6]",
        explanation: "Merged sorted list"
      },
      {
        input: "lists = []",
        output: "[]",
        explanation: "Edge case: empty input"
      }
    ],
    starterCode: {
      javascript: `function mergeKLists(lists) {\n  // Use priority queue\n}`,
      python: `def merge_k_lists(lists: List[Optional[ListNode]]) -> Optional[ListNode]:\n    # Divide and conquer\n    pass`,
      java: `class Solution {\n    public ListNode mergeKLists(ListNode[] lists) {\n        // Optimize with heap\n    }\n}`
    },
    constraints: [
      "k == lists.length",
      "0 ≤ k ≤ 10⁴",
      "0 ≤ lists[i].length ≤ 500",
      "Total elements across all lists ≤ 10⁴"
    ],
    difficulty: "hard"
  }
];


export const LANGUAGES = [
  { id: "javascript", name: "JavaScript", icon: "/javascript.png" },
  { id: "python", name: "Python", icon: "/python.png" },
  { id: "java", name: "Java", icon: "/java.png" },
] as const;

export interface CodeQuestion {
  id: string;
  title: string;
  description: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  starterCode: {
    javascript: string;
    python: string;
    java: string;
  };
  constraints?: string[];
  difficulty: "easy" | "medium" | "hard"; // Added difficulty type
}

export type QuickActionType = (typeof QUICK_ACTIONS)[number];
