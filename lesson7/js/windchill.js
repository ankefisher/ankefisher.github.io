{
    const hightemp = 49;
    const windspeed = 5;
    let windchill = 35.74 + (0.6215 * hightemp) - (35.75 * (windspeed ** .16)) + (0.4275 * hightemp * (windspeed ** .16));
    
     
    if (hightemp <= 50 && windspeed > 3) {
       windchill = Math.round(windchill);
    } else {
       windchill = "N/A";
    }
    document.getElementById('windchill').innerHTML = windchill;
  };

 // used work:
 // http://www.jsmadeeasy.com/javascripts/Calculators/Wind%20Chill%20Calculator/index.htm
 // https://stackoverflow.com/questions/42730125/boy-scout-needing-help-on-javascript-coding
 // https://www.sitepoint.com/community/t/functions-calling-on-other-functions/280970
 // my CIT 160 course material
 // help from the discussion board


