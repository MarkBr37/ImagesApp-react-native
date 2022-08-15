import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";

import Header  from "./src/components/header";
import Main from "./src/components/main";


const App = () => {
  
  return (
    <Provider store={store}>
      <View>

        <Header title={'List App'} />
        <Main />
        

      </View>
    </Provider>
  )
}

export default App;