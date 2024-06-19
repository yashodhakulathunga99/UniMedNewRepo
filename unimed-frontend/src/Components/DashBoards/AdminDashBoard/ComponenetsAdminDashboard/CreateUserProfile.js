import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUserProfile(props) {
    const [formData, setFormData] = useState({
		email: "",
		username: "",
		firstName: "",
		lastName: "",
		password: "",
		rPassword: "",
	});

	const [errors, setErrors] = useState({
		email: "",
		username: "",
		firstName: "",
		lastName: "",
		password: "",
		rPassword: "",
	});

	const initialFormData = {
		email: "",
		username: "",
		firstName: "",
		lastName: "",
		password: "",
		rPassword: "",
	};

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData({ ...formData, [id]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		let hasErrors = false;
		const newErrors = { ...errors };

		// Validate email
		if (!formData.email || !formData.email.includes("@")) {
			newErrors.email = "Please enter a valid email address";
			hasErrors = true;
		} else {
			newErrors.email = "";
		}

		// Validate username
		if (!formData.username.trim()) {
			newErrors.username = "Username is required";
			hasErrors = true;
		} else {
			newErrors.username = "";
		}

		// Validate first name
		if (!formData.firstName.trim()) {
			newErrors.firstName = "First name is required";
			hasErrors = true;
		} else {
			newErrors.firstName = "";
		}

		// Validate last name
		if (!formData.lastName.trim()) {
			newErrors.lastName = "Last name is required";
			hasErrors = true;
		} else {
			newErrors.lastName = "";
		}

		// Validate password
		if (!formData.password.trim()) {
			newErrors.password = "Password is required";
			hasErrors = true;
		} else if (formData.password.length < 6) {
			newErrors.password = "Password should be at least 6 characters";
			hasErrors = true;
		} else {
			newErrors.password = "";
		}

		// Validate re-entered password
		if (!formData.rPassword.trim()) {
			newErrors.rPassword = "Please re-enter your password";
			hasErrors = true;
		} else if (formData.password !== formData.rPassword) {
			newErrors.rPassword = "Passwords do not match";
			hasErrors = true;
		} else {
			newErrors.rPassword = "";
		}

		if (hasErrors) {
			setErrors(newErrors);
		} else {
			try {
				axios
					.post(props.apiSaveLink, formData)
					.then(() => {
						setFormData(initialFormData);
                        navigate(props.navigationLink);
					})
					.catch((error) => {
						if (error.response && error.response.data) {
							alert(`Account creation failed: ${error.response.data}`);
						} else {
							alert("Account creation failed!");
						}
					});
			} catch (err) {
				alert("Account creation failed");
			}
		}
	};

  return (
    <div>
        <Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						<p className="deleteProfileModelHeading">Create New Profile</p>
					</Modal.Title>
				</Modal.Header>
				<form onSubmit={handleSubmit}>
					<Modal.Body>
						<div className="col-12 createProfileForm">
							<div className="row">
								<p className="formTitleBioForm">User Details</p>
							</div>
							<div className="row mt-0">
								<p className="leftBioFormInputFieldTitle">First Name</p>
								<input
									id="firstName"
									placeholder="FIRST NAME"
									className="form-control inputTagForCreateProfile"
									type="text"
									name="firstName"
									value={formData.firstName}
									onChange={handleChange}
								/>
								{errors.firstName && (
									<p className="error-message" style={{ color: "red" }}>
										{errors.firstName}
									</p>
								)}
							</div>
							<div className="row">
								<p className="leftBioFormInputFieldTitle">Last Name</p>
								<input
									id="lastName"
									className="form-control inputTagForCreateProfile"
									type="text"
									name="lastName"
									value={formData.lastName}
									onChange={handleChange}
								/>
								{errors.lastName && (
									<p className="error-message" style={{ color: "red" }}>
										{errors.lastName}
									</p>
								)}
							</div>
							<div className="row">
								<p className="leftBioFormInputFieldTitle">Email</p>
								<input
									id="email"
									className="form-control inputTagForCreateProfile"
									type="text"
									name="email"
									placeholder="EMAIL ADDRESS"
									value={formData.email}
									onChange={handleChange}
								/>
								{errors.email && (
									<p className="error-message" style={{ color: "red" }}>
										{errors.email}
									</p>
								)}
							</div>
							<div className="row">
								<p className="leftBioFormInputFieldTitle">User Name</p>
								<input
									id="username"
									className="form-control inputTagForCreateProfile"
									type="text"
									name="username"
									placeholder="USERNAME"
									value={formData.username}
									onChange={handleChange}
								/>
								{errors.username && (
									<p className="error-message" style={{ color: "red" }}>
										{errors.username}
									</p>
								)}
							</div>
							<div className="row">
								<p className="leftBioFormInputFieldTitle">Password</p>
								<input
									id="password"
									className="form-control inputTagForCreateProfile"
									type="password"
									name="password"
									placeholder="PASSWORD"
									value={formData.password}
									onChange={handleChange}
								/>
								{errors.password && (
									<p className="error-message" style={{ color: "red" }}>
										{errors.password}
									</p>
								)}
							</div>
							<div className="row">
								<p className="leftBioFormInputFieldTitle">Re-Enter Password</p>
								<input
									id="rPassword"
									className="form-control inputTagForCreateProfile"
									type="password"
									name="rPassword"
									placeholder="RE-ENTER PASSWORD"
									value={formData.rPassword}
									onChange={handleChange}
								/>
								{errors.rPassword && (
									<p className="error-message" style={{ color: "red" }}>
										{errors.rPassword}
									</p>
								)}
							</div>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button type="submit" className="Danger">
							Save Profile
						</Button>
						<Button onClick={props.onHide}>Close</Button>
					</Modal.Footer>
				</form>
			</Modal>
      
    </div>
  )
}

export default CreateUserProfile
