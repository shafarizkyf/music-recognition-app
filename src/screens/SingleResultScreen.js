import React from 'react'
import { 
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Image
} from 'react-native';
import styles from '../helper/Styles';

export default class SingleResultScreen extends React.Component {

  state = {
    data: {
      title: '',
      artist: '',
      spotify: {
        album: {
          images: [
            { url: '' }
          ]
        },
        uri: 'spotify'
      }
    }
  }

  async componentDidMount(){
    const result = await this.props.navigation.getParam('result', this.state.data)
    this.setState({ data: result }) 
  }

  openOnSpotify = () => {
    Linking.openURL(this.state.data.spotify.uri)
  }
  
  render(){
    return (
      <View style={[styles.background, { paddingTop: 65 }]}>
        <View style={{ flex: 2, justifyContent: 'center', backgroundColor: '#fff', borderRadius: 5, elevation: 1 }}>
          <Image 
            source={{ uri: this.state.data.spotify.album.images[0].url }}
            style={[ styles.image250, { height: 200 } ]} 
            />
          <Text style={[ styles.h1, { marginTop: 5 } ]}> { this.state.data.title } </Text>
          <Text style={[ styles.subtitle, { fontSize: 22 } ]}>{ this.state.data.artist }</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TouchableOpacity activeOpacity={ 0.9 } onPress={ () => { this.openOnSpotify() } } >
            <Text style={ styles.mainButton }>Play on Spotify</Text>
          </TouchableOpacity>
        </View>
      </View>
      )
    }
    
  }