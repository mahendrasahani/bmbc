import React, { useState, useEffect } from "react";
import userService from "../../common/userService";
import { message } from "antd";
import axios from "axios";
import "../assets/css/profileinput.css"

export const MyAccount = () =>
{
	const userId = localStorage.getItem("id");

	const [userDetail, setUserDetail] = useState([]);

	const [image, setImage] = useState('')


	const handleInputChange = (e) =>
	{
		const { name, value } = e.target;
		setUserDetail({
			...userDetail,
			[name]: value,
		});
	}

	const getUserDetail = async (userId) =>
	{
		const rawData = await userService.getUserDetails(userId);
		const userData = rawData.data.data;
		setUserDetail(userData);
		console.log(userData);

	};

	const handleUpdate = async (e) =>
	{
		const id = userId
		e.preventDefault();
		await axios.put("https://bookmybestclass.com/api/user/update", { userDetail, id })
		try
		{
			console.log(userDetail.photo);
			message.success('Profile updated successfully!');
		} catch (error)
		{
			message.error("Something went wrong, try again")
		}
	}

	// UPLOAD IMAGE FUNCTION
	const handleImageUpload = (e) =>
	{
		const id = userId
		var reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onload = async () =>
		{
			setImage(reader.result);
			const photo = reader.result
			await axios.put("https://bookmybestclass.com/api/user/update", { photo, id })
			try
			{
				message.success('Profile updated successfully!');
			} catch (error)
			{
				message.error("Something went wrong, try again")
			}
		}
		reader.onerror = (error) =>
		{
			console.log(error);
		}
	}

	useEffect(() =>
	{
		getUserDetail(userId);
		// eslint-disable-next-line
	}, []);

	return (
		
		    <div className="liton__wishlist-area pb-70">
            {userDetail &&
                <div className="container">
                    <div className="profile_update_section">
                        <div className="profile_photo">
                            <div className="author-img" style={{ maxWidth: '100%' }}>
                                <div className="img-wrap img-upload" >
                                    <img htmlFor="photo-upload" value={userDetail.photo} src={image ? image : userDetail.photo} alt={image ? image : userDetail.photo} />
                                </div>
                                <label htmlFor="photo-upload" className="custom-file-upload fas">
                                    <input
                                        accept="images/*"
                                        type="file"
                                        className="custom-file-input"
                                        name="photo"
                                        onChange={handleImageUpload} />
                                </label>
                                <p>{userDetail.name}</p>
                            </div>
                        </div>
                        <form onSubmit={handleUpdate}>
                            <div className="author-info">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="input-item input-item-name">
                                            <input
                                                onChange={handleInputChange}
                                                type="text"
                                                name="name"
                                                value={userDetail.name}
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-email">
                                            <input
                                                onChange={handleInputChange}
                                                type="text"
                                                name="email"
                                                value={userDetail.email}
                                                placeholder="Enter email"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-name">
                                            <input
                                                onChange={handleInputChange}
                                                type="text"
                                                value={userDetail.phone}
                                                name="phone"
                                                placeholder="Enter your phone"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-email">
                                            <input
                                                onChange={handleInputChange}
                                                type="text"
                                                name="qualification"
                                                value={userDetail.qualification}
                                                placeholder="Enter qualification"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-email">
                                            <input
                                                onChange={handleInputChange}
                                                type="text"
                                                value={userDetail.city}
                                                name="city"
                                                placeholder="Enter city"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-email">
                                            <input
                                                onChange={handleInputChange}
                                                type="text"
                                                value={userDetail.address}
                                                name="address"
                                                placeholder="Enter address"
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className="btn-wrapper profile_up_btn mt-0">
                                    <button type="submit" className="theme-btn-1 prof_btn btn-sm mt-1">Update Profile</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            }
        </div >
	);
};

export default MyAccount;
