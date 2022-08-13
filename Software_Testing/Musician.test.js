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

test("Test musician's years of playing",()=>{
    musician = new Musician();
    musician.hourlyRate='52';// setting the value
    expect(musician.hourlyRate).toEqual('52');// geting the value
})

test("Test musician's years of playing",()=>{
    musician = new Musician();
    musician.hourlyRate='51';// setting the value
    expect(musician.hourlyRate).toEqual('51');// geting the value
})

test("Test musician's years of playing",()=>{
    musician = new Musician();
    musician.hourlyRate='60';// setting the value
    expect(musician.hourlyRate).toEqual('60');// geting the value
})

test("Test musician's years of playing",()=>{
    musician = new Musician();
    musician.hourlyRate='49';// setting the value
    expect(musician.hourlyRate).toEqual('hourly rate must be > 50!');// geting the value
})

test("Test musician type",()=>{
    musician = new Musician();
    musician.instrumentalist='bassist';// setting the value
    expect(musician.instrumentalist).toEqual('bassist');// geting the value
})

test("Test musician type",()=>{
    musician = new Musician();
    musician.instrumentalist='percussionist';// setting the value
    expect(musician.instrumentalist).toEqual('percussionist');// geting the value
})

test("Test musician type",()=>{
    musician = new Musician();
    musician.instrumentalist='guitarist';// setting the value
    expect(musician.instrumentalist).toEqual('guitarist');// geting the value
})

test("Test musician type",()=>{
    musician = new Musician();
    musician.instrumentalist='pianist';// setting the value
    expect(musician.instrumentalist).toEqual('Musician type must be from bassist, flautist, guitarist or percussionist!');// geting the value
})


test("Test interesting fact",()=>{
    musician = new Musician();
    musician.instrumentalist='bassist';// setting the value

    musician.intFact=musician.instrumentalist;
    expect(musician.intFact).toEqual("Everyone loves a bassist");// geting the value
})

test("Test interesting fact",()=>{
    musician = new Musician();
    musician.instrumentalist='guitarist';// setting the value

    musician.intFact=musician.instrumentalist;
    expect(musician.intFact).toEqual("The more strings you have, the better you are");// geting the value
})

test("Test interesting fact",()=>{
    musician = new Musician();
    musician.instrumentalist='flautist';// setting the value

    musician.intFact=musician.instrumentalist;
    expect(musician.intFact).toEqual("1989 heavy metal instrument of the year");// geting the value
})

test("Test interesting fact",()=>{
    musician = new Musician();
    musician.instrumentalist='pianist';// setting the value

    musician.intFact=musician.instrumentalist;
    expect(musician.intFact).toEqual('Enter a valid musician type!');// geting the value
})

test("Test interesting fact",()=>{
    musician = new Musician();
    musician.instrumentalist='percussionist';// setting the value

    musician.intFact=musician.instrumentalist;
    expect(musician.intFact).toEqual("Me drum");// geting the value
})

test("Test musician type",()=>{
    musician = new Musician();
    musician.musicianName='sandy';// setting the value

    musician.instrumentalist='flautist';// setting the value

    musician.musicianIntro=musician.musicianName+" is a "+musician.instrumentalist;
    expect(musician.musicianIntro).toEqual("sandy is a flautist");// geting the value
})

test("Test musician type",()=>{
    musician = new Musician();
    musician.musicianName='lilly';// setting the value

    musician.instrumentalist='guitarist';// setting the value

    musician.musicianIntro=musician.musicianName+" is a "+musician.instrumentalist;
    expect(musician.musicianIntro).toEqual("lilly is a guitarist");// geting the value
})

test("Test musician type",()=>{
    musician = new Musician();
    musician.musicianName='Lilly';// setting the value

    musician.instrumentalist='bassist';// setting the value

    musician.musicianIntro=musician.musicianName+" is a "+musician.instrumentalist;
    expect(musician.musicianIntro).toEqual("Lilly is a bassist");// geting the value
})

test("Test musician type",()=>{
    musician = new Musician();
    musician.musicianName='Lil';// setting the value

    musician.instrumentalist='pianist';// setting the value

    musician.musicianIntro=musician.musicianName+" is a "+musician.instrumentalist;
    expect(musician.musicianIntro).toEqual("Musician name must have between 3 to 30 characters! is a Musician type must be from bassist, flautist, guitarist or percussionist!");// geting the value
})


test("Test number of playing years",()=>{
    musician = new Musician();
    musician.careerLength='2';// setting the value
    expect(musician.careerLength).toEqual('2');// geting the value
})

test("Test musician type",()=>{
    musician = new Musician();
    musician.careerLength='4';// setting the value
    expect(musician.careerLength).toEqual('4');// geting the value
})


