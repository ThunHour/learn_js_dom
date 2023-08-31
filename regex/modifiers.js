const text="hello cambodia iam from khmer hello 1221"

//[] use for mention the range of the words or digit that we want to search
//[a-z]{1,4} search from a-z and choose the word after cambodia with length around 1-4
//[a-z]+ search the word after the hello cambodia that contain letter a to z
// let result =text.match(/hello cambodia [a-z]{1,4}/);

// console.log(result);

//find the last word
// let result1 =text.match(/\w+$/);

// console.log(result1);

//splits text into word in array
// let result2=text.match(/\b\w+\b/g);

// console.log(result2);

//find the word before khmer

// let result3 =text.match(/\w+(?= khmer)/);

// console.log(result3);

const arr=[12,22,91,35,31,90,112]

const result =arr.filter(x=> x<30)

console.log(result);
