import React, { useState, useEffect } from "react";
import userService from "../../common/userService";
import { message } from "antd";
import axios from "axios";
import "../assets/css/profileinput.css";
import "../assets/css/profile.css";
import Navbar from "../global-components/navbar";
import PageHeader from "../global-components/page-header";
import Footer from "../global-components/footer";
export const ChnagePassword = () =>
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
    // UPLOAD IMAGE FUNCTION ENDS


    useEffect(() =>
    {
        getUserDetail(userId);
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Navbar />
            <PageHeader subheader="My Account / Password" />
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

                            <form
                                onSubmit={handleUpdate}
                                className="ltn__form-box contact-form-box"
                            >
                                <h5 className="mb-30">Change Password</h5>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleInputChange}
                                    placeholder="Current Password*"
                                />
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleInputChange}
                                    placeholder="New Password*"
                                />
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleInputChange}
                                    placeholder="Confirm New Password*"
                                />
                                <div className="btn-wrapper profile_up_btn mt-0">
                                    <button
                                        className="theme-btn-1 btn btn-block"
                                        type="submit"
                                    >
                                        Update Password
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                }
            </div>
            <Footer />
        </>

    );
};

export default ChnagePassword;