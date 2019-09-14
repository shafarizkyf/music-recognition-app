import React from 'react'
import { 
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

const GridAlbum = (props) => {
  return (
    <TouchableOpacity style={{ margin: 10, width: 140 }} activeOpacity={ 0.9 } onPress={ () => props.onPress() } >
      <Image source={ props.image } style={{ width: 140, height: 140, }} />
      <Text style={{ fontWeight: 'bold' }}>{ props.title }</Text>
      <Text>{ props.subtitle }</Text>
    </TouchableOpacity>
  )
}

export default GridAlbum