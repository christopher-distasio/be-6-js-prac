let contacts = [
  {
      name: "Jane Doe",
      age: 21,
      social_media: {
          instagram: "jane.doe",
          twitter: "jane_doe"
      }
  },
  {
      name: "John Doe",
      age: 21,
      social_media: {
          instagram: "john.doe",
          twitter: "john_doe"
      }
  },
  {
      name: "Mary Deer",
      age: 21,
      social_media: {
          twitter: "mary_deer"
      }
  },
  {
      name: "Gary Deer",
      age: 21,
      social_media: {
          twitter: "gary_deer"
      }
  }
]

// 1. Loop through the contacts array and console.log the name of each person

for (let i = 0; i < contacts.length; i++) {
    console.log(contacts[i].name);
}

// contacts.forEach(contact => {
//     console.log(contact.name);
// });


// 2. Loop through the contacts array and filter out everyone who has an instagram account

let noInstagram = contacts.filter(function(contact) {
  return contact.social_media.instagram === undefined;
});


// 3. Using the given contacts array, use 'Math.random' to randomly select a contact from the array and save it to a variable called 'randomContact.'

let randomIndex = Math.floor(Math.random() * contacts.length);
let randomContact = contacts[randomIndex];