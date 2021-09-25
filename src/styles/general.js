import metrics from './metrics';
import colors from './colors';
import fonts from './fonts';

const general = {
  container: {
    flex: 1,
  },
  hr:{
    width:'100%',
    height:0.5,
    backgroundColor:'#444',
    marginTop:15
    },
    inputBox:{
        marginTop:10,
    },
    inputLabel:{
        fontSize:18,
        marginBottom:6,
        color: colors.fontColorAuthLabel,
    },
    input:{
        width:'100%',
        height:40,
        backgroundColor:'#dfe4ea',
        borderRadius:20,
        paddingHorizontal:10,
        borderWidth:0.1
    },
    centerizedView: {
        width:"100%",
        top:'30%',
    },


    //Modals GENERAL STYLE


    modalContainer:{
        borderRadius:10,
        marginHorizontal:40,
        padding:10,
        backgroundColor:colors.backgroundAuthBox,
        top:-75,
    },
    modalTitle:{
        fontSize:25,
        color:colors.fontColorAuthLabel,
        textAlign:'center'
    },
    modalInputBox:{
        margin:5,
    },
    modalButton:{
        marginHorizontal:5,
        marginTop:5,
        backgroundColor:colors.backgroundButton
    }
};

export default general;