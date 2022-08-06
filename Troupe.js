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

}
        
    
