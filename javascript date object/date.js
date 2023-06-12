let d = new Date();
console.log(d);
// Get Date
console.log(d.getDate()) // 1-31
// Get Montht
console.log(d.getMonth()+1) // 0-11
// Get Year
console.log(d.getFullYear()) // returns current year
// Get Date
console.log(d.getHours()) // returns hours 0-23
// Get Date
console.log(d.getMinutes()) // returns minutes 0-59
// Get Date
console.log(d.getSeconds()) // returns seconds 0-59
// Get Date
console.log(d.getMilliseconds()) // returns miliseconds 0-59


function showTime() 
{
    let date = new Date();
    let d = date.getDate()+1;
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let h = date.getHours()+1;
    let minute = date.getMinutes()+1;
    let seconds = date.getSeconds()+1;
    if(d<10) 
    {
        d="0"+d;
    } 
    if(month<10) 
    {
        month="0"+month;  
    }
   if(h<10)
   {
        h="0"+h;
   }
   if(minute<10)
   {
    minute="0"+minute;
   }
   if(seconds<10)
   {
    seconds="0"+seconds;
   }
    

    document.getElementById("dc").innerHTML=d+"."+month+"."+year;
    document.getElementById("dch").innerHTML=h+":"+minute+":"+seconds;
    setTimeout(showTime, 1000);

}

showTime();
