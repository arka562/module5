// STEP 0: Wrap the code in an IIFE to avoid polluting the global scope
(function () {
  // STEP 1: Define a function to fetch data from the server
  function fetchData(url) {
    // Placeholder for fetching data from the server
    console.log('Fetching data from:', url);
  }

  // STEP 2: Define a function to process the retrieved data
  function processData(data) {
    // Placeholder for processing data
    console.log('Processing data:', data);
  }

  // STEP 3: Define a function to populate the home page with a random category
  function populateHomePage(categoryShortName) {
    // Placeholder for populating home page
    console.log('Populating home page with category:', categoryShortName);
  }

  // STEP 4: Fetch data, process it, and populate the home page
  fetchData('https://example.com/api/categories')
    .then(processData)
    .then(function (randomCategoryShortName) {
      populateHomePage(randomCategoryShortName);
    })
    .catch(function (error) {
      console.error('Error fetching data:', error);
    });
})();
