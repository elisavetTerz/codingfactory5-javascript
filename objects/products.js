const contacts = [
  { firstname: "Alice", lastname: "W.", phoneNumber: "2106765432" },
  { firstname: "Bob", lastname: "M.", phoneNumber: "2106765999" },
];

function insertContact(firstname, lastname, phoneNumber) {
  if (!firstname || !lastname || !phoneNumber) {
    return;
  }
  contacts.push({ firstname, lastname, phoneNumber });
}

function deleteContact(phoneNumber) {
  if (!phoneNumber) return;

  let contact = contacts.find((c) => c.phoneNumber === phoneNumber);
  if (!contact) return;

  let contactPosition = contacts.findIndex(
    (c) => c.phoNenumber === phoneNumber
  );
  contacts.splice(contactPosition, 1);
}

function replace(oldNumber, newNumber) {
  let oldNumber = contacts.find((c) => c.phoneNumber === oldNumber);
  if (!oldNumber) return;

  let NewContact = contacts.find((c) => c.phoneNumber === newNumber);
  if (NewContact) return;

  contacts.forEach((c) => {
    if (c.phoneNumber === oldNumber) c.phoneNumber = newNumber;
  });
}

function traverse(contacts) {
  contacts.forEach((c) => console.log(c));
}
