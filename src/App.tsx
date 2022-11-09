import React from 'react';
import ReactXnft, { Text, View, Stack } from 'react-xnft';
import { screen } from '../enums/screens';
import '@fontsource/sora';

import Home from './screens/Home';
import Detail from './screens/Detail';

// On connection to the host environment, warm the cache.
//
ReactXnft.events.on('connect', () => {
  // no-op
});

export function App() {
  return (
    <View
      style={{
        height: '100%',
        fontFamily: 'Sora, inter',
      }}
    >
      <Stack.Navigator
        initialRoute={{ name: screen.HOME }}
        titleStyle={{
          color: '#181819',
          fontSize: '18px',
          fontWeight: '600',
        }}
        style={{
          background: '#F5F5F5',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
          height: '56px',
        }}
        options={({ route }) => {
          console.log('route = ', route);
          switch (route.name) {
            case screen.HOME:
              return {
                title: 'MintIt',
              };
            case screen.DETAILS:
              return {
                title: 'Details',
              };
            default:
              throw new Error('unknown route');
          }
        }}
      >
        <Stack.Screen name={screen.HOME} component={(props: any) => <Home />} />
        <Stack.Screen
          name={screen.DETAILS}
          component={(props: any) => <Detail />}
        />
      </Stack.Navigator>
    </View>
  );
}
