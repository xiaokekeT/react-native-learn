/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Hello extends Component {
  render() {
    return (
      <View>
          <Text>{ this.props.title}</Text>
          <Text>{ this.props.text}</Text>
      </View>
    );
  }
}
class HelloComponent extends React.Component{
    constructor (props) {
      super(props);
      this.state = {
         appendText: ''
      };
    }
    _setText() {
      this.setState({appendText: ' Native!'});
    }
    render() {
       return (
         <View>
           <Text onPress={ ()=> this.setState({appendText:' Native!'})}>
          //  <Text onPress={ this._setText.bind(this) }>
               {this.props.text + this.state.appendText}
           </Text>
         </View>
       );
    }
}
class learn01 extends Component {
  render() {
    const pros = {
       text: 'hi',
       title: 'title'
    }
    return (
      <View>
          <View style={{height:30}} />
          <Hello {...pros} />
          <HelloComponent text="React"/>
      </View>
    );
  }
}

AppRegistry.registerComponent('learn01', () => learn01);
