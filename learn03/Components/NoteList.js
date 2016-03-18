import React, {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight
} from 'react-native';

export default class NoteList extends React.Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) =>
            r1 !== r2
        });
    }

    render() {
        return (
            <View style={{ backgroundColor: '#CCC',flex:1}}>
                <ListView
                    style={{flex:1}}
                    dataSource={
                      this.ds.cloneWithRows( this.props.notes )
                    }
                    renderRow={
                      (rowData) => {
                        return (
                          <TouchableHighlight
                            onPress={() => this.props.onSelectNote(rowData)}
                            style={styles.rowStyle}
                            underlayColor="#9E7CE3"
                          >
                             <Text> { rowData.title } </Text>
                          </TouchableHighlight>
                        );
                      }
                    }
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    rowStyle: {
        borderBottomColor: '#9E7CE3',
        borderBottomWidth: 1,
        padding: 20,
        flex:1
    },
    rowText: {
        fontWeight: '600',
    }
});