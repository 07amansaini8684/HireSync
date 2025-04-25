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


import { Monaco } from "@monaco-editor/react";
import { Theme } from "../types/index";

type LanguageConfig = Record<
  string,
  {
    id: string;
    label: string;
    logoPath: string;
    pistonRuntime: { language: string; version: string };
    monacoLanguage: string;
    defaultCode: string;
  }
>;

export const LANGUAGE_CONFIG: LanguageConfig = {
  javascript: {
    id: "javascript",
    label: "JavaScript",
    logoPath: "/javascript.png",
    pistonRuntime: { language: "javascript", version: "18.15.0" }, // api that we're gonna be using
    monacoLanguage: "javascript",
    defaultCode: `// JavaScript Playground
const numbers = [1, 2, 3, 4, 5];

// Map numbers to their squares
const squares = numbers.map(n => n * n);
console.log('Original numbers:', numbers);
console.log('Squared numbers:', squares);

// Filter for even numbers
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log('Even numbers:', evenNumbers);

// Calculate sum using reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum of numbers:', sum);`,
  },
  typescript: {
    id: "typescript",
    label: "TypeScript",
    logoPath: "/typescript.png",
    pistonRuntime: { language: "typescript", version: "5.0.3" },
    monacoLanguage: "typescript",
    defaultCode: `// TypeScript Playground
interface NumberArray {
  numbers: number[];
  sum(): number;
  squares(): number[];
  evenNumbers(): number[];
}

class MathOperations implements NumberArray {
  constructor(public numbers: number[]) {}

  sum(): number {
    return this.numbers.reduce((acc, curr) => acc + curr, 0);
  }

  squares(): number[] {
    return this.numbers.map(n => n * n);
  }

  evenNumbers(): number[] {
    return this.numbers.filter(n => n % 2 === 0);
  }
}

const math = new MathOperations([1, 2, 3, 4, 5]);

console.log('Original numbers:', math.numbers);
console.log('Squared numbers:', math.squares());
console.log('Even numbers:', math.evenNumbers());
console.log('Sum of numbers:', math.sum());`,
  },
  python: {
    id: "python",
    label: "Python",
    logoPath: "/python.png",
    pistonRuntime: { language: "python", version: "3.10.0" },
    monacoLanguage: "python",
    defaultCode: `# Python Playground
numbers = [1, 2, 3, 4, 5]

# Map numbers to their squares
squares = [n ** 2 for n in numbers]
print(f"Original numbers: {numbers}")
print(f"Squared numbers: {squares}")

# Filter for even numbers
even_numbers = [n for n in numbers if n % 2 == 0]
print(f"Even numbers: {even_numbers}")

# Calculate sum
numbers_sum = sum(numbers)
print(f"Sum of numbers: {numbers_sum}")`,
  },
  java: {
    id: "java",
    label: "Java",
    logoPath: "/java.png",
    pistonRuntime: { language: "java", version: "15.0.2" },
    monacoLanguage: "java",
    defaultCode: `public class Main {
  public static void main(String[] args) {
      // Create array
      int[] numbers = {1, 2, 3, 4, 5};
      
      // Print original numbers
      System.out.print("Original numbers: ");
      printArray(numbers);
      
      // Calculate and print squares
      int[] squares = new int[numbers.length];
      for (int i = 0; i < numbers.length; i++) {
          squares[i] = numbers[i] * numbers[i];
      }
      System.out.print("Squared numbers: ");
      printArray(squares);
      
      // Print even numbers
      System.out.print("Even numbers: ");
      for (int n : numbers) {
          if (n % 2 == 0) System.out.print(n + " ");
      }
      System.out.println();
      
      // Calculate and print sum
      int sum = 0;
      for (int n : numbers) sum += n;
      System.out.println("Sum of numbers: " + sum);
  }
  
  private static void printArray(int[] arr) {
      for (int n : arr) System.out.print(n + " ");
      System.out.println();
  }
}`,
  },
  go: {
    id: "go",
    label: "Go",
    logoPath: "/go.png",
    pistonRuntime: { language: "go", version: "1.16.2" },
    monacoLanguage: "go",
    defaultCode: `package main

import "fmt"

func main() {
  // Create slice
  numbers := []int{1, 2, 3, 4, 5}
  
  // Print original numbers
  fmt.Println("Original numbers:", numbers)
  
  // Calculate squares
  squares := make([]int, len(numbers))
  for i, n := range numbers {
      squares[i] = n * n
  }
  fmt.Println("Squared numbers:", squares)
  
  // Filter even numbers
  var evenNumbers []int
  for _, n := range numbers {
      if n%2 == 0 {
          evenNumbers = append(evenNumbers, n)
      }
  }
  fmt.Println("Even numbers:", evenNumbers)
  
  // Calculate sum
  sum := 0
  for _, n := range numbers {
      sum += n
  }
  fmt.Println("Sum of numbers:", sum)
}`,
  },
  rust: {
    id: "rust",
    label: "Rust",
    logoPath: "/rust.png",
    pistonRuntime: { language: "rust", version: "1.68.2" },
    monacoLanguage: "rust",
    defaultCode: `fn main() {
    // Create vector
    let numbers = vec![1, 2, 3, 4, 5];
    
    // Print original numbers
    println!("Original numbers: {:?}", numbers);
    
    // Calculate squares
    let squares: Vec<i32> = numbers
        .iter()
        .map(|&n| n * n)
        .collect();
    println!("Squared numbers: {:?}", squares);
    
    // Filter even numbers
    let even_numbers: Vec<i32> = numbers
        .iter()
        .filter(|&&n| n % 2 == 0)
        .cloned()
        .collect();
    println!("Even numbers: {:?}", even_numbers);
    
    // Calculate sum
    let sum: i32 = numbers.iter().sum();
    println!("Sum of numbers: {}", sum);
}`,
  },
  cpp: {
    id: "cpp",
    label: "C++",
    logoPath: "/cpp.png",
    pistonRuntime: { language: "cpp", version: "10.2.0" },
    monacoLanguage: "cpp",
    defaultCode: `#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>

int main() {
    // Create vector
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    
    // Print original numbers
    std::cout << "Original numbers: ";
    for (int n : numbers) std::cout << n << " ";
    std::cout << std::endl;
    
    // Calculate squares
    std::vector<int> squares;
    std::transform(numbers.begin(), numbers.end(), 
                  std::back_inserter(squares),
                  [](int n) { return n * n; });
    
    std::cout << "Squared numbers: ";
    for (int n : squares) std::cout << n << " ";
    std::cout << std::endl;
    
    // Filter even numbers
    std::cout << "Even numbers: ";
    for (int n : numbers) {
        if (n % 2 == 0) std::cout << n << " ";
    }
    std::cout << std::endl;
    
    // Calculate sum
    int sum = std::accumulate(numbers.begin(), numbers.end(), 0);
    std::cout << "Sum of numbers: " << sum << std::endl;
    
    return 0;
}`,
  },
  csharp: {
    id: "csharp",
    label: "C#",
    logoPath: "/csharp.png",
    pistonRuntime: { language: "csharp", version: "6.12.0" },
    monacoLanguage: "csharp",
    defaultCode: `using System;
using System.Linq;

class Program {
    static void Main() {
        // Create array
        int[] numbers = { 1, 2, 3, 4, 5 };
        
        // Print original numbers
        Console.WriteLine($"Original numbers: {string.Join(" ", numbers)}");
        
        // Calculate squares
        var squares = numbers.Select(n => n * n);
        Console.WriteLine($"Squared numbers: {string.Join(" ", squares)}");
        
        // Filter even numbers
        var evenNumbers = numbers.Where(n => n % 2 == 0);
        Console.WriteLine($"Even numbers: {string.Join(" ", evenNumbers)}");
        
        // Calculate sum
        var sum = numbers.Sum();
        Console.WriteLine($"Sum of numbers: {sum}");
    }
}`,
  },
  ruby: {
    id: "ruby",
    label: "Ruby",
    logoPath: "/ruby.png",
    pistonRuntime: { language: "ruby", version: "3.0.1" },
    monacoLanguage: "ruby",
    defaultCode: `# Create array
numbers = [1, 2, 3, 4, 5]

# Print original numbers
puts "Original numbers: #{numbers.join(' ')}"

# Calculate squares
squares = numbers.map { |n| n * n }
puts "Squared numbers: #{squares.join(' ')}"

# Filter even numbers
even_numbers = numbers.select { |n| n.even? }
puts "Even numbers: #{even_numbers.join(' ')}"

# Calculate sum
sum = numbers.sum
puts "Sum of numbers: #{sum}"`,
  },
  swift: {
    id: "swift",
    label: "Swift",
    logoPath: "/swift.png",
    pistonRuntime: { language: "swift", version: "5.3.3" },
    monacoLanguage: "swift",
    defaultCode: `// Create array
let numbers = [1, 2, 3, 4, 5]

// Print original numbers
print("Original numbers: \\(numbers)")

// Calculate squares
let squares = numbers.map { $0 * $0 }
print("Squared numbers: \\(squares)")

// Filter even numbers
let evenNumbers = numbers.filter { $0 % 2 == 0 }
print("Even numbers: \\(evenNumbers)")

// Calculate sum
let sum = numbers.reduce(0, +)
print("Sum of numbers: \\(sum)")`,
  },
};

