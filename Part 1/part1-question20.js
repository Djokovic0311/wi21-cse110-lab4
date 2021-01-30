function getTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
  }
  
ssetInterval(getTime, 1000);