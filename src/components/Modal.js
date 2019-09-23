import React from 'react'
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css'
class Modale extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      img: '',
      star: 0
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="modal">

        <Modal
          title="Basic Modal"
          visible={this.props.visible}
          onOk={() => {
            this.props.handleClose(); this.props.add({
              name: this.state.name,
              img: this.state.img,
              star: this.state.star
            })
          }}
          onCancel={this.props.handleClose}
        >
          <form className="formAdd">
            <span>Name: </span> <input type="text" placeholder="Enter Name" name='name' onChange={this.handleChange} value={this.state.name} />
            <span>Rating: </span><input type="text" placeholder="Enter Rating" name='star' onChange={this.handleChange} value={this.state.star} />
            <span>Image URL </span><input type="text" placeholder="Enter Image URL" name='img' onChange={this.handleChange} value={this.state.img} />
          </form>
          {/* <Button color="primary" className="add-btn" onClick={()=> this.props.add(this.state.name,
                                                                                            this.state.img, 
                                                                                            this.state.star)} >
                                                                                              validate</Button> */}
          <Button color="secondary" className="add-btn" onClick={this.toggle}>Cancel</Button>
          {
          }        </Modal>
      </div>
    );
  }
}

export default Modale