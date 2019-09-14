import React from 'react'
import { 
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert
} from 'react-native';
import FilePickerManager from 'react-native-file-picker';
import Audd from '../helper/Audd';
import styles from '../helper/Styles';
import Colors from '../helper/Colors';

const SearchByUpload = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity activeOpacity={ 0.9 } onPress={ () => props.onPress() } >
        <Text style={ styles.mainButton }>Upload file potongan lagu</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={ 0.9 } onPress={ () => props.switchSearch() }>
        <Text style={ styles.mainLink }>Kenali lagu dengan lirik</Text>
      </TouchableOpacity>
    </View>
  )
}

const SearchByLyrics = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <TextInput 
        style={ styles.mainTextInput } 
        onChangeText={ (value) => props.onChangeText(value) } 
        onSubmitEditing={ () => props.onSubmitEditing() }
        placeholder="Big boys don't cry"
        placeholderTextColor={ Colors.softPurple } 
      />
      <TouchableOpacity activeOpacity={ 0.9 } onPress={ () => props.switchSearch() }>
        <Text style={ styles.mainLink }>Kenali lagu dengan upload file</Text>
      </TouchableOpacity>
    </View>
  )
}

export default class HomeScreen extends React.Component {
  
  static navigationOptions = {
    header: null
  }

  state = {
    lyrics: null,
    searchByUpload: true
  }

  filePicker = () => {
    FilePickerManager.showFilePicker(null, (response) => {
      console.log('filePicker() file selected: ', response);

      if(!response.didCancel){
        const soundData = {
          uri: response.uri,
          name: response.fileName && 'file.mp3',
          type: response.type  
        };
    
        const formData = new FormData();
        formData.append('file', soundData);
  
        this.uploadData(formData);
      }  
  
    });
  }
  
  uploadData = async (formData) => {  
    try {
      const { data } = await Audd.songRecognitionByUploadFile(formData)
      console.log('uploadData(): ', data);
  
      if(data.status == 'success'){
        this.props.navigation.navigate('SingleResultScreen', { result: data.result });

      }else{
        Alert.alert('Ups!', 'Tidak dapat mendapatkan data lagu')
      }
    
    }catch (error) {
      console.log('error', error);
    }
  }

  searchByLyrics = async () => {
    try {
      const { data } = await Audd.songRecognitionByLyrics(this.state.lyrics)
      console.log('searchByLyrics(): ', data);
  
      if(data.status == 'success'){
        this.props.navigation.navigate('GridResultScreen', { result: data.result });

      }else{
        Alert.alert('Ups!', 'Tidak dapat mendapatkan data lagu')
      }
    
    }catch (error) {
      console.log('error', error);
    }

  }

  switchSearch = () => {
    this.setState({ searchByUpload: !this.state.searchByUpload});
  }

  render(){
    return (
      <View style={ styles.background }>
        <View>
          <Image style={{ resizeMode: 'center', width: null, height: 250 }} source={ require('../../assets/images/girls.png') } />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={ styles.h1 }>Song Recognition</Text>
          <Text style={{ textAlign: 'center' }}>Terkadang kamu pasti suka penasaran dengan lagu yang diputar orang tapi sulit bertanya atau malu. Tenang, aplikasi ini dapat membantumu mengenali informasi lagu dari klip potongan lagu atau lirik yang kamu tau loh!</Text>
        </View>
        { 
          this.state.searchByUpload ? 
          <SearchByUpload 
            onPress={ () => this.filePicker() } 
            switchSearch={ () => this.switchSearch() } /> : 
          <SearchByLyrics 
            onChangeText={ (value) => this.setState({ lyrics: value }) } 
            onSubmitEditing={ () => this.searchByLyrics() }
            switchSearch={ () => this.switchSearch() }  /> 
        }
      </View>
    )
  }
  
}