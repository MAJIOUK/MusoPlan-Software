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
        this.musician_name=mname
    }
    get musicianName()
    {
        return this.musician_name;
    }

    set musicianIntro(mus_intro)
    {
        this.musician_introduction=mus_intro;
    }
    get musicianIntro()
    {
        return this.musician_introduction;
    }

    set hourlyRate(hRate)
    {
        this.hourly_Rate=hRate;
    }
    get hourlyRate()
    {
        return this.hourly_Rate;
    }

    set intFact(int_fact)
    {
        this.interesting_fact=int_fact;
    }
    get intFact()
    {
        return this.interesting_fact;
    }

    set instrumentalist(instru_type)
    {
        this.instrument=instru_type;
    }
    get instrumentalist()
    {
        return this.instrument;
    }
}
module.exports={Musician};