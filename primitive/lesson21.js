class Movie {
    constructor(title='',year=0,country=''){
        this.title=title
        this.year=year
        this.country=country
        this.type= year<new Date().getFullYear()? 'old movie':'new movie'
    }

    info=()=>console.log(this.type + ' '+this.title+' '+this.year+" byl vypushen v "+this.country)
    type='фильм'
    
}
const spiderman1=new Movie('Человек-паук',2001,'usa')
spiderman1.info()
//console.log(spiderman1)

const homeAlone1=new Movie('odin doma',1998,'usa')
homeAlone1.info()


class tvShow extends Movie{
    constructor (title,year,country,seasonQty=0){
        super(title,year,country)
        this.seasonQty=seasonQty
    }
    type='series'
}
const bigBangTheory=new tvShow('bigbang theory',1999,'usa',13)
bigBangTheory.info()
console.log(bigBangTheory)

class Anime extends Movie{
    constructor(title,year,country,isWatched=''){
        super(title,year)
        this.country='japan'
        this.isWatched=isWatched
    }
    type='anime'
}
const eva=new Anime('EVangelion',1999,undefined,'yes')
console.log(eva)
eva.info()





