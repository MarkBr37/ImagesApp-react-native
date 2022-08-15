import React, {useState} from "react";
import {View, StyleSheet, Image, Modal, Text, Pressable} from 'react-native';
import postStyle from '../styles/post';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const styles = StyleSheet.create(postStyle);

const Post = (porps) => {
    const [modalVisible, setModalVisible] = useState(false);
    
    const {largeImageURL, comments, downloads, likes} = porps.post.item
   

    return (
        <View>

            <Pressable style={styles.container} onPress={()=> {
                setModalVisible(true)} }>
                <Image 
                style={styles.image}
                source={{
                    uri: largeImageURL
                }} />
            </Pressable>

            <Modal
              animationType="fade"
              transparent={true}
              hardwareAccelerated={true}
              visible={modalVisible}
              onRequestClose={() => {
                
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredModal}>
                <View style={styles.modalView}>

                    <View style={styles.boxModalImage}>

                        <Image 
                        style={styles.modalImage}
                        source={{
                            uri: largeImageURL
                        }} />
                    </View>

                    <View style={styles.iconBox} >
                        
                        <View style={styles.row}>
{/* comments, downloads, likes */}
                            <Icon name='thumbs-o-up' size={23} color='black' />
                            <Text style={styles.modalText}>{likes}</Text>
                        </View>

                        <View style={styles.row}>
                            <Icon name='comment' size={23} color='black' />
                            <Text style={styles.modalText}>{comments}</Text>
                        </View>

                        <View style={styles.row}>
                            <Icon name='download' size={23} color='black' />
                            <Text style={styles.modalText}>{downloads}</Text>
                        </View>

                       
                    </View>

                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Close</Text>
                  </Pressable>

                </View>
              </View>
            </Modal>

        </View>
    )
}



export default Post;