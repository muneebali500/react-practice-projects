// function intDiff(arr, n) {
//   let timesDiff = 0;

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] - arr[i] === n || arr[i] - arr[j] === n) {
//         timesDiff = timesDiff + 1;
//       }
//     }
//   }
//   console.log(timesDiff);
//   return timesDiff;
// }

// intDiff([1, 3, 1, 3], 2);

const arr = [`hell`, `ehll`, `llheo`];
const str = `hell`;

arr.every((item) => {
  console.log(item);
  if (str.length === item.length) {
    if (
      item.includes(`h`) &&
      item.includes(`e`) &&
      item.includes(`l`) &&
      item.includes(`l`)
    ) {
      console.log(true);
    } else {
      console.log(false);
    }
  } else {
    console.log(false);
  }
});

// const str = `hello`;
// console.log(str[3]);

// str.includes(`i`) ? console.log(true) : console.log(false);
