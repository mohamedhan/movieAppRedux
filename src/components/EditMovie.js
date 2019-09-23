
import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import { editMovie } from '../actions/actions'

class EditMovie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            img: '',
            star: 0,
            visible: false
        };
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    closeModal = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };



    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {oldMovie}=this.props
        console.log(oldMovie)
        return (
            <div className="modal">
                               <i class="fas fa-edit" onClick={()=>{this.showModal(); this.setState({
                                   name:oldMovie.name,
                                   img:oldMovie.img,
                                   star:oldMovie.star
                               })}}></i>


                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={() => {
                        this.closeModal(); this.props.editMovie({
                           newMovie:this.state,
                           id:oldMovie.id
                        })
                    }}
                    onCancel={this.closeModal}
                >
                    <form className="formAdd">
                        <span>Name: </span> <input type="text" placeholder="Enter Name" name='name' onChange={this.handleChange} value={this.state.name} />
                        <span>Rating: </span><input type="text" placeholder="Enter Rating" name='star' onChange={this.handleChange} value={this.state.star} />
                        <span>Image URL </span><input type="text" placeholder="Enter Image URL" name='img' onChange={this.handleChange} value={this.state.img} />
                    </form>

                    <Button color="secondary" className="add-btn" onClick={this.toggle}>Cancel</Button>

                </Modal>
            </div>
        );

    }

}

const MapDispatchToProps = dispatch => ({
    editMovie: x => dispatch(editMovie(x))
})
export default connect(null, MapDispatchToProps)(EditMovie);