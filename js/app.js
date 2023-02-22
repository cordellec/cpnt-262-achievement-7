              ///////////////////////////////////////////////////////////////////////////
            ///////////////////////// D E F I N I T I O N S //////////////////////////
          /////////////////////////////////////////////////////////////////////////
        // and (&&) = Returns "true" if and ONLY IF all the operands are true //
      // or (||) = Returns "true" if ONE or MORE of it's operands is true //
    // not (!) =  converts truthy to falsey or vice versa ///////////////
  /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////      

// Example 1: AND (&&) Operator
// Using a logical AND operator (&&), refactor the following code so that ONE if statement is used to correctly nap when you are sleepy AND it's the afternoon.

const timeOfDay = 'afternoon';
const sleepy = true;
// i just added  && to timeOfDay and Sleepy in the if statment because they are BOTH true//
if (timeOfDay && sleepy) {
  console.log("Time to have an afternoon nap!")
}

// Example 2: OR (||) Operator
// Using a logical OR operator (||), refactor the following code into ONE if statement that contains ONE console log.

const mood = 'happy';
// i put all of the moods into the "if" statement and it will log "Pass the potato chips!" because atleast one of the operands is true//
if (mood === "happy" || mood === "stressed" || mood === "hungry") {
  console.log("Pass the potato chips!")
}

// Example 3: Logical NOT (!) Operator
// Using a logical NOT operator (!), refactor the condition of the following if statement so that the statement is logged to the console correctly.

const cloudy = true;

// i just put the NOT operator in front of cloudy, to change it's truthyness to falsy (it does not console log, which i think is the goal/point)//
if (!cloudy) {
  console.log('Put on sun glasses.');
}