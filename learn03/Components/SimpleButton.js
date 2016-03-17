import React, {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class SimpleButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={ this.props.onPress }>
        <View style={this.props.style}>
          <Text style={ this.props.textStyle}>{this.props.customText || 'Simple Button'}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

SimpleButton.PropTypes = {
  onPress: React.PropTypes.func.isRequired,
  customText: React.PropTypes.string,
  style: React.PropTypes.style,
  textStyle: React.PropTypes.style
};