import React from 'react'
import ShowData from './ShowData.css'
import { Route, Link } from 'react-router-dom'
//use font awesome for icons 
class Showdata extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentlike: this.props.instaListItems.likes,
            inputData: "",
            commentArray: this.props.instaListItems.commentArray
        }

    }
    handleClick = (event) => {

        let tempLikes = this.state.currentlike;
        tempLikes++;
        this.setState({
            currentlike: tempLikes
        })
    }

    handleChange = (event) => {

        this.setState({ inputData: event.target.value })
        console.log(this.state.inputData);

    }

    updateComment = (event) => {

        let tempArray = this.state.commentArray

        tempArray.push(this.state.inputData)
        this.setState({
            commentArray: tempArray
        })

    }
    deleteComment = (event) => {

        let tempArray = this.state.commentArray

        tempArray.push(this.state.inputData)
        this.setState({
            commentArray: tempArray
        })

    }
    deleteComment = (event) => {
        let tempArray = this.state.commentArray
        tempArray.splice(event, 2)
        this.setState({
            commentArray: tempArray
        })
    }
    render() {
        return (
            <div className="mainApp">
                <div className="initial-component">
                    <div className="head-container">
                        <div className="profile-picture">
                            {this.props.instaListItems.profileImg}

                        </div>
                        <div className="profile-name">
                            {this.props.instaListItems.profileName}
                        </div>
                    </div>
                    <div className="image-container">
                        <div className="image-sec">
                            <img src={this.props.instaListItems.ImgUrl} alt="image"></img>
                        </div>
                        <div className="like-comment">
                            <div onClick={this.handleClick}>
                                <div className="heart">&hearts;</div>
                                {this.state.currentlike} likes
                            </div>
                            <div class  Name="comment">&#128172;</div>
                        </div>
                        <div className="img-caption">
                            {this.props.instaListItems.ImgCaption}
                        </div>
                    </div>

                    <div className="comment-box">
                        <input type="text" onChange={this.handleChange} placeholder="Input Comment" />
                        <button type="text" onClick={this.updateComment}>Comment</button>
                        {
                            this.state.commentArray.map((e, i) => {
                                return <div key={i}>{e}<div onClick={() => this.deleteComment(i)}>&#10006;</div> </div>

                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Showdata;