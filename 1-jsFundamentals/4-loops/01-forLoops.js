let i = 7;

//    (1)    (2)    (3)
for (i = 0; i < 10; i++){
    // console.log(i);
}

console.log(i)

/*
1-initial expression - run once before the loop starts
2-condition - loop runs until the condition evaluates to false
3-increment expression - run once after each iteration of the loop
*/

//Challenge: using a for loop, count to 20, by 2's
for (x = 0; x <= 20; x += 2){
    console.log(x);
}

//Challenge: using a for loop, count from 10 to 0, going down by 1
for (let x = 10; x >= 0; x--){
    console.log(x);
}

//Challenge: using a for loop, count from 0, going down by 2's to -24
for (x = 0; x >= -24; x -= 2){
    console.log(x);
}

// Challenge: using a for loop, go through a name and display each letter individually
let name = "Donovan";

for (let i = 0; i < name.length; i++){
    console.log(name[i]);
}

// Challenge: make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)
let sum = 0;

for (let i = 1; i <=50; i++){
    sum += i
}

console.log(sum);