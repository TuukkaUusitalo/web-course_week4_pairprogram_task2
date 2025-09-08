/* // The data model for user is as follows
{
    "name": "Matti Seppänen",
    "password": "M@45mtg$",
    "username": "mattis",
    "address": "Mannerheimintie 14, 00100 Helsinki",	
    "age": 23
}
 */
let tourArray = [];

let nextId = 1;

function getAll() {
  return tourArray;
}

function addOne(tourData) {
  // Check if any parameter is empty or undefined
  const { name, info, image, price } = tourData;
  if (!name || !info || !image || !price) {
    return false;
  }

  const newItem = {
    id: nextId++,
    ...tourData,
  };

  tourArray.push(newItem);
  return newItem;
}

function findById(id) {
  const numericId = Number(id);
  const item = tourArray.find((item) => item.id === numericId);
  return item || false;
}

function updateOneById(id, updatedData) {
  const tour = findById(id);
  if (tour) {
    Object.assign(tour, updatedData); // Update properties using Object.assign
    return tour;
  }
  return false;
}

function deleteOneById(id) {
  const item = findById(id);
  if (item) {
    const initialLength = tourArray.length;
    tourArray = tourArray.filter((item) => item.id !== Number(id));
    return tourArray.length < initialLength; // Indicate successful deletion if the length has decreased
  }
  return false; // Return false if the item was not found
}

if (require.main === module) {
  // Add user
  let result = addOne({
    name: "Best of Paris in 7 Days Tour",
    info: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
    image: "https://www.course-api.com/images/tours/tour-1.jpeg",
    price: "1,995"
  });
  console.log("result", result);
  console.assert(typeof result === 'object', 'Result should be an object');

  // Add another user

  // Get all users
  const allTours = getAll();
  console.log("getAll called:", allTours);
  console.assert(Array.isArray(allTours), 'getAll should return an array');
  console.assert(allTours.length === 2, 'getAll should return an array of length 2');

  // Find user by ID
  const tour = findById(1);
  console.log("findById called:", tour);
  console.assert(typeof tour === 'object', 'findById should return an object');

  // Update user by ID
  const updatedTour = updateOneById(1, { name: "Paris in 6 days", price: "789e is okay" });
  console.log("updateOneById called:", updatedTour);
  console.assert(typeof updatedTour === 'object', 'updateOneById should return an object');

  // Verify update
  const updatedTourCheck = findById(1);
  console.log("findById called after item updated:", updatedTourCheck);
  console.assert(updatedTourCheck.age === 31 && updatedTourCheck.address === "789 Oak St", 'User should be updated');

  // Delete user by ID
  const deletedTour = deleteOneById(1);
  console.log("deleteOneById called:", deletedTour);
  console.assert(deletedTour === true, 'deleteOneById should return true');

  // Verify deletion
  const deletedTourCheck = findById(1);
  console.log("findById called after item deleted:", deletedTourCheck);
  console.assert(deletedTourCheck === false, 'User should be deleted');
}

const Tour = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = Tour;
