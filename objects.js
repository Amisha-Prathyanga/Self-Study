// const address = {
//   street: "Kapuhempala",
//   city: "Galle",
//   zipCode: 80000,
// };

// function showAddress(address) {
//   for (let addrss in address) console.log(addrss);
// }

// showAddress(address);

// -----------------------------------------------

// function createAddress(street, city, zipCode) {
//   return {
//     street,
//     city,
//     zipCode,
//   };
// }

// const address1 = createAddress("a", "b", "c");
// console.log(address1);

// // --------------------------------------------------

// function Address(street, city, zipCode) {
//   (this.street = street), (this.city = city), (this.zipCode = zipCode);
// }

// const address2 = new Address("a", "b", "c");
// console.log(address2);

// function areEqual(address1, address2) {
//   return (
//     address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipCode === address2.zipCode
//   );
// }

// function areSame(address1, address2) {
//   return address1 === address2;
// }

// console.log(areSame(address1, address2));
// console.log(areEqual(address1, address2));

// --------------------------------------------------

// let post = {
//   title: "a",
//   body: "b",
//   author: "c",
//   views: 10,
//   comments: [
//     { author: "a", body: "b" },
//     { author: "c", body: "d" },
//   ],
//   isLive: true,
// };

// console.log(post);

// --------------------------------------------------------

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

const post = new Post("a", "b", "c");

console.log(post);

