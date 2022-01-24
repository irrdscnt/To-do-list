/* const arr1=[1,2,3,true,false,null,Infinity,[1,2,3],{NAME:'ADOET'}]

const arr2=arr1.map(function(el){
    console.log(el)
    return el
})

console.log(arr2) */
/* const numbers=[1,2,3,4,5]
console.log(numbers.includes(2))
console.log(numbers.includes(6)) */

/* const a='ac/dc'
console.log(a.includes('/')) */
/* const numbers=[1,5,3,8,6,2,7,9,2,10]
const numbersSorted=numbers.sort((a,b)=>a-b)// mozhno prosto uzat' sort()
console.log(numbersSorted) */


const movies=[
    {title:'Spiderman no way home',year:2021},
    {title:'Avengers:Age of ultron',year:2015},
    {title:'Spiderman',year:2001},
    {title:'Venom:lets there be carnage',year:2021},
    {title:'Avengers',year:2012},
    {title:'Venom',year:2019},

]

const moviesSorted = movies.sort((a,b)=>a.title<b.title? -1: 1)// sort po alfavitu esli a<b
console.log(moviesSorted)



/* const avengersMovies=movies.filter(movie=>movie.title.includes('Avengers'))
console.log(avengersMovies) */

/* const venomMovie=movies.find(movie=>movie.title.toLocaleLowerCase().includes('venom'))
console.log(venomMovie) */





/* const moviesTitles=movies.map((movie)=>movie.title)
console.log(moviesTitles) */
/* const thisYearMovie=movies.filter((movie)=>movie.year>2020)
console.log(thisYearMovie) */





