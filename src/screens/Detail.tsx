import React from 'react';
import { View, Text, Button, useNavigation  } from 'react-xnft';
import { screen } from '../../enums/screens';

const Detail = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        border: '2px solid red',
        height: '100%',
        paddingLeft: '20px',
        paddingTop: '32px',
        background: '#181819',
      }}
    >
      <Text
        style={{
          fontSize: '26px',
          fontWeight: '300',
          fontStyle: 'normal',
          lineHeight: '41px',
          color: '#181819',
        }}
      >
        hello from home
      </Text>
      <Button
        onClick={() => navigation.push(screen.HOME)}
        style={{
          position: 'fixed',
          bottom: '24px',
          background: 'blue',
          color: 'rgba(24, 24, 24, 0.85)',
          width: '90%',
          marginRight: '20px',
          alignItems: 'center',
          height: '48px',
          fontWeight: '500',
          fontSize: '16px',
          lineHeight: '25px',
        }}
      >
        Home
      </Button>
    </View>
  );
};

export default Detail;
