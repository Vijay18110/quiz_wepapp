export const questions = [
    {
        id: 1,
        question: "Which of the following is the correct way to declare an array in JavaScript?",
        options: ["1. var arr = ()", "2. var arr = []", "3. var arr = {}", "4. var arr = <>"],
        correctAnswer: 2,
        selectedCorrect: false,
    },
    {
        id: 2,
        question: "What method is used to add elements to the end of an array?",
        options: ["1. push()", "2. pop()", "3. shift()", "4. unshift()"],
        correctAnswer: 1,
        selectedCorrect: false,
    },
    {
        id: 3,
        question: "How do you remove the last element of an array?",
        options: ["1. slice()", "2. pop()", "3. push()", "4. splice()"],
        correctAnswer: 2,
        selectedCorrect: false,

    },
    {
        id: 4,
        question: "What does the `length` property of an array return?",
        options: [
            "1. The number of elements in the array",
            "2. The index of the last element",
            "3. The size of the array in bytes",
            "4. Undefined"
        ],
        selectedCorrect: false,
        correctAnswer: 1,
    },
    {
        id: 5,
        question: "Which method is used to join all elements of an array into a string?",
        options: ["1. concat()", "2. join()", "3. split()", "4. toString()"],
        correctAnswer: 2,
        selectedCorrect: false,

    },
    {
        id: 6,
        question: "How do you check if an object is an array in JavaScript?",
        options: [
            "1. typeof array === 'array'",
            "2. array instanceof Array",
            "3. Array.isArray(array)",
            "4. array.constructor === 'Array'"
        ],
        correctAnswer: 3
    },
    {
        id: 7,
        question: "Which method creates a new array with the results of calling a function on every element in the array?",
        options: ["1. map()", "2. forEach()", "3. filter()", "4. reduce()"],
        correctAnswer: 1
    },
    {
        id: 8,
        question: "How do you remove the first element of an array?",
        options: ["1. shift()", "2. unshift()", "3. pop()", "4. slice()"],
        correctAnswer: 1
    },
    {
        id: 9,
        question: "What is the output of `['a', 'b', 'c'].indexOf('b')`?",
        options: ["1. 1", "2. 2", "3. 0", "4. -1"],
        correctAnswer: 1
    },
    {
        id: 10,
        question: "Which method is used to merge two or more arrays in JavaScript?",
        options: ["1. merge()", "2. concat()", "3. append()", "4. join()"],
        correctAnswer: 2
    },
    {
        id: 11,
        question: "What is the return value of `Array.prototype.push()`?",
        options: [
            "1. The new length of the array",
            "2. The last element added",
            "3. The array itself",
            "4. undefined"
        ],
        correctAnswer: 1
    },
    {
        id: 12,
        question: "Which method is used to create a shallow copy of a portion of an array into a new array?",
        options: ["1. slice()", "2. splice()", "3. copy()", "4. concat()"],
        correctAnswer: 1
    },
    {
        id: 13,
        question: "How do you find the largest number in an array?",
        options: [
            "1. Math.max(...array)",
            "2. array.sort()[0]",
            "3. array.max()",
            "4. Math.max(array)"
        ],
        correctAnswer: 1
    },
    {
        id: 14,
        question: "Which method is used to test whether at least one element in the array passes a provided function?",
        options: ["1. every()", "2. some()", "3. forEach()", "4. filter()"],
        correctAnswer: 2
    },
    {
        id: 15,
        question: "What is the output of `Array.isArray([1, 2, 3])`?",
        options: ["1. true", "2. false", "3. 1", "4. undefined"],
        correctAnswer: 1
    },
    {
        id: 16,
        question: "How do you convert an array into a string?",
        options: ["1. join()", "2. toString()", "3. JSON.stringify()", "4. All of the above"],
        correctAnswer: 4
    },
    {
        id: 17,
        question: "What does `array.reverse()` do?",
        options: [
            "1. Reverses the order of elements in the array",
            "2. Sorts the array in descending order",
            "3. Removes the first element",
            "4. Returns a new reversed array"
        ],
        correctAnswer: 1
    },
    {
        id: 18,
        question: "Which method is used to find the index of the first element that satisfies a condition?",
        options: ["1. filter()", "2. find()", "3. findIndex()", "4. includes()"],
        correctAnswer: 3
    },
    {
        id: 19,
        question: "What is the output of `[1, 2, 3, 4].slice(1, 3)`?",
        options: [
            "1. [1, 2]",
            "2. [2, 3]",
            "3. [3, 4]",
            "4. [1, 2, 3]"
        ],
        correctAnswer: 2
    },
    {
        id: 20,
        question: "What method do you use to remove a specific element from an array by value?",
        options: [
            "1. array.pop()",
            "2. array.splice()",
            "3. array.filter()",
            "4. array.remove()"
        ],
        correctAnswer: 3
    }
];