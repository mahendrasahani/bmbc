import React, { Component } from "react"
const ImgUpload = ({
    onChange,
    src
}) =>
    <label htmlFor="photo-upload" className="custom-file-upload fas">
        <div className="img-wrap img-upload" >
            <img htmlFor="photo-upload" src={src} />
        </div>
        <input id="photo-upload" type="file" onChange={onChange} />
    </label>





const Profile = ({
    onSubmit,
    src,
    name,
    status,
}) =>
    <form onSubmit={onSubmit}>
        <label className="custom-file-upload fas">
            <div className="img-wrap" >
                <img htmlFor="photo-upload" src={src} />
            </div>
        </label>
        <button type="submit" className="edit">Edit Profile </button>
    </form>


const Edit = ({
    onSubmit,
    children,
}) =>
    <form onSubmit={onSubmit}>
        {children}
        <button type="submit" className="save">Save </button>
    </form>

class CardProfile extends Component
{
    state = {
        file: '',
        imagePreviewUrl: '',
        name: '',
        status: '',
        active: 'edit'
    }

    photoUpload = e =>
    {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () =>
        {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file);
    }


    handleSubmit = e =>
    {
        e.preventDefault();
        let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
        this.setState({
            active: activeP,
        })
    }

    render()
    {
        const { imagePreviewUrl, active } = this.state;
        return (
            <div>
                {(active === 'edit') ? (
                    <Edit onSubmit={this.handleSubmit}>
                        <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
                    </Edit>
                ) : (
                    <Profile
                        onSubmit={this.handleSubmit}
                        src={imagePreviewUrl}
                    />)}

            </div>
        )
    }
}
export default CardProfile
