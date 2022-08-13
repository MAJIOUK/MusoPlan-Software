const ps = require("prompt-sync");
const prompt = ps();

//const fs=require('fs');

const { readFileSync } = require('fs');
const { writeFileSync } = require('fs');

const {Musician}=require('./Musician.js');
const {Troupe}=require('./Troupe.js');
const programFunctions = require('./MusoPlanFunctions.js');
const {guitarist}=require('./guitarist.js');
const {bassist}=require('./bassist.js');
const {percussionist}=require('./percussionist.js');
const {flautist}=require('./flautist.js');

let choice=0;

while(true)
{
    if(choice==0)
    {
        //option to display program menu
        console.log('==================');
        console.log('Select your choice');
        console.log('\n\t1. Create musician \n\t2. Create troupe \n\t3. Add musicians to troupe\n\t4. Calculate troupe deployment rate\n\t5. Display troupe summary \n\t6. Display troupe details\n\t7. Read file\n\t8. Write to file\n\t9. Exit');
        choice=prompt('Enter your choice [1, 2, 3, 4, 5, 6, 7, 8, 9] : ');
   
    }
    else if(choice==1)
    {
        //option to create a musician
        programFunctions.addMusician();
        console.log(programFunctions.displayCreatedMusician());
        choice=0;
    }
    else if(choice==2)
    {
        //option to create a troupe
        programFunctions.addTroupe();
        console.log(programFunctions.displayCreatedTroupe());
        choice=0;
    }
    else if(choice==3)
    {
        //option to display created musicains and troupes and to add musicians to a troupe
        console.log(programFunctions.getMusicianList());
        console.log(programFunctions.getTroupeList());
        programFunctions.addMusicianToTroupe();
        choice=0;
    }
    else if(choice==4)
    {
        //option to calculate troupe rate
        var arrTroupeList = programFunctions.getTroupeList();

            for(var i = 0 ; i < arrTroupeList.length ; i++){
                arrTroupeList[i].rateCalculator();
            }
        choice=0;
    }    
    else if(choice==5)
    {
        //option to display troupe summary
        var arrTroupeList = programFunctions.getTroupeList();

            for(var i = 0 ; i < arrTroupeList.length ; i++){
                arrTroupeList[i].troupeSummary();
            }
        choice=0;
    }  
    else if(choice==6)
    {
        //option to display troupe details
        var arrTroupeList = programFunctions.getTroupeList();

            for(var i = 0 ; i < arrTroupeList.length ; i++){
                arrTroupeList[i].troupeDetails();
            }
        choice=0;
    }
    else if(choice==7)
    {
        //option to read a list of troupes from a txt file
        const fileContent = readFileSync('./TroupeList.txt','utf8');
        console.log(fileContent);
        choice=0;
    }
    else if(choice==8)
    {
        //option to write troupe details to a file
        var arrTroupeList = programFunctions.getTroupeList();

            for(var i = 0 ; i < arrTroupeList.length ; i++){
                arrTroupeList[i].writeTroupeDetails();
            }
        choice=0;
    }
    else if(choice==9)
    {
        //exist program
        break;
    }
    else if(choice!=1 || choice!=2 || choice!=2 || choice!=4 || choice!=5 || choice!=6 || choice!=7 || choice!=8 || choice!=9)
    {
        //should you enter any input not in the menu options
        choice=0;
    }

}