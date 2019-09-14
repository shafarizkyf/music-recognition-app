import { StyleSheet } from 'react-native'
import Colors from './Colors'

export default StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.softOrange 
  },
  textCenter: {
    textAlign: 'center'
  },
  h1: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 26,
    marginVertical: 10
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
  },
  mainButton: {
    backgroundColor: Colors.purple,
    color: Colors.white,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 26,
    paddingVertical: 15,
  },
  mainLink: {
    color: Colors.purple,
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 5,
  },
  mainTextInput: {
    backgroundColor: Colors.purple,
    color: Colors.white,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 26,
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  image250: {
    resizeMode: 'center', 
    width: null,
    height: 250
  },
  rowGrid: {
    flex:1, 
    flexWrap: 'wrap', 
    flexDirection: 'row', 
    justifyContent: 'space-evenly'
  },
})