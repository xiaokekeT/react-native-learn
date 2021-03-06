import React, {
     StyleSheet,
     Text,
     View
     } from 'react-native';
import SimpleButton from './SimpleButton';

export default class HomeScreen extends React.Component {
     render () {
       return (
         <View style={styles.container}>
           <Text style={styles.noNotesText}>
              You have not create any notes!
            </Text>
           <SimpleButton
                style={styles.simpleButton}
                customText={'Create Note'}
                onPress= { ()=> this.props.navigator.push({
                  name: 'createNote'
                })}
                textStyle={styles.simpleButtonText} />
        </View>
      );
     }
}
var styles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
     },
     noNotesText: {
       color: '#48209A',
       marginBottom: 10
     },
     simpleButton: {
       backgroundColor: '#5B29C1',
       paddingHorizontal: 20,
       paddingVertical: 15,
       borderColor: '#48209A',
       borderWidth: 1,
       borderRadius: 4,
       shadowColor: 'darkgrey',
       shadowOffset: {
         width:1,
         height:1
       },
       shadowOpacity: 0.8,
       shadowRadius:1
     },
     simpleButtonText: {
       color: 'white',
       fontWeight: 'bold',
       fontSize: 16
     }
});
