import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

class ImageUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: '', redirect: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
    const file = this.state.imagePreviewUrl
    const userId = this.props.user.id

    axios.post(`http://localhost:3001/users/${userId}/upload-image`, {file}, {withCredentials: true})
    .then(response => {
      if (response.data) {
        // debugger
        // const { birthday, gender, location } = response.data
        this.props.dispatch({ type: 'UPDATE_USER_INFO', payload: response.data })
        // this.redirect()
        this.setState({
          redirect: "/dashboard"
      })
     } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))

  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img style={{width: '10%', height: '10%'}} src={imagePreviewUrl} alt="preview"/>);
    } else {
      $imagePreview = (<div>Please select an Image for Preview</div>);
    }

    return (
      <div>
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton" 
            type="submit" 
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}

export default connect()(ImageUploader)