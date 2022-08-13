const {guitarist}=require('./guitarist.js');
const {bassist}=require('./bassist.js');
const {percussionist}=require('./percussionist.js');
const {flautist}=require('./flautist.js');
const {Musician}=require('./Musician.js');
const {Troupe}=require('./Troupe.js');

test('Test troupe name for 3 to 30 characters',()=>{
    troupe = new Troupe();
    troupe.troupeName='tr';// setting the value
    expect(troupe.troupeName).toEqual("troupe name must have between 3 to 30 characters!");// geting the value
})

test('Test troupe name for 3 to 30 characters',()=>{
    troupe = new Troupe();
    troupe.troupeName='tro';// setting the value
    expect(troupe.troupeName).toEqual("troupe name must have between 3 to 30 characters!");// geting the value
})

test('Test troupe name for 3 to 30 characters',()=>{
    troupe = new Troupe();
    troupe.troupeName='trooperlicious';// setting the value
    expect(troupe.troupeName).toEqual('trooperlicious');// geting the value
})

test('Test troupe name for 3 to 30 characters',()=>{
   /* expect(() => {*/
    troupe = new Troupe();
    troupe.troupeName='trooper';// setting the value
    expect(troupe.troupeName).toMatch('trooper');// geting the value
})


test('Test troupe booking time should be between 0.5 to 3 hours',()=>{
     troupe = new Troupe();
     troupe.troupeDuration='trooper';// setting the value
     expect(troupe.troupeDuration).toMatch('troupe minimum duration must be between 0.5 to 3 hours!');// geting the value
 })

 test('Test troupe booking time should be between 0.5 to 3 hours',()=>{
     troupe = new Troupe();
     troupe.troupeDuration='.49';// setting the value
     expect(troupe.troupeDuration).toMatch('troupe minimum duration must be between 0.5 to 3 hours!');// geting the value
 })

 test('Test troupe booking time should be between 0.5 to 3 hours',()=>{
     troupe = new Troupe();
     troupe.troupeDuration='0.5';// setting the value
     expect(troupe.troupeDuration).toEqual('0.5');// geting the value
 })

 test('Test troupe booking time should be between 0.5 to 3 hours',()=>{
    troupe = new Troupe();
    troupe.troupeDuration='2.5';// setting the value
    expect(troupe.troupeDuration).toEqual('2.5');// geting the value
})


test('Test music genre',()=>{
    troupe = new Troupe();
    troupe.musicGenre='pop';// setting the value
    expect(troupe.musicGenre).toEqual('pop');// geting the value
})

test('Test music genre',()=>{
    troupe = new Troupe();
    troupe.musicGenre='jazz';// setting the value
    expect(troupe.musicGenre).toEqual('jazz');// geting the value
})

test('Test music genre',()=>{
    troupe = new Troupe();
    troupe.musicGenre='rock';// setting the value
    expect(troupe.musicGenre).toEqual('rock');// geting the value
})

test('Test music genre',()=>{
   troupe = new Troupe();
   troupe.musicGenre='2.5';// setting the value
   expect(troupe.musicGenre).toMatch('genre should be from pop, rock or jazz!');// geting the value
})

test('Testing add musician to troupeMusician',()=>{
    musician = new Musician();
    musician.musicianName='sandy';
    musician.hourlyRate='52';
    musician.instrumentalist='bassist';
    musician.intFact=musician.instrumentalist;
    musician.musicianIntro=musician.musicianName+" is a "+musician.instrumentalist;

    troupe = new Troupe();
    troupe.troupeName='trooper'
    troupe.troupeDuration='2.5'
    troupe.musicGenre='rock';// setting the value

    troupe.addMusician(Musician);
    expect(troupe.troupeMusician.length).toBe(1);// geting the value
 })

 test('Testing add musician to troupeMusician',()=>{
    musician = new Musician();
    musician.musicianName='sandy';
    musician.hourlyRate='52';
    musician.instrumentalist='bassist';
    musician.intFact=musician.instrumentalist;
    musician.musicianIntro=musician.musicianName+" is a "+musician.instrumentalist;

    troupe = new Troupe();
    troupe.troupeName='trooper'
    troupe.troupeDuration='2.5'
    troupe.musicGenre='rock';// setting the value

    troupe.addMusician(Musician);
    expect(troupe.troupeDetails()).toMatch("Booking Duration (hrs): " + troupe.troupeDuration);// geting the value
 })

 