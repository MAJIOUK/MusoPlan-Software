const ps = require("prompt-sync");
const prompt = ps();

//imported classes
const { Musician } = require('./Musician.js');
const {guitarist}=require('./guitarist.js');
const {bassist}=require('./bassist.js');
const {percussionist}=require('./percussionist.js');
const {flautist}=require('./flautist.js');

const { readFileSync } = require('fs');
const { writeFileSync } = require('fs');


//defining the troupe class
class Troupe {

    troupeMusician = new Array();

    set troupeName(tname) {
        this.troupe_name = tname;
    }
    get troupeName() {
        return this.troupe_name;
    }
    set troupeDuration(tDuration) {
        this.troupe_duration = tDuration;
    }
    get troupeDuration() {
        return tDuration;
    }

    set musicGenre(mGenre){
        this.music_genre=mGenre;
    }
    get musicGenre()
    {
        return this.music_genre;
    }

    //Add Musicians to Troupe 
    addMusician(Musician) {
        this.troupeMusician.push(Musician);
    }


    troupeSummary() {
        //initializing variables used in the loops below
        let troupeRate = 0;
        let guitaristCount = 0;
        let bassistCount = 0;
        let percussionistCount = 0; 
        let flautistCount = 0;
        let addedMusicians = new Set();

        //print troupe name and genre to console
        console.log("===============================================================");
        console.log("Troupe Name: " + this.troupe_name);
        console.log("Troupe Genre: " + this.music_genre);
        
       //loop to introduce each musician, rate, instrumentalist count per loop
        for (let j = 0; j < this.troupeMusician.length; j++) {

            console.log("Interesting fact: " + this.troupeMusician[j].intFact);
            
            troupeRate = troupeRate+this.troupeMusician[j].hourlyRate


            if (this.troupeMusician[j].instrumentalist=="guitarist"){
                let j = 1;
                guitaristCount = guitaristCount + j
            }
            if (this.troupeMusician[j].instrumentalist=="bassist"){
                let j = 1;
                bassistCount = bassistCount + j
            }
            if (this.troupeMusician[j].instrumentalist=="percussionist"){
                let j = 1;
                percussionistCount = percussionistCount + j
            }
            if (this.troupeMusician[j].instrumentalist=="flautist"){
                let j = 1;
                flautistCount = flautistCount + j
            }              
        }
        
        console.log("No of Guitarist: " +guitaristCount);
        console.log("No of Bassist: " +bassistCount);
        console.log("No of Percussionist: " +percussionistCount);
        console.log("No of Flautist: " +flautistCount);
        console.log("Booking Duration (hrs): " + this.troupe_duration);
        console.log("Troupe hourly rate (AUD): "+troupeRate);
        console.log("==============================================================================");
    }

}
        
    
