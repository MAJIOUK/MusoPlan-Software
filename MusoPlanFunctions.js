const ps = require("prompt-sync");
const prompt = ps();

const {Musician}=require('./Musician.js');
const {Troupe}=require('./Troupe.js');
const {guitarist}=require('./guitarist.js');
const {bassist}=require('./bassist.js');
const {percussionist}=require('./percussionist.js');
const {flautist}=require('./flautist.js');

const { readFileSync } = require('fs');
const { writeFileSync } = require('fs');

var musicianList=new Array();
var troupeList=new Array();

//function to define a musician and compile musician list
function addMusician(){

    let mus_name = "";
    let experienceYears = ""; 
    let ratePerHour = "";
    let fact = "";

    while(true)
    {
        if(mus_name.length > 3 && mus_name.length < 30)
        {
            if(typeof(experienceYears) === 'number' && experienceYears > 0)
            {
                // ratePerHour in AUD
                if(ratePerHour > 50)
                {
                    console.log('================================================================');
                    console.log('Select musician type:');
                    console.log('\t1. Guitarist\n\t2. Bassist\n\t3. Percussionist\n\t4. Flautist ');
                    musicianType=prompt('Enter the type of musician: ');
        
                    if(musicianType.toLowerCase()=="guitarist")
                    {
                        const musFact = new guitarist();
                        fact = musFact.displayInterestingFact();;
                        break;
                    }
                    else if(musicianType.toLowerCase()=="bassist")
                    {
                        const musFact = new bassist();
                        fact = musFact.displayInterestingFact();
                        break;
                    }
                    else if(musicianType.toLowerCase()=="percussionist")
                    {
                        const musFact = new percussionist();
                        fact = musFact.displayInterestingFact();
                        break;
                    }
                    else if(musicianType.toLowerCase()=="flautist")
                    {
                        const musFact = new flautist();
                        fact = musFact.displayInterestingFact();
                        break;
                    }
                }
                else
                {
                    ratePerHour=Number(prompt("Enter musician's hourly rate (should be above 50 AUD): "));
                } 
            }
            else
            {
                experienceYears=Number(prompt("Enter musician's years of playing: "));
            }
        }
        else
        {
            mus_name=prompt('Enter musician name (between 3 to 30 characters): ');
        }
    }
        
    const mus=new Musician();
    mus.musicianName = mus_name;
    mus.instrumentalist = musicianType;
    mus.careerLength = experienceYears;
    mus.hourlyRate = ratePerHour;
    mus.musicianIntro = mus_name+" is a "+musicianType
    mus.interesting_fact = fact;

    musicianList.push(mus);
}

//function to fetch musician list
function getMusicianList(){
    return musicianList;
}

//function to define a troupe and compile troupe list
function addTroupe(){

    let tname = "";
    let tduration = "";
    let genre = "";
    
    while(true)
    {
        if(tname.length > 3 && tname.length < 30)
        {
            if(tduration >= 0.5 && tduration <= 3)
            {
                if(genre.toLowerCase()=="rock" || genre.toLowerCase()=="jazz" || genre.toLowerCase()=="pop")
                {
                    break;           
                }
                else
                {
                    console.log('================================================================');
                    console.log('Select music genre:');
                    console.log('\tValid genre types\n\t- rock\n\t- jazz\n\t- pop');
                    genre=prompt('type in a genre from the list above: ');
                }
            }
            else
            {
                tduration=Number(prompt('Enter booking duration (between 0.5 to 3 hours): '));
            } 

        }
        else 
        {
            tname=prompt('Enter troupe name (between 3 to 30 characters): ');
        }
    }

    const trou=new Troupe();
    trou.troupeName=tname;
    trou.troupeDuration=tduration;
    trou.musicGenre=genre;

    troupeList.push(trou);
}