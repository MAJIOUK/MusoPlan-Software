const {guitarist}=require('./guitarist.js');
const {bassist}=require('./bassist.js');
const {percussionist}=require('./percussionist.js');
const {flautist}=require('./flautist.js');
const {Musician}=require('./Musician.js');
const {Troupe}=require('./Troupe.js');

test('Test musician name for 3 to 30 charactoer',()=>{
    musician = new Musician();
    musician.musicianName='san';// setting the value
    expect(musician.musicianName).toEqual('Musician name must have between 3 to 30 characters!');// geting the value
})

test('Test musician name for 3 to 30 charactoer',()=>{
    musician = new Musician();
    musician.musicianName='sandy';// setting the value
    expect(musician.musicianName).toEqual('sandy');// geting the value
})

test('Test musician name for 3 to 30 charactoer',()=>{
    musician = new Musician();
    musician.musicianName='sandilicious';// setting the value
    expect(musician.musicianName).toEqual('sandilicious');// geting the value
})

test('Test musician name for 3 to 30 charactoer',()=>{
   /* expect(() => {*/
    musician = new Musician();
    musician.musicianName='sa';// setting the value
    expect(musician.musicianName).toMatch('Musician name must have between 3 to 30 characters!');// geting the value
})