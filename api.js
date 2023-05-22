import axios from 'axios';

const searchImages = async (term)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Autohorization:'Client-ID dCDSq-fArPczlWx-4hgU_tN4WAMQmq58Z-hb9tT2iQw'
      },
      params:{
        query:term
      }


    })
    return response.data.results;
}
export default searchImages;        