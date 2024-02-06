// ======== data fetching from external sources and modules and imports ========

// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.mjs";

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
}

// ˆ^initial data

// checking below:

// const id = 3
// getUserData(id)
//   .then(userData => console.log(userData))
//   .catch(error => console.log(error))


// this does not work

//testing git from a new loc