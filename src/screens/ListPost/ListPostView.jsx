import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';

const ListPostView = ({postData}) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 12,
        }}
        data={[...postData].reverse()}
        renderItem={({item}) => (
          <View style={styles.post}>
            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.user}>{item.user}</Text>
            </View>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListPostView;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  post: {
    backgroundColor: '#80CBC4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 10,
    marginVertical: 7,
  },
  title: {
    color: '#AC1754',
    fontWeight: 600,
    fontSize: 16,
    width: 230,
    marginVertical: 5,
  },
  user: {
    color: 'black',
    fontSize: 15,
  },
  text: {
    color: 'dark-gray',
    width: 150,
  },
});
