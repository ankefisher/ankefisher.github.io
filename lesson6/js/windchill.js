function windchill (){
    const hightemp = 45;
    const windspeed = 5;
    let windchill = 35.74 + (0.6215 * hightemp) - (35.75 * (windspeed ** .16)) + (0.4275 * hightemp * (windspeed ** .16));
    
     
    if (hightemp <= 50 && windspeed > 3) {
       windchill = Math.round(windchill) + "&#8457";
    } else {
       windchill = "N/A";
    }
    document.getElementById('windchill').innerHTML = windchill;
  };

