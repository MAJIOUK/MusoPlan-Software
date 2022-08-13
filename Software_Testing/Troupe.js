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

        for (let j = 0; j < this.troupeMusician.length; j++) {

            if(j>0)
            {
                if (this.troupeMusician[j-1].musicianName==Musician.musicianName && this.troupeMusician[j-1].instrumentalist==Musician.instrumentalist)
                {
                    this.troupeMusician.pop(Musician)
                    console.log("This musician already exists in the selected troupe")
                    return;
                }
            }           
        }
        console.log('Musician added successfully')
        
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

    // print Troupe details
    troupeDetails() {
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
        
        //loop to aggregate the names of added musicians to a troupe
        for (let j = 0; j < this.troupeMusician.length; j++) {
            
            addedMusicians = addedMusicians.add(this.troupeMusician[j].musicianName)              
            
        }
        //print names of musician in any troupe to console
        console.log("Names of musicians in the troupe: " +Array.from(addedMusicians));

        //loop to introduce each musician, rate, instrumentalist count per loop
        for (let j = 0; j < this.troupeMusician.length; j++) {

            console.log("Musician Intro: " + this.troupeMusician[j].musicianIntro);
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
        console.log("Total no. of musicians: " +addedMusicians.size);
        console.log("Booking Duration (hrs): " + this.troupe_duration);
        console.log("Troupe hourly rate (AUD): "+troupeRate);
        console.log("Cost of troupe deployment (AUD): "+troupeRate*this.troupe_duration);
        console.log("==============================================================================");
    }

    // calculate troupe deployment cost
    rateCalculator() {

        let troupeRate = 0;
        let tname = "";
        let tduration = "";
             
        for (let j = 0; j < this.troupeMusician.length; j++) {

            while(true) {
                if (this.troupe_name == tname){
    
                    if (typeof(tduration) === 'number' && tduration >= 0.5 && tduration <= 3){
        
                        this.troupe_duration = tduration;
                        troupeRate = troupeRate+this.troupeMusician[j].hourlyRate;
                        break;
            
                    }
                    else {
                        tduration=Number(prompt('Enter a number as booking duration (between 0.5 to 3 hours): '))
                    }
                }
                else {
                    tname=prompt('Enter a valid Troupe Name : '); 
                }                   
            }
        }
    
        console.log("====================================================================");
        console.log("Troupe Name: " + this.troupe_name);
            
        console.log("Cost of troupe deployment (AUD): "+troupeRate*this.troupe_duration);
        console.log("====================================================================");
    
    }


    //method to write to file troupe details
    writeTroupeDetails() {
        let troupeRate = 0;

        let guitaristCount = 0;
        let bassistCount = 0;
        let percussionistCount = 0; 
        let flautistCount = 0;

        let addedMusicians = new Set();
        let line1 = ("===============================================================");
        let trpName = "Troupe Name: " + this.troupe_name;
        let trpGenre = "Troupe Genre: " + this.music_genre;

        writeFileSync('./TroupeDetails.txt',line1+'\n' + trpName+'\n' + trpGenre+'\n', { flag: 'w' });
        
        for (let j = 0; j < this.troupeMusician.length; j++) {
            
            addedMusicians = addedMusicians.add(this.troupeMusician[j].musicianName)              
            
        }

        let nameOfMusInTroupe = "Names of musicians in the troupe: " +Array.from(addedMusicians);
        let Interestfact = "Interesting fact: " + this.troupeMusician[j].intFact;
        writeFileSync('./TroupeDetails.txt',nameOfMusInTroupe+'\n' + Interestfact+'\n', { flag: 'a' });

        for (let j = 0; j < this.troupeMusician.length; j++) {

            let MusIntro = "Musician Intro: " + this.troupeMusician[j].musicianIntro;
            writeFileSync('./TroupeDetails.txt',MusIntro+'\n', { flag: 'a' });
            
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
        
        let NoOfGui = "No of Guitarist: " +guitaristCount;
        let NoOfBas = "No of Bassist: " +bassistCount;
        let NoOfPer = "No of Percussionist: " +percussionistCount;
        let NoOfFlau ="No of Flautist: " +flautistCount;
        let TotMus = "Total no. of musicians: " +addedMusicians.size;
        let BkTime = "Booking Duration (hrs): " + this.troupe_duration;
        let TrRate = "Troupe hourly rate (AUD): "+troupeRate;
        let DepCost = "Cost of troupe deployment (AUD): "+troupeRate*this.troupe_duration;
        const fileContent = readFileSync('./TroupeList.txt','utf8');
        let line2 = "==============================================================================";

        writeFileSync('./TroupeDetails.txt',NoOfGui+'\n' + NoOfBas+'\n' + NoOfPer+'\n' + NoOfFlau+'\n' + TotMus+'\n' + BkTime+'\n' + TrRate+'\n' + DepCost+'\n' + fileContent+'\n' + line2+'\n', { flag: 'a' });

        
    }   

}

module.exports = { Troupe };
        
    
