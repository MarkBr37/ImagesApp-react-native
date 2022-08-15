import React, {useState} from "react";
import { View, Button, StyleSheet, Modal, Pressable, Text } from "react-native";
import SelectDropdown from 'react-native-select-dropdown'

import categoryBtnStyle from '../styles/categoryBtn';

const styles = StyleSheet.create(categoryBtnStyle);

const CategoryBtn = ({changeCategory}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');

    const selects = ["Flowers", "Work", "Sport", "Wallpaper","Art"];

    const resetState = () => {
        setSelectedCategory('');
        setModalVisible(!modalVisible);
    }

    return(
        <View>
            <View style={styles.container}>

                <View style={styles.buttonShow}>
                    <Button title="Category" 
                    onPress={() => setModalVisible(true)}/>   
                </View>

            </View>

            
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => resetState()}
                    >
                    <View style={styles.centeredModal}>
                    
                      <View style={styles.modalView}>
                        
                      <SelectDropdown 
                        defaultButtonText={'Select category'}
	                    data={selects}
                        buttonStyle={styles.button}
	                    onSelect={(selectedItem) => {
	                    	setSelectedCategory(selectedItem);
	                    }}
	                    
                        />

                        <View style={styles.pressableContainer}>

                            <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => resetState()}
                            >
                                <Text style={styles.textStyle}>Cancel</Text>
                            </Pressable>

                           { selectedCategory &&
                           <Pressable
                              style={[styles.button, styles.buttonCloseSearch]}
                              
                              onPress={() => {
                                changeCategory(selectedCategory);
                                resetState()
                            }}
                              >
                              <Text style={styles.textStyle}>Search</Text>
                            </Pressable>}

                            { !selectedCategory &&
                                <Pressable
                                style={[styles.button, styles.buttonDisabled]}
                                disabled
                                >
                              <Text style={styles.textStyle}>Search</Text>
                            </Pressable>
                            }

                            
                        </View>
                      </View>
                    
                    </View>
                </Modal>
            
            
        </View>
    )
}



export default CategoryBtn;