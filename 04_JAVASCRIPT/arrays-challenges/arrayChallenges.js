/* 
1. Declare an array named 'teaFlavours' that contains the strings "green tea", "black tea", "oolong tea".
    Access the first element of the array and store it in a variable named 'firstTea'. 
*/
let teaFlavours = ["green tea", "black tea", "oolong tea"];
// let teaFlavours = new Array("green tea", "black tea", "oolong tea");

const firstTea = teaFlavours[0]


/* 
2. Declare an array named 'cities' containing "London", "Tokyo", "Paris" and "New York". 
    Access the third element in the array and store it in a variable named 'favouriteCity'
*/
let cities = ["London", "Tokyo", "Paris", "New York"]
const favouriteCity = cities[2]


/* 
3. You have an array named 'teaTypes' containing "herbal tea", "white tea", and "masala chai".
    Change the second element of the array to "jasmine tea".
*/
let teaTypes = ["herbal tea", "white tea", "masala chai"]
teaTypes[1] = "jasmine tea"
console.log(teaTypes);


/* 
4. Declare an array named 'citiesVisited' containing "mumbai" and "sydney".
    Add "berlin" to the array using the 'push' method.
*/
let citiesVisited = ["Mumbai", "Sydney"]
citiesVisited.push("Berlin")


/*  
5. You have an array named 'teaOrders' with "chai", "ice tea", "matcha", and "earl grey".
    Remove the last element of the array using the 'pop' method and store it in a variable named 'lastOrder'
*/
let teaOrders = ["chai", "ice tea", "matcha", "earl grey"]
const lastOrder = teaOrders.pop()
console.log(teaOrders);



/*  
6. You have an array named 'popularTea' containing "green tea", "oolong tea", and "chai".
    Create a soft copy of this array named 'softCopyTeas'.
*/
let popularTea = ["green tea", "oolong tea", "chai"]
let softCopyTeas = popularTea
popularTea.pop()
console.log(softCopyTeas);
console.log(popularTea);


/*  
7. You have an array named 'topCities' containing "Berlin", "Singapore", and "New York".
    Create a hard copy of this array named 'hardCopyCities'.
*/
let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];
topCities.pop();
console.log(topCities);
console.log(hardCopyCities);



/*  
8. You have two arrays: 'europeanCities' containing "Paris" and "Rome", and 'asianCities' containing "Tokyo" and "Bangkok".
    Merge these two arrays into a new array named 'worldCities'.
*/
let europeanCities = ["Paris", "Rome"]
let asianCities = ["Tokyo", "Bangkok"]
let worldCities = europeanCities.concat(asianCities)
console.log(worldCities);


/*  
9. You have an array named 'teamMenu' containing "masala chai", "oolong tea", "green tea", and "earl grey".
    Find the length of the array and store it in a variable named 'menuLength'
*/
let teamMenu = ["masala chai", "oolong tea", "green tea", "earl grey"]
let menuLength = teamMenu.length
console.log(menuLength);


/*
10. You have an array named 'cityBucketList' containing "Kyoto", "London", "Cap", and "Vancouver".
    Check if "London" is in the array and store the result in a variable named 'isLondonInList'.
*/
let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"]
let isLondonInList = cityBucketList.includes("London")
console.log(isLondonInList);

