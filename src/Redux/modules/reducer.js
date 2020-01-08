//import
const CHANGE_TEXT='CHANGE_TEXT';
const CHANGE_EHFH='CHANGE_EHFH';
const CHANGE_CNDWJSTH='CHANGE_CNDWJSTH';
const CHANGE_WLDUR='CHANGE_WLDUR';
const CHANGE_RLRHKS='CHANGE_RLRHKS';
const CHANGE_ZHAQH='CHANGE_ZHAQH';
const CHANGE_CKEPAH='CHANGE_CKEPAH';
const CHANGE_AC3TKD='CHANGE_AC3TKD';
const CHANGE_TNVJCKWJ='CHANGE_TNVJCKWJ';
const CHANGE_DHKSTHR='CHANGE_DHKSTHR';
const OPEN_INFORM='OPEN_INFORM';
const OPEN_FINDWAY='OPEN_FINDWAY';
const SOURCE_SEARCHWAY='SOURCE_SEARCHWAY';
const DEST_SEARCHWAY='DEST_SEARCHWAY';
const FONT_LOADED='FONT_LOADED';


//action


//action creator

function changeText(){
    return{
        type:CHANGE_TEXT
    };
}

function changeEhfh(){
    return{
        type:CHANGE_EHFH
    };
}

function changeCndwjsth(){
    return{
        type:CHANGE_CNDWJSTH
    };
}

function changeWldur(){
    return{
        type:CHANGE_WLDUR
    };
}

function changeRlrhks(){
    return {
        type:CHANGE_RLRHKS
    };
}

function changeZhaqh(){
    return{
        type:CHANGE_ZHAQH
    };
}

function changeCkepah(){
    return{
        type:CHANGE_CKEPAH
    };
}

function changeAc3tkd(){
    return{
        type:CHANGE_AC3TKD
    };
}

function changeTnvjckwj(){
    return{
        type:CHANGE_TNVJCKWJ
    };
}

function changeDhksthr(){
    return{
        type:CHANGE_DHKSTHR
    };
}

function openFindway(){
    return{
        type:OPEN_FINDWAY
    };
}

function openInform(){
    return{
        type:OPEN_INFORM
    };
}

function sourceSearchWay(){
    return {
        type:SOURCE_SEARCHWAY
    };
}

function destSearchWay(){
    return {
        type:DEST_SEARCHWAY
    };
}

function fontLoad(){
    return {
        type:FONT_LOADED
    };
}

//reducer

const initialState={
    latitude:37.550383,
    longitude:126.939822,
    zhaqh:false,
    ckepah:false,
    ac3tkd:false,
    tnvjckwj:false,
    dhksthr:false,
    show:false,
    sourcesearchText:'출발지',
    destsearchText:'도착지',
    pinClick:false,
    ehfh:'',
    cndwjsth:'',
    wldur:'',
    rlrhks:'',
    text:'Input your text',
    dataLocation:{},
    fontLoaded: false,
}

function reducer(state=initialState,action){
    switch (action.type) {
        case CHANGE_TEXT :
           return applyChangeText(state,tmptxt);
        case CHANGE_EHFH :
           return applyChangeEhfh(state,itemValue);
        case CHANGE_CNDWJSTH :
           return applyChangeCndwjsth(state,itemValue);
        case CHANGE_WLDUR :
           return applyChangeWldur(state,itemValue);
        case CHANGE_RLRHKS :
           return applyChangeRlrhks(state,itemValue);
        case CHANGE_ZHAQH :
           return applyChaneZhaqh(state);
        case CHANGE_CKEPAH :
           return applyChangeCkepah(state);
        case CHANGE_AC3TKD :    
           return applyChangeAc3tkd(state);
        case CHANGE_TNVJCKWJ :
           return applyChangeTnvjckwj(state);
        case CHANGE_DHKSTHR :
           return applyChangeDHksthr(state);
        case OPEN_INFORM :
           return applyOpenInform(state);
        case OPEN_FINDWAY :
           return applyOpenFindway(state);
        case SOURCE_SEARCHWAY :
           return applySourceSearchway(state,tmptxt);
        case DEST_SEARCHWAY :
           return applyDestSearchway(state,tmptxt);
        case FONT_LOADED :
            return applyFontLoaded(state);
        default:
            return state;
    }
}
//reducerfunction

function applyChangeText(state,tmptxt){
    return{
        ...state,
        text:tmptxt
    }
}

function applyChangeEhfh(state,itemValue){
    return{
        ...state,
        ehfh:itemValue,
    }
}

function applyChangeCndwjsth(state,itemValue){
    return{
        ...state,
        ckepah:itemValue
    }
}

function applyChangeWldur(state,itemValue){
    return{
        ...state,
        wldur:itemValue
    }
}

function applyChangeRlrhks(state,itemValue){
    return{
        ...state,
        rlrhks:itemValue
    }
}

function applyChaneZhaqh(state){
    return{
        ...state,
        zhaqh:!state.zhaqh
    }
}

function applyChangeCkepah(state){
    return{
        ...state,
        ckepah:!state.ckepah
    }
}

function applyChangeAc3tkd(state){
    return{
        ...state,
        ac3tkd:!state.ac3tkd
    }
}

function applyChangeTnvjckwj(state){
    return{
        ...state,
        tnvjckwj:!state.tnvjckwj
    }
}

function applyChangeDHksthr(state){
    return{
        ...state,
        dhksthr:!state.dhksthr
    }
}

function applyOpenInform(state){
    return{
        ...state,
        pinClick:!state.pinClick
    }
}

function applyOpenFindway(state){
    return{
        ...state,
        show:!state.show
    }
}

function applySourceSearchway(state,tmptxt){
    return{
        ...state,
        sourcesearchText:tmptxt
    }
}

function applyDestSearchway(state,tmptxt){
    return{
        ...state,
        destsearchText:tmptxt
    }
}

function applyFontLoaded(state){
    return{
        ...state,
        fontLoaded:true
    }
}

//export action creator

const actionCreators={
    changeText,
    changeEhfh,
    changeCndwjsth,
    changeWldur,
    changeRlrhks,
    changeZhaqh,
    changeCkepah,
    changeAc3tkd,
    changeTnvjckwj,
    changeDhksthr,
    openFindway,
    openInform,
    sourceSearchWay,
    destSearchWay,
    fontLoad
};
export {actionCreators};
//export reducer

export default reducer;