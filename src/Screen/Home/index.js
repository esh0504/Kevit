import { connect } from "react-redux";
import {bindActionCreators}from "redux";
import {actionCreators} from '../../Redux/modules/reducer'
import Home from "./Home";

function mapStateToProps(state){
  const{
    latitude,
    longitude,
    zhaqh,
    ckepah,
    ac3tkd,
    tnvjckwj,
    dhksthr,
    show,
    sourcesearchText,
    destsearchText,
    pinClick,
    ehfh,
    cndwjsth,
    wldur,
    rlrhks,
    text,
    dataLocation,
    fontLoaded,
  }=state;

  return {latitude,
    longitude,
    zhaqh,
    ckepah,
    ac3tkd,
    tnvjckwj,
    dhksthr,
    show,
    sourcesearchText,
    destsearchText,
    pinClick,
    ehfh,
    cndwjsth,
    wldur,
    rlrhks,
    text,
    dataLocation,
    fontLoaded};

};
function mapDispatchToProps(dispatch){
  return{
    changeTextValue: bindActionCreators(actionCreators.changeText,dispatch),
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);