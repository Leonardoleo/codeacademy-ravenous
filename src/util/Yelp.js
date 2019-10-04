const apiKey =
  'CD0LL5y-JH6YRVZszOObO_aHkcog5UJhrKzkK8czQvjMvTOt8w9H8e95eVxutNjZ7sS7-d6ASfXjxcYd_91bSmYpyG19c6Q6UrhGfUwfWc5Pndx9sTsE5e9XPiWXXXYx'
const businessSearchUrl = "https://api.yelp.com/v3/businesses/search?"
const corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/"
const headers = {
  headers: {
    Authorization: `Bearer ${apiKey}`
  }
}

const Yelp = {}

function search (term, location, sortBy) {
  return fetch(
    corsAnywhereUrl +
      businessSearchUrl +
      `term=${term}&location=${location}&sort_by=${sortBy}`,
    headers
  )
    .then(response => response.json())
    .then(jsonResponse => {
      // response successful
      if (jsonResponse.business) {
        return jsonResponse.businesses.map()
      }
    })
}
