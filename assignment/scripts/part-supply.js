console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
console.log('1. Number of partsNeeded:');

let partsNeeded = 40;
console.log(partsNeeded);


// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');


let supplyChanges = [3, 5, -6, 0, 7, 11];
console.log('Our supplyChanges Array:', supplyChanges);


// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');

console.log(supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
console.log('4. Removed item:');

console.log('Our array currently lists', supplyChanges);

console.log('Removing the last item in our array', supplyChanges.pop());

console.log('Now our array lists', supplyChanges);


// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');

supplyChanges.push(25);

console.log('Our array now lists', supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');

for ( let x = 0; x < supplyChanges.length; x++){
    console.log('for loop value', supplyChanges[x]);
    if (supplyChanges[x] > 0){
        console.log('Added', supplyChanges[x], 'parts.');
    }
    if (supplyChanges[x] === 0){
        console.log('No Change');
    }
    if (supplyChanges[x] < 0){
        console.log('Removed', supplyChanges[x], 'parts.');
    }
}



// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');

for (part of supplyChanges){
    console.log('for of loop', part);
    if (part > 0){
        console.log('Added', part, 'parts.');
    }
    if (part === 0){
        console.log('No Change');
    }
    if (part < 0){
        console.log('Removed', part, 'parts.');
    }
}



// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('8. Total supplies available is:');

console.log('This is the for Each method:');
let sumOfPartsFirst = 0;

supplyChanges.forEach( partsNum => {
    sumOfPartsFirst += partsNum;
    console.log("Parts we're adding", partsNum + '. Current total', sumOfPartsFirst);
})
console.log('Our total number of parts are', sumOfPartsFirst);
//Tried the forEach() method first, since it was easier for me to understand. 
//Then added the reg for loop.

console.log('This is the regular for loop:');

let sumOfParts = 0;

for (ourParts = 0; ourParts < supplyChanges.length; ourParts++){
    sumOfParts += supplyChanges[ourParts];
    console.log("Parts we're adding", supplyChanges[ourParts] + '. Current total', sumOfParts);
}
console.log('Our total number of parts are', sumOfParts);
//Appologies for not using i in the ourParts. It helps me to understand it better
//When they're all not i's.

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');


let boxCount = 0;
let partsRem = 0;
let boxTotal = 7;
let totalParts = 572;

while (boxTotal < totalParts){
    partsRem += totalParts - boxTotal;
    console.log('in while loop. total parts:', totalParts, 'less parts', boxTotal, 'boxes currently filled', boxCount);
    totalParts-=7;
    boxCount++;
}
console.log('Total boxes filled:', boxCount);
console.log("Remaining Parts", totalParts%7);
// This is how I was able to get it while subtracting
// 7 from our total until we couldn't fit 7 in fully
// into our remaining balance.


/*
let box = 0;
let parts = 0;
let partsFilled = 0;
let boxMax = 7;
let totalParts = 50;

while (partsFilled < totalParts){
    partsFilled += parts + boxMax;
    console.log('in while loop. total parts:', partsFilled, 'current parts', parts, 'plus parts', boxMax, 'boxes currently filled', box);
    //boxMax+=7;
    box++;
}
console.log('Total boxes filled:', box);
console.log("Remaining Parts", totalParts%7);
*/
//Not certain as to if the first way I have it done counts towards the stretch goal but that is how 
//in my mind I would physically do it. I tried doing it the opposite of how I currently have it set 
//and something just isn't quite right. Sure it's just something simple I'm overlooking. 
