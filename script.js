const geoLocation = navigator.geolocation

geoLocation.getCurrentPosition((position) => {

  	let lat = position.coords.latitude;
  	let long = position.coords.longitude;

  console.log(lat,long)

})
