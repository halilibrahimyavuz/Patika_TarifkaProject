import Lottie from "lottie-react-native";
import React from "react";

function Loading() {
     return 

      <Lottie
                     style={{flex: 1}} 
                     source={require("../../assets/loadingLottie.json")} 
                    autoPlay
                    loop
                />;
    
}

export default Loading;