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
        <View style={{flex: 1}}>
          {this.props.notes.length !==0 ? (
            <ListView
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
          ) : (
            <View style={styles.noNotes}>
              <Text style={styles.message}> No Notes </Text>
              <Text style={styles.noNotesText}>
                You haven't create any notes!
              </Text>
            </View>
          )}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  rowStyle: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    height: 50,
    justifyContent: 'center',
    padding: 10
  },
  rowText: {
    fontWeight: '600',
  },
  noNotes: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  message: {
    textAlign: 'center',
  },
  noNotesText: {
    color: '#48209A',
    marginLeft: 10,
    marginBottom: 5
  }
});