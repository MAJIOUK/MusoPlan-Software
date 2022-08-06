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