const {guitarist}=require('./guitarist.js');
const {bassist}=require('./bassist.js');
const {percussionist}=require('./percussionist.js');
const {flautist}=require('./flautist.js');

//defining the musician class
class Musician{

    set careerLength(expyrs)
    {
        this.career_length=expyrs;
    }
    get careerLength()
    {
        return this.career_length;
    }

    set musicianName(mname)
    {
        if (mname.length > 3 && mname.length < 30)
        {
            this.musician_name=mname;
        }
        else
        {
            this.musician_name='Musician name must have between 3 to 30 characters!'
            return this.musician_name;
        }    
    }
    get musicianName()
    {
        return this.musician_name;
    }

    set musicianIntro(mus_intro)
    {
        this.musician_introduction=this.musician_name+" is a "+this.instrument;
    }
    get musicianIntro()
    {
        return this.musician_introduction;
    }

    set hourlyRate(hRate)
    {
        if(hRate > 50)
        {
            this.hourly_Rate=hRate;
        }
        else
        {
            this.hourly_Rate='hourly rate must be > 50!'
            return this.hourly_Rate;
        }           
    }
    get hourlyRate()
    {
        return this.hourly_Rate;
    }

    set intFact(instru_type)
    {
        if(instru_type.toLowerCase()=="guitarist")
        {
            const musFact = new guitarist();
            this.interesting_fact = musFact.displayInterestingFact();;
        }
        else if(instru_type.toLowerCase()=="bassist")
        {
            const musFact = new bassist();
            this.interesting_fact = musFact.displayInterestingFact();
        }
        else if(instru_type.toLowerCase()=="percussionist")
        {
            const musFact = new percussionist();
            this.interesting_fact = musFact.displayInterestingFact();
        }
        else if(instru_type.toLowerCase()=="flautist")
        {
            const musFact = new flautist();
            this.interesting_fact = musFact.displayInterestingFact();
        }
        else
        {
            this.interesting_fact='Enter a valid musician type!'
            return this.interesting_fact;
        }    
    }
    get intFact()
    {
        return this.interesting_fact;
    }

    set instrumentalist(instru_type)
    {
        if (instru_type=="bassist" || instru_type=="flautist"|| instru_type=="guitarist"|| instru_type=="percussionist")
        {
            this.instrument=instru_type;
        }
        else
        {
            this.instrument='Musician type must be from bassist, flautist, guitarist or percussionist!'
            return this.instrument;
        }   
    }
    get instrumentalist()
    {
        return this.instrument;
    }
}
module.exports={Musician};