export const THEMES: Theme[] = [
  { id: "vs-dark", label: "VS Dark", color: "#1e1e1e" },
  { id: "vs-light", label: "VS Light", color: "#ffffff" },
  { id: "github-dark", label: "GitHub Dark", color: "#0d1117" },
  { id: "monokai", label: "Monokai", color: "#272822" },
  { id: "solarized-dark", label: "Solarized Dark", color: "#002b36" },
];

export const THEME_DEFINITONS = {
  "github-dark": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "6e7681" },
      { token: "string", foreground: "a5d6ff" },
      { token: "keyword", foreground: "ff7b72" },
      { token: "number", foreground: "79c0ff" },
      { token: "type", foreground: "ffa657" },
      { token: "class", foreground: "ffa657" },
      { token: "function", foreground: "d2a8ff" },
      { token: "variable", foreground: "ffa657" },
      { token: "operator", foreground: "ff7b72" },
    ],
    colors: {
      "editor.background": "#0d1117",
      "editor.foreground": "#c9d1d9",
      "editor.lineHighlightBackground": "#161b22",
      "editorLineNumber.foreground": "#6e7681",
      "editorIndentGuide.background": "#21262d",
      "editor.selectionBackground": "#264f78",
      "editor.inactiveSelectionBackground": "#264f7855",
    },
  },
  monokai: {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "75715E" },
      { token: "string", foreground: "E6DB74" },
      { token: "keyword", foreground: "F92672" },
      { token: "number", foreground: "AE81FF" },
      { token: "type", foreground: "66D9EF" },
      { token: "class", foreground: "A6E22E" },
      { token: "function", foreground: "A6E22E" },
      { token: "variable", foreground: "F8F8F2" },
      { token: "operator", foreground: "F92672" },
    ],
    colors: {
      "editor.background": "#272822",
      "editor.foreground": "#F8F8F2",
      "editorLineNumber.foreground": "#75715E",
      "editor.selectionBackground": "#49483E",
      "editor.lineHighlightBackground": "#3E3D32",
      "editorCursor.foreground": "#F8F8F2",
      "editor.selectionHighlightBackground": "#49483E",
    },
  },
  "solarized-dark": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "586e75" },
      { token: "string", foreground: "2aa198" },
      { token: "keyword", foreground: "859900" },
      { token: "number", foreground: "d33682" },
      { token: "type", foreground: "b58900" },
      { token: "class", foreground: "b58900" },
      { token: "function", foreground: "268bd2" },
      { token: "variable", foreground: "b58900" },
      { token: "operator", foreground: "859900" },
    ],
    colors: {
      "editor.background": "#002b36",
      "editor.foreground": "#839496",
      "editorLineNumber.foreground": "#586e75",
      "editor.selectionBackground": "#073642",
      "editor.lineHighlightBackground": "#073642",
      "editorCursor.foreground": "#839496",
      "editor.selectionHighlightBackground": "#073642",
    },
  },
};

// Helper function to define themes in Monaco
export const defineMonacoThemes = (monaco: Monaco) => {
  Object.entries(THEME_DEFINITONS).forEach(([themeName, themeData]) => {
    monaco.editor.defineTheme(themeName, {
      base: themeData.base,
      inherit: themeData.inherit,
      rules: themeData.rules.map((rule) => ({
        ...rule,
        foreground: rule.foreground,
      })),
      colors: themeData.colors,
    });
  });
};