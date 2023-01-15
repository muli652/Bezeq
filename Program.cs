using System;
using System.Text;

namespace Bezeq
{
    class Program
    {
        static void Main(string[] args)
        {
            //Question 1
            Console.WriteLine("Question number 1 result:");
            PrintUniqueWords("Sapien cubilia  tortor Eleifend praesent  cubilia  cubilia tortor Pretium eleifend");

            //Question 2
            Console.WriteLine("Question number 2 result:");
            Console.WriteLine(IsPalindrome("Level"));

            //Question 3
            int[][] jaggedArray = new int[][] { new int[] { 1, 3 }, new int[] { 5, 7, 9 }, new int[] { 3, 1 },
                new int[] { 3, 6, 7 }, new int[] { 9, 7, 5 }, new int[] { 3, 67 } };
            int[][] uniqueArrays = RemoveDuplicates(jaggedArray);

            Console.WriteLine("Question number 3 result:");

            foreach (int[] array in uniqueArrays)
            {
                Console.WriteLine(string.Join(", ", array));
            }

            Console.ReadKey();
        }


        //Question1
        private static void PrintUniqueWords(string input)
        {
            Dictionary<string, int> wordCounts = new Dictionary<string, int>();

            // split the input string into words
            string[] words = input.Split(new char[] { ' ', '\r', '\n', '\t' }, StringSplitOptions.RemoveEmptyEntries);

            // count the occurrences of each word and enter to dictionary
            foreach (string word in words)
            {
                string wordToLower = word.ToLower();

                if (wordCounts.ContainsKey(wordToLower))
                {
                    wordCounts[wordToLower]++;
                }
                else
                {
                    wordCounts[wordToLower] = 1;
                }
            }

            List<KeyValuePair<string, int>> uniqueWords = wordCounts
                .OrderByDescending(pair => pair.Value)
                .ToList();

            foreach (KeyValuePair<string, int> pair in uniqueWords)
            {
                Console.WriteLine(pair.Key + ", " + pair.Value);
            }
        }

        //Question2
        private static bool IsPalindrome(string input)
        {
            input = input.ToLower();
            StringBuilder sb = new StringBuilder();

            for (int i = 0; i < input.Length; i++)
            {
                if (Char.IsLetterOrDigit(input[i]))
                {
                    sb.Append(input[i]);
                }
            }

            input = sb.ToString();
            int left = 0;
            int right = input.Length - 1;

            while (left < right)
            {
                if (input[left] != input[right])
                {
                    return false;
                }

                left++;
                right--;
            }

            return true;
        }


        //Question3
        public static int[][] RemoveDuplicates(int[][] jaggedArray)
        {
            HashSet<string> uniqueArrays = new HashSet<string>();
            List<int[]> result = new List<int[]>();

            for (int i = 0; i < jaggedArray.Length; i++)
            {
                Array.Sort(jaggedArray[i]);
                string arrayString = string.Join(",", jaggedArray[i]);

                if (!uniqueArrays.Contains(arrayString))
                {
                    uniqueArrays.Add(arrayString);
                    result.Add(jaggedArray[i]);
                }
            }

            return result.ToArray();
        }
    }
}


