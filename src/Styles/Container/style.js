import Color from '../../Config/Color';
import {Dimensions} from 'react-native';
export default{
    container: {
        backgroundColor: Color.white,
        flex: 1,
      },
    marginHorizontal:{
      marginHorizontal: 15,
      },
    head:{
      height:Dimensions.get('window').height*0.03,
      width:Dimensions.get('window').width
    }
}