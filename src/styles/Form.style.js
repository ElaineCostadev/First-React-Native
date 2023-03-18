import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    // width: '100%',
    // height: '100%',
    // justifyContent: 'space-around',
    flex: 1,
    backgroundColor: '#A2AF9F',
    alignItems: 'center',
    paddingTop: 30,
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  form: {
    width: '100%',
    // height: 'auto'  

  },
  formLabel: {
    color: '#000000',
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: '90%',
    borderRadius: 50,
    backgroundColor: '#EAE9D7',
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: '#ff0043',
    opacity: 0.7,
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },
  textButtonCalculator: {
    fontSize: 20,
    color: '#DEF8D6',
  },
  errorMessage: {
    fontSize: 12,
    color: 'red',
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  exhibitionResultImc: {
    width: '100%',
    height: '50%',

  },
  listImcs: {
    marginTop: 20,
  },
  resultImc:{
    fontSize: 26,
    color: 'red',
    height: 50,
    width: '100%',
    paddingRight: 20,
    fontWeight: 'bold',
  },
  textResultItemList:{
    color: 'red',
    fontSize: 16,
    fontWeight: '400'
  },
})

export default styles;