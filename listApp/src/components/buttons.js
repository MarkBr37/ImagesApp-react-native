import React from "react";
import { View, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({


    container:{
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    button:{
        width: "40%",
    }
    
});


const Buttons = (props) => {
    
    const { handleNextPage, handlePrevPage } = props.fun;
    const { page, nextBtnDisabled } = props


    return(
        
        <View style={styles.container}>
            
            <View style={styles.button}>
                
                {   page <= 0 &&

                    <Button title="Prev" disabled/>
                }
                {   page > 0 &&
                    
                    <Button title="Prev" onPress={ ()=> handlePrevPage() }/>
                }
                
            </View>
            
            <View style={styles.button}>

                {   nextBtnDisabled &&
                
                    <Button title="Next" disabled/>
                }
                {   !nextBtnDisabled &&

                    <Button title="Next" onPress={ ()=> handleNextPage() }/>
                }        

            </View>

        </View>
    )
}


export default Buttons;