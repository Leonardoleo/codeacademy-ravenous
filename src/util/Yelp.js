const apiKey =
  "CD0LL5y-JH6YRVZszOObO_aHkcog5UJhrKzkK8czQvjMvTOt8w9H8e95eVxutNjZ7sS7-d6ASfXjxcYd_91bSmYpyG19c6Q6UrhGfUwfWc5Pndx9sTsE5e9XPiWXXXYx";
const businessSearchUrl = "https://api.yelp.com/v3/businesses/search?";
const corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";
const headers = {
  headers: {
    Authorization: `Bearer ${apiKey}`
  }
};

/**
 * A generic response to provide to the user when unexpecte things go wrong
 */
const genericErrorResponse = {
  error: {
    code: "GENERIC",
    description: "Could not execute search, Please try again."
  }
};

const Yelp = {
  /**
   * Search the Yelp "Business Search" endpoint
   * - API returns basic business information - Up to 1000 businesses
   * @param {string} term term/category to use during search
   * @param {string} location Area to be used when searching for businesses
   * @param {string} sortBy best_match, rating, review_count
   * @returns Array of business objects
   */
  search: (term, location, sortBy) => {
    return fetch(
      corsAnywhereUrl +
        businessSearchUrl +
        `term=${term}&location=${location}&sort_by=${sortBy}`,
      headers
    )
      .then(response => response.json())
      .then(jsonResponse => {
        // at least one business = response successful
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              name: business.name,
              imageSrc: business.image_url,
              location: {
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code
              },
              category: business.categories.title,
              rating: business.rating,
              reviewCount: business.review_count
            };
          });
          /**
           * Re-use Yelp error messages & Pass through to the client.
           * @todo Implement a better framework to handle Yelp errors
           */
        } else if (jsonResponse.error) {
          return jsonResponse;
        } else {
          return genericErrorResponse;
        }
      });
  }
};

export default Yelp;
