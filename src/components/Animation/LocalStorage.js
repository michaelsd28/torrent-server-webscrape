export   var localOBJ ={
    movies:[],
    magnet:[],
    seeds:[],
    size:[],
    subtype:[],
    type:[]
  }
  

  !localStorage.getItem("data") && localStorage.setItem("data",JSON.stringify(localOBJ))
  

   export  const localData =  JSON.parse( localStorage.getItem("data"))



//   console.log(localData ,"localData")















  /* suggestion */

  !localStorage.getItem("suggestion") && localStorage.setItem("suggestion",JSON.stringify( []))

export var suggestion = JSON.parse (localStorage.getItem("suggestion").split(","));


export const filter_suggestion = suggestion.filter(
    (item,index)=> suggestion.indexOf(item)===index)
    localStorage.setItem("suggestion",JSON.stringify(filter_suggestion))

    localStorage.setItem("suggestion",JSON.stringify(filter_suggestion))

