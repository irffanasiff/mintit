import React from 'react';
import { Button, Text, useNavigation, View } from 'react-xnft';
import { screen } from '../../enums/screens';
import Card from '../components/Card';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: '#F5F5F5',
        paddingLeft: '24px',
        paddingRight: '24px',
      }}
    >
      <View
        style={{ 
          padding: '22px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontSize: '20px',
            color: 'black',
            fontWeight: '700',
          }}
        >
          Upcomming 🔥
        </Text>
      </View>
      <Card />
    </View>
  );
};

export default Home;
