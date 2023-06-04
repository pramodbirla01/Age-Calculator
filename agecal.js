function calculate() {
    setInterval(()=>{
        //Input Birth date
        let birthdate = new Date(document.getElementById('birthdate').value);
     
        //GetTime: return number of milisecond
        let now = new Date();
        let ageInMs = now.getTime() - birthdate.getTime();

        let ageInS = ageInMs/1000;  //to second
        let ageInMin = ageInS/60; //to minutes
        let ageInHr = ageInMin/60; //to hour
        let ageInDays= ageInHr/24; //to Days
        let ageInMonth = ageInDays/30.4375; //to month
        let ageInYear = ageInMonth/12; //to Years

        document.querySelector('#years').innerHTML=Math.floor(ageInYear);
        document.querySelector('#months').innerHTML=Math.floor(ageInMonth%12);
        document.querySelector('#days').innerHTML=Math.floor(ageInDays%30.4375);
        document.querySelector('#hours').innerHTML=Math.floor(ageInHr%24);
        document.querySelector('#minutes').innerHTML=Math.floor(ageInMin%60);
        document.querySelector('#seconds').innerHTML=Math.floor(ageInS%60);
        
          
        },1000);
    }
        function reset() {
            window.location.reload();
            
        }
    
