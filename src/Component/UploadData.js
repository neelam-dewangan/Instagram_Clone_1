import React from 'react'
import {connect} from 'react-redux'
import {UpdateAction} from '../Redux/Action/Action'
import {Route,Link, withRouter} from 'react-router-dom'

class UploadData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            InstaList:{
                  profileName: "",
                  profileImg: "",
                  ImgUrl: "",
                  ImgCaption: "",
                  likes : 0,
                  commentArray: [],
                  id : 1
                }                            
        }
    }

    UpdateInput = () => {    
            this.props.dispatch(UpdateAction(this.state.InstaList))  
            this.props.history.push("/")  
        }
    inputProileName = (event) => {

        let tempObject = {...this.state.InstaList}
       
        
        tempObject.profileName = event.target.value
        this.setState({
            InstaList : tempObject            
        })
        
    }
    inputCaption = (event) => {

        let tempObject = {...this.state.InstaList}
        
        tempObject.inputCaption = event.target.value
        this.setState({
            InstaList : tempObject
        })

    }
    // inputProileName = (event) => {

    //     let tempObject = {...this.state.InstaList}
        
    //     tempObject.profileName = event.target.value
    //     this.setState({
    //         InstaList : tempObject            
    //     })
        
    // }
    // inputProileName = (event) => {

    //     let tempObject = {...this.state.InstaList}
        
    //     tempObject.profileName = event.target.value
    //     this.setState({
    //         InstaList : tempObject            
    //     })
        
    // }


    render(){
        return(
            <div>
                <Link to="/">Back Button</Link>
                <input onChange={this.inputProileName}></input>
                <input onChange={this.inputCaption}></input>
                <button onClick={this.UpdateInput}>Upload</button>
                
            </div>
        )
    }
}


export default withRouter(connect()(UploadData));