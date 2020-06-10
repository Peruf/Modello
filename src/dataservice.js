import axios from 'axios'

export default{
    getGames(limit){  //le chiamate sono asincrone
        return axios.get("https://www.boardgameatlas.com/api/search?limit=" + (limit || 20) + "&client_id=vuxWmH7cLW"); 
     },
    getGame(name){
        return axios.get("https://www.boardgameatlas.com/api/search?name=" + name + "&client_id=vuxWmH7cLW");
    },
    searchGame(text){
        if(text.length < 2 || !text){
            //se il valore è minore di 3 o non esiste il testo restituiamo una promive con un array vuoto
            return new Promise(resolve => {
                resolve([]);
            })
        }else{
        return axios.get("https://www.boardgameatlas.com/api/search?client_id=vuxWmH7cLW").then(data => {
            //se la string text corrisponde all'inizio del nome del pokemon allora torno l'elemento, indexOf ritorna il primo indice a cui c'è l'elemento passato
            var i;
            console.log(text)
            for(i = 0; i< data.data.games; i++)
                return data.data.games[i].name.filter((element => element.name.indexOf(text) == 0)).map(element => element.name);
            
        });}
    }
}