const { getJson } = require("serpapi");

const a = "https://scholar.google.com/citations?hl=en&user=z1Kz8gQAAAAJ";
const products = [];  // Define products as an array to store results

getJson({
  api_key: "6e33c9fe7c398a098d5654329fedb47918818c1d4cfe3ea7a8a35b721e1b19d4",
  engine: "google_scholar_profiles",
  hl: "en",
  mauthors: "Mike"
}, (json) => {
  console.log(json);
  products.push(...json.profiles);  // Unpacking profiles into the products array
});

// Correct the check function to return true if any link matches
const check = () => {
  return products.some((ans) => {
    console.log(ans.link);  // Log the link
    return a === ans.link;  // Check if the link matches `a`
  });
}

// Example of calling the check function after some delay (since getJson is asynchronous)
setTimeout(() => {
  const result = check();  // Will print true if a matching link is found, otherwise false
  console.log(result);
}, 2000);  // Adjust the timeout duration as needed to allow time for the async request
