const weekday=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        const d=new Date();
        let day= weekday[d.getDay()];
        document.getElementById('datetoday').innerHTML=day;



        const now = new Date();


const hours = now.getUTCHours();
const minutes = now.getUTCMinutes();
const seconds = now.getUTCSeconds();
const milliseconds = now.getUTCMilliseconds();

/* console.log(`${year}-${month}-${dayy} 
            ${hours}:${minutes}:${seconds}.${milliseconds}`); */

            let time=(`${hours}:${minutes}:${seconds}.${milliseconds}`);

            document.getElementById('timenow').innerHTML=time;