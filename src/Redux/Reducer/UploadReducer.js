const defaultData = [{
           profileName: "Alex",
           profileImg: "DP",
           ImgUrl: "https://www.w3schools.com/w3css/img_lights.jpg",
           ImgCaption: "Splendid!!!",
           likes : 0,
           commentArray: [],
           id: 1
}]
const UploadReducer = (reducerState = defaultData, action) =>
{
    switch(action.type){
    case "POST_UPDATE": let temp = reducerState;//alwasys use in caps
    temp.push(action.InstaList)
    return temp;    

    default: return reducerState;
 }
}

export default UploadReducer;