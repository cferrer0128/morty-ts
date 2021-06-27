
import axios from "axios";
export class DataService{

    static url = 'https://rickandmortyapi.com/api/character';
   
    static async list(){
         const resp = await axios.get(this.url);
         return resp.data.results;
    }
}


  
  