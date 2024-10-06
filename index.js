
function findMatching(drivers, searchString) {
    const lowerCaseSearch = searchString.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase() === lowerCaseSearch);
}
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
const matchingDrivers = findMatching(drivers, "Bobby");
console.log(matchingDrivers); 

function fuzzyMatch(drivers, query) {
    const lowerCaseQuery = query.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().startsWith(lowerCaseQuery));
}
function matchName(drivers, query) {
    return drivers.filter(driver => driver.name === query);
}
