import React from 'react'
import { 
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Image,
  ScrollView
} from 'react-native';
import styles from '../helper/Styles';
import Colors from '../helper/Colors';
import GridAlbum from '../components/GridAlbum';

export default class GridResultScreen extends React.Component {

  state = {
    data: []
  }

  async componentDidMount(){
    const result = await this.props.navigation.getParam('result', this.state.data)
    this.setState({ data: result }) 
  }

  openToSpotify(uri){
    console.log('open to spotify', uri)
  }
  
  render(){
    return (
      <View style={ styles.background }>
        <Text style={{ width: '75%', fontSize: 24, color: Colors.purple, fontWeight: '700', marginBottom: 10, marginTop: 30 }}>
          Lagu berdasarkan lirik yang kamu tuliskan
        </Text>
        <ScrollView showsVerticalScrollIndicator={ false }>
          <View style={ styles.rowGrid }>
            {
              this.state.data.map((song) => {
                return <GridAlbum
                  key={ song.song_id } 
                  title={ song.title }
                  subtitle={ song.artist }
                  image={ require('../../assets/images/dvd.jpg') } 
                  onPress={ () => null }
                />
              })
            }
          </View>
        </ScrollView>
      </View>
      )
    }
    
  }