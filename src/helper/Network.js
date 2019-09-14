import Axios from 'axios';

const Network = async (url, data, method) => {
  try {
    return await Axios({
      method: method,
      // url: `https://api.audd.io/${url}&api_token=test`,
      url: `https://audd.p.rapidapi.com/${url}`,
      data: data,
      crossDomain: true,
      headers: { 
        'Content-Type': 'multipart/form-data',
        'x-rapidapi-host': 'audd.p.rapidapi.com',
        'x-rapidapi-key': 'ab6c99b6ebmshf1f2596a8edcb3dp1acb32jsn5c3dbd33ff09',
        'RapidAPI Project': '5d69c4580a09513032b7fc28',
      }
    });
  }catch(error) {
    console.log('error at network() ', error);
  }
}

export default Network;