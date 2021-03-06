/**
 * Component that has a label and text field to it. 
 */

import * as React from 'react';
import { StyleSheet,View, Text } from 'react-native';

interface Props{
    name: string
}

interface State{
    name: string
}

export default class  Label extends React.Component<Props, State>  {
    state = {name: 'UserName'};

    render(){ 
        return (
            <View style={styles.labelContainer}>
               <Text style={styles.textLabel}> {this.props.name}</Text>
            </View>
        );
    } // render()
}

const styles = StyleSheet.create({
    labelContainer: {
        marginBottom: 0
    },
    textLabel: {
        fontSize: 12,
        fontFamily: 'Verdana',
        marginBottom: 10,
        color: '#595856'
    }
});
