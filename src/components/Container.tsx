/**
 * Container that wraps UI content. Adds a margin hence we can avoid setting that in every View element
 */

import * as React from 'react';
import { StyleSheet,View, Text } from 'react-native';

interface Props{
    children: object
}

interface State{
}


export default class  Container extends React.Component<Props, State>  {
    render(){ 
        return (
            <View style={styles.labelContainer}>
               {this.props.children}
            </View>
        );
    } // render()
}

const styles = StyleSheet.create({
    labelContainer: {
        marginBottom: 20
    }
});
