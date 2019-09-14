import Network from './Network'

const songRecognitionByUploadFile = async (data) => {
  try {
    const apiUrl = '?return=timecode%2Capple_music%2Cspotify%2Cdeezer%2Clyrics&itunes_country=us';
    return { data } = Network(apiUrl, data, 'POST');
    
  }catch(error) {
    console.log('error at songRecognitionByUploadFile() ', error);
  }
}


const songRecognitionByLyrics = async (data) => {
  try {
    const apiUrl = `findLyrics/?q=${data}`;
    return { data } = Network(apiUrl, data, 'POST');
    
  }catch(error) {
    console.log('error at songRecognitionByLyrics() ', error);
  }
}

const test  = (actions) => {
  console.log(actions)
}

const Audd = {
  songRecognitionByUploadFile,
  songRecognitionByLyrics,
  test
}

export default Audd
