// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OkraView from 'react-native-okra-expo';

export default function App() {
  var okraOptions = {
    // callback_url:"https://webhook.site/ded54b3f-f4f5-4fa1-86c3-0def6098fb4d",
    clientName:"Peroo",
    color:"#953ab7",
    connectMessage:"Which account do you want to connect with?",
    currency:"NGN",
    env:"production-sandbox", // for sandbox use production-sandbox
    exp:"2021-12-12",
    filter:{
      banks: ['access-bank', 'guaranty-trust-bank'],
      industry_type: 'all',
    },
    options:{saverid: 'this is it'},
    isCorporate:false,
    key:"5aa2bcb4-a198-5c20-8d69-7dcf78207755",
    limit:"24",
    products:['auth', 'balance', 'identity', 'transactions'],
    redirect_url:"redirect",
    success_message:"this is the success message",
    success_title:"it has entered success",
    token:"5da6358130a943486f33dced",
    widget_failed:"",
    widget_success:"Your account was successfully linked to Okra, Inc"
  }
  return (
    <OkraView
    okraOptions={okraOptions}
    onClose={response => {
      console.log('on close');
    }}
    onSuccess={response => {
      console.log('on success', response);
    }}
    onError={response => {
      console.log('on error');
    }}
/>
  );
}