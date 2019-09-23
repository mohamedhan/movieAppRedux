import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import { addMovie } from '../actions/actions'

class AddMovie extends Component {
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
        return (
            <div className="modal">
                <Button type="primary" onClick={this.showModal}>
                    Add movie
        </Button>

                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={() => {
                        this.closeModal(); this.props.addMovie({
                            name: this.state.name,
                            img: this.state.img,
                            star: this.state.star
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
    addMovie: x => dispatch(addMovie(x))
})
export default connect(null, MapDispatchToProps)(AddMovie);