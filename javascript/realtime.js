function realtime_display() {
  // time that is realtime
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    //  second: "2-digit",
    hour12: true,
  });

  const date=now.toDateString("en-GB",{
    day:"2-digit",
    month:"short",
    year:"numeric"
  })

  document.getElementById("clock").textContent =`[  `+time+' ]' ;
  document.getElementById("my_date").textContent=date+` [ `+time+' ]';
}

setInterval(realtime_display,1000)
realtime_display();
