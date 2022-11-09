import React from 'react';
import { View, Image, Text } from 'react-xnft';
import SolanaLogo from '../icons/Solana';

const Card = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.04)',
        flexDirection: 'column',
        gap: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '17px',
        borderRadius: '4px',
      }}
    >
      <View
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            fontWeight: '600',
            fontSize: '16px',
            color: 'black',
          }}
        >
          Pixel yOOts
        </Text>
        <Text
          style={{
            fontWeight: '300',
            fontSize: '14px',
            color: '#7B7B7B',
          }}
        >
          @irfan
        </Text>
      </View>
      <Image
        src={
          'https://creator-hub-prod.s3.us-east-2.amazonaws.com/pixel_yoots_pfp_1663001584399.png'
        }
        style={{ height: '100%', width: '100%', borderRadius: '3px' }}
      />
      <View
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'start',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              fontWeight: '200',
              fontSize: '12px',
              color: '#7B7B7B',
            }}
          >
            Time Remaining
          </Text>
          <Text
            style={{
              fontWeight: '600',
              fontSize: '16px',
              color: 'black',
            }}
          >
            20h : 20m : 58s
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'start',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              fontWeight: '200',
              fontSize: '12px',
              color: '#7B7B7B',
            }}
          >
            Time Remaining
          </Text>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}
          >
            <Text
              style={{
                fontWeight: '600',
                fontSize: '16px',
                color: 'black',
              }}
            >
              20h : 20m : 58s
            </Text>
            <View
              style={{
                width: '100%',
                height: '20px',
              }}
            >
              <SolanaLogo />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;
