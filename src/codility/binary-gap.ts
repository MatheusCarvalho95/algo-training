import prompt from "prompt";

// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

// Write a function:

//     class Solution { public int solution(int N); }

// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

// Write an efficient algorithm for the following assumptions:

//         N is an integer within the range [1..2,147,483,647].

// Copyright 2009–2024 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

async function getBinaryGap() {
  const result = await prompt.get(["number"]);

  const number = Number(result.number);

  const asBinary = Number(number).toString(2);

  const numberOneIndexes: number[] = [];
  let largestGap = 0;
  const chars = [...asBinary];
  chars.forEach((n, index) => {
    if (Number(n) === 1) {
      numberOneIndexes.push(index + 1);
      if (numberOneIndexes.length > 1) {
        const lastIdexMinusOne = numberOneIndexes[numberOneIndexes.length - 2];
        const gap = index - lastIdexMinusOne;
        if (gap > largestGap) largestGap = gap;
      }
    }
  });

  console.log(asBinary);
  console.log(numberOneIndexes);

  if (
    numberOneIndexes.length === asBinary.length ||
    numberOneIndexes.length === 1
  )
    console.log("No gap");

  console.log("Largest gap is: ", largestGap);
}

getBinaryGap();
