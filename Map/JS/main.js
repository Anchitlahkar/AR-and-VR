var latitude, longitude
var destination


function initGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success)
    }
    else {
        alert("Sorry, your browser does not support geolocation services...")
    }
}

$(document).ready(function () {
    alert("Please Allow the Device to know your location")
    initGeolocation()
})

function success(position) {
    console.log(position)

    mapboxgl.accessToken =
        "pk.eyJ1IjoiYW5jaGl0bCIsImEiOiJja2Y2b2h0OHcwMmVoMnpwbXptenZmNzUzIn0.TZn8hRitroefx-gmIvJcvQ";

    latitude = position.coords.latitude
    longitude = position.coords.longitude

    var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [longitude, latitude],
        zoom: 16,
    });


    map.addControl(

        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        })
    )

    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        "top-left"
    )
    
    map.on('click', function(e){
        console.log(e)
        destination = e.lngLat;
    })
}

$(function(){
    $("#navigate-button").click(function(){
        window.location.href=`ar_navigation.html?source=${latitude};${longitude}&destination=${destination.lat};${destination.lng}`
    })
})

// www.example.com/index?arg1=1&arg2=2&arg3=3