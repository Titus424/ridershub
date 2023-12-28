import React from 'react';
import './registration.css';
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import {useNavigate} from "react-router-dom";
const Registration = () => {

    const navigate = useNavigate();
    const [regNumber, setRegNumber] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [vehicleType, setVehicleType] = React.useState("");
    const [serviceOffered, setServiceOffered] = React.useState("");
    const [county, setCounty] = React.useState("");
    const [locality, setLocality] = React.useState("");
    const [termsCheckbox, setTermsCheckbox] = React.useState("");
    const [privacyCheckbox, setPrivacyCheckbox] = React.useState("");
    const [error, setError] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    // create user with email and password and add the rest to firestore operators

    const handleSubmit = async (e) => {
        e.preventDefault();
        const auth = getAuth();

            const db = getFirestore();
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                    setEmail("");
                    setPassword("");
                    navigate("/");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    setError(errorMessage);
                    // ..
                })


            await addDoc(collection(db, "operators"), {
                email: email,
                regNumber: regNumber,
                phone: phone,
                vehicleType: vehicleType,
                serviceOffered: serviceOffered,
                county: county,
                locality: locality
            })
                .then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });


            // clear form and navigate to /login
            setRegNumber("");
            setLocality("");
            setCounty("");
            setServiceOffered("");
            setVehicleType("");
            setPhone("");
            setEmail("");
            setPassword("");
            navigate("/login");

    }


    return (
        <div>

            <div className="logo-container">
                <img src="3.png" alt="Your Logo"/>
            </div>


            <h1>Operator Registration</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email"     onChange={(e) => setEmail(e.target.value)}
                       required/><br/><br/>

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}
                       name="password" required/><br/><br/>

                <label htmlFor="regNumber">Vehicle Registration Number:</label>
                <input type="text" id="regNumber" onChange={(e) => setRegNumber(e.target.value)}
                       name="regNumber" required/><br/><br/>

                    <label htmlFor="phone">Operator's Phone Number:</label>
                    <input type="tel" id="phone" name="phone" onChange={(e) => setPhone(e.target.value)}
                           required/><br/><br/>

                        <label htmlFor="vehicleType">Vehicle Type:</label>
                        {/*<select id="vehicleType" name="vehicleType" required>*/}
                        {/*    <option value="Car">Car</option>*/}
                        {/*    <option value="Truck">Truck</option>*/}
                        {/*    <option value="Motorcycle">Motorcycle</option>*/}
                        {/*</select><br/><br/>*/}
                <select id="vehicleType" name="vehicleType" required onChange={(e) => setVehicleType(e.target.value)}
                >
                    <option value="Car" >Car</option>
                    <option value="Truck" >Truck</option>
                    <option value="Motorcycle" >Motorcycle</option>
                </select><br/><br/>


                        <label htmlFor="serviceOffered">Service Offered:</label>
                        <input type="text" id="serviceOffered" name="serviceOffered" onChange={(e) => setServiceOffered(e.target.value)} required/><br/><br/>

                            <label htmlFor="county">County:</label>
                            <input type="text" id="county" name="county" onChange={(e) => setCounty(e.target.value)} required/><br/><br/>

                                <label htmlFor="locality">Locality:</label>
                                <input type="text" id="locality" name="locality" onChange={(e) => setLocality(e.target.value)} required/>

                                    <input type="checkbox" id="termsCheckbox" name="termsCheckbox" required
                                                onChange={(e) => setTermsCheckbox(e.target.value)}
                                    />
                                        <label htmlFor="termsCheckbox">I agree to the <a href="termsandcondition.html">Terms and Conditions</a></label>

                                        <input type="checkbox" id="privacyCheckbox" name="privacyCheckbox" required
                                                  onChange={(e) => setPrivacyCheckbox(e.target.value)}
                                        />
                                            <label for="privacyCheckbox">I accept the <a href="privacypolicy.html">Privacy Policy</a></label>


                                            <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Registration;