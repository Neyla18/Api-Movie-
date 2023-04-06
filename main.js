const API_KEY = "https://api.themoviedb.org/3/trending/all/day?api_key=6f126332dabf92eb00028ace822b9d06";
const API_URL_IMG = "https://image.tmdb.org/t/p/original/"+id;


      async function getRequest() {
      try{
        

        let response = await fetch(API_KEY);
        let data = await response.json();
  
        console.log(data)
        for (let i = 0, l = data.results.length; i < l; i++) {
          let resultat = data.results[i]
    
        
        }
        
      }

   

      catch(error) {
        console.log(error, "erreur");
      }

  }

  getRequest()

 



