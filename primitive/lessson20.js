let animes=[
    {title:'One piece',seasons:1,year:1999},
    {title:'Naruto',seasons:2,year:2002},
    {title:'Bleach',seasons:1,year:2002},
    {title:'Haikyu',seasons:1,year:2001},
    {title:'Demon slayer',seasons:2,year:2016},
    
]
//animes=animes.filter(anime=>anime.title!='Naruto')
/* console.log(
    animes.indexOf(
        animes.find(anime=>anime.title=='Naruto')
    )
) */
/* console.log(
    animes.splice(2,1)
)
console.log(animes) */

const animeTitles=animes.map((anime)=>{
    //console.log(anime.title ,anime.year)
    return anime.title
})
//console.log(animeTitles)

// 
const movie={
    title:'Spiderman:no way home',
    year:2021,
    imdb:8.7,
    actors:['Tom Holland','Zendaya','Battlefield Cucumber'],
}

//console.log(movie)
delete movie.imdb 



const numbers=[1,2,3,4,5,6,7,8,'neobis']
//console.log(numbers.slice(4,9))
//console.log(numbers.splice(4,1,0))// splice deletes elements from massive
//console.log(numbers.indexOf(7))
const cat1 = {
    name: 'Altyn',
    age: 2,
    pawsQty: 4,
    meow: function() {
      console.log('meow meow')
    }
}
console.log(cat1)
  
  
class Cat {
    constructor(name = 'No name', age = 0, pawsQty = 4) {
      this.name = name
      this.age = age
      this.pawsQty = pawsQty
    }
  
    meow = function() {
      console.log('meow')
    }
}
  
const cat2 = new Cat('Altyn', 2, 4)
console.log(cat2)
  
const cat3 = new Cat('Barsik', 5, 3)
console.log(cat3)
 
const cat4 = new Cat()
console.log(cat4)


