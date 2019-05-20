const newTravellerURL = 'http://localhost:4000/travellers'
const travellerLoginURL = 'http://localhost:4000/login'
const newPostURL = 'http://localhost:4000/posts'
const newTripURL = 'http://localhost:4000/trips'

export const adapter = {
  createTraveller: travellerData => {
    return fetch(newTravellerURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ traveller: travellerData })
    }).then(res => res.json())
  },

  travellerLogin: (loginData) => {
    return fetch(travellerLoginURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
      .then(res => res.json())
  },

  createPost: (postData) => {
    return fetch(newPostURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      .then(res => res.json())
  },

  createTrip: (tripDate) => {
    return fetch(newTripURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(tripDate)
    })
      .then(res => res.json())
  },
  deletePost: () => {
    // fetch delete post action

  },

  deleteTrip: () => {
    // fetch delete trip action

  },
  deleteTraveller: () => {
    // fetch to the delete traveller action
  }
}// end of the Adapter
