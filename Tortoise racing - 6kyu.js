function race(v1, v2, g) {
  if(v1 >= v2) {
    return null;
  } else {
   let t = g/(v2 - v1);
  
  let hour;
  let min;
  let sec;
  let res = [];

  hour = Math.floor(t);
  min = Math.floor((t-hour)*60);
  sec = (((t-hour)*60) - min)*60;
  if(sec < 59) {
    min = Math.floor((t-hour)*60);
    sec = Math.round((((t-hour)*60) - min)*60);
  } else {
    min = Math.ceil((t-hour)*60);
    sec = 0;
  }
  
  res.push(hour);
  res.push(min);
  res.push(sec);
  
  return res; 
  }
}