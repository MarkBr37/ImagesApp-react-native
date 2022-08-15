
export default {
    
    container:{
        margin:10
    },
    image:{
        width: 85 ,
        height: 85 ,
    },

    centeredModal:{
        height: '100%',
        width: '100%',
        backgroundColor: "rgba(100, 100, 100, 0.5)", 
    },

    row:{
        flexDirection: 'row',
    },

    modalView: {
        marginTop: '25%',
        marginHorizontal: 20,
        backgroundColor: "white",
        borderRadius: 20,
        // padding: 15,
        
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },

      boxModalImage:{
        alignItems: "center",
      },

      iconBox:{
        marginTop:15,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      },

      modalImage:{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height:371.3 ,
        width:371.3
      },

      button: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
      },
      modalText: {
        textAlign: "center",
        fontWeight: "bold",
        paddingLeft: 7,
        fontSize: 17
      }
}