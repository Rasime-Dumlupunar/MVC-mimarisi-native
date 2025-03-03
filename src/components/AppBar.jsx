import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';
import {useNavigation} from '@react-navigation/native';

const AppBar = ({setActivePage, activePage}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form Listesi</Text>
      {activePage === 'Gönderiler' ? (
        <CustomButton
          buttonTitle={'Gönderi Ekle'}
          onPress={() => {
            setActivePage('Gönderi Ekle');
            navigation.navigate('AddPost');
          }}
        />
      ) : (
        <CustomButton
          buttonTitle={'Gönderi Listesi'}
          onPress={() => {
            setActivePage('Gönderiler');
            navigation.navigate('ListPost');
          }}
        />
      )}
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#80CBC4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
  },
  title: {
    color: '#AC1754',
    fontSize: 30,
    fontWeight: '700',
  },
});
