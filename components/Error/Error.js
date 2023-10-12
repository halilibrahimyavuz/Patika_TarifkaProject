import Lottie from "lottie-react-native";
import React from "react";

function Error() {
    return
   <Lottie
                 style={{flex: 1}} 
                source={require("../../assets/errorLottie.json")}
                autoPlay
                loop
    />;
    
}

export default Error;