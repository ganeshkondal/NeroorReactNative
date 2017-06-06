
/**
 * Login Component. Shows a form field
 */

 
import * as React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Label from './../components/Label';

interface Props{
}

interface State{
}

export default class  Login extends React.Component<Props, State>  {
    render(){ 
        return (
            <View style={styles.loginFormContainer}> 
                <Label name='UserID'/>
                <Label name='Password'/>
            </View>
                
        );
    } // render()
}

const styles = StyleSheet.create({
  loginFormContainer: {
    marginTop:50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});