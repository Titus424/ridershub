import React from 'react';
import './landing.css';
import {Link} from "react-router-dom";

const Landing = () => {
    return (
        <div>
            <div className="navbar">
                <h1>ROADWAYRIDERS HUB</h1>
                <a href="index.php">donate</a>
                {/*<a href="Registration.html">Register</a>*/}
                <Link to={'/register'}>Registration</Link>
                <a href="termsandcondition.html">About Us</a>
                <a href="contact.html">Contact</a>
            </div>

            <div className="container">
                <div className="card">
                    <img src="kisspng-car-towing-service-tow-truck-roadside-assistance-5b1f8d6d40d926.8491902915287944772656.png" alt="Card 1"/>
                        <h3>Benefit </h3>
                        <p>Register your recovery service to connect with those in need, ensuring your business is readily accessible through our upcoming USSD platform..</p>
                    <Link to={'/register'}>Learn more</Link>
                </div>
                <div className="card">
                    <img src="kisspng-freight-transport-truck-portable-network-graphics-shipping-truck-svg-png-icon-free-download-552331-5c74df306c4553.4115586615511631844435.png" alt="Card 2"/>
                        <h3>Benefit </h3>
                        <p>Home movers can build a solid reputation by featuring on our platform, gaining trust and new clients for seamless relocations.</p>
                        <a href="Registration.html">Learn more</a>
                </div>
                <div className="card">
                    <img src="kisspng-car-towing-tow-truck-vehicle-clip-art-tow-truck-pictures-5a89b71ab67ff1.8095033915189747467475.png" alt="Card 3"/>
                        <h3>Benefit </h3>
                        <p> Make your recovery service accessible to a wider audience by signing up, ensuring prompt assistance for those in distress.</p>
                        <a href="Registration.html">Learn more</a>
                </div>
                <div className="card">
                    <img src="Daco_5241550.png" alt="Card 4"/>
                        <h3>Benefit </h3>
                        <p>Streamline your services and reach more clients. Learn more.</p>
                        <a href="Registration.html">Learn more</a>
                </div>
                <div className="card">
                    <img src="5a357caad20b00.6725297615134547628603.png" alt="Card 5"/>
                        <h3>Benefit</h3>
                        <p>Farm equipment owners, make your machinery available to a broader agricultural audience and grow your equipment rental business.</p>
                        <a href="Registration.html">Learn more</a>
                </div>
                <div className="card">
                    <img src="pngwing.com (24).png" alt="Card 6"/>
                        <h3>Benefit</h3>
                        <p>Stay competitive and relevant in the industry. Learn more.</p>
                        <a href="Registration.html">Learn more</a>
                </div>
                <div className="card">
                    <img src="pngwing.com (23).png" alt="Card 7"/>
                        <h3>Benefit</h3>
                        <p>Power saw experts, make your services accessible for various cutting needs, connecting with clients looking for your expertise."</p>
                        <a href="Registration.html">Learn more</a>
                </div>
                <div className="card">
                    <img src="pngwing.com (22).png" alt="Card 8"/>
                        <h3>Benefit</h3>
                        <p>Lawn maintenance experts, connect with homeowners seeking your services and showcase your skills on our platform</p>
                        <a href="Registration.html">Learn more</a>
                </div>
                <div className="card">
                    <img src="pngwing.com (21).png" alt="Card 9"/>
                        <h3>Benefit</h3>
                        <p>Garden service professionals can flourish by showcasing their skills on our platform, connecting with homeowners in need of their expertise."</p>
                        <a href="Registration.html">Learn more</a>
                </div>
                <div className="card">
                    <img src="pngwing.com (20).png" alt="Card 10"/>
                        <h3>Benefit</h3>
                        <p>Boost your farm equipment rental business by showcasing your machinery on our platform, attracting more users and growing your revenue."</p>
                        <a href="Registration.html">Learn more</a>
                </div>
                <div className="card">
                    <img src="pngwing.com (25).png" alt="Card 11"/>
                        <h3>Benefit</h3>
                        <p>Water transportation truck operators, amplify your business opportunities by connecting with clients in need of bulk water transport services through our platform, ensuring a consistent flow of assignments.</p>
                        <a href="Registration.html">Learn more</a>
                </div>
                <div className="card">
                    <img src="pngwing.com (9).png" alt="Card 12"/>
                        <h3>Benefit </h3>
                        <p>List your construction equipment for hire and expand your clientele by featuring on our platform, reaching a broader customer base."</p>
                        <a href="Registration.html">Learn more</a>
                </div>
                <div className="card">
                    <img src="pngwing.com (8).png" alt="Card 13"/>
                        <h3>Benefit</h3>
                        <p>Equipment rental businesses, feature your construction machinery to increase bookings and expand your customer base."</p>
                        <a href="Registration.html">Learn more</a>
                </div>
                <div className="card">
                    <img src="pngwing.com (7).png" alt="Card 14"/>
                        <h3>Benefit</h3>
                        <p>Forklift operators, expand your reach and connect with businesses in need of your material handling expertise by featuring on our platform, boosting your business opportunities."</p>
                        <a href="Registration.html">Learn more</a>
                </div>
                <div className="card">
                    <img src="pngwing.com (6).png" alt="Card 15"/>
                        <h3>Benefit</h3>
                        <p>Crane operators, expand your crane rental business and attract more clients by showcasing your equipment through our platform.</p>
                        <a href="Registration.html">Learn more</a>
                </div>
                <div className="card">
                    <img src="pngwing.com.png" alt="Card 16"/>
                        <h3>Benefit</h3>
                        <p>Excavator operators, increase your market reach and connect with construction projects seeking your digging prowess by featuring on our platform, ensuring more opportunities come your way."</p>
                        <a href="Registration.html">Learn more</a>
                </div>
                <div className="card">
                    <img src="pngwing.com (5).png" alt="Card 17"/>
                        <h3>Benefit</h3>
                        <p>Bucket loader operators, broaden your market presence and connect with businesses requiring your material handling skills by showcasing on our platform, ensuring a steady flow of job opportunities."</p>
                        <a href="Registration.html">Learn more</a>
                </div>
                <div className="card">
                    <img src="pngwing.com (10).png" alt="Card 18"/>
                        <h3>Benefit</h3>
                        <p>Join us to increase the visibility of your freight truck business, providing efficient logistics solutions through our USSD service."</p>
                        <a href="Registration.html">Learn more</a>
                </div>
                <div className="card">
                    <img src="pngwing.com (11).png" alt="Card 19"/>
                        <h3>Benefit</h3>
                        <p>Expand your freight truck business and secure more deliveries by becoming part of our USSD platform for easier client access."</p>
                        <a href="Registration.html">Learn more</a>
                </div>
                <div className="card">
                    <img src="pngwing.com (12).png" alt="Card 20"/>
                        <h3>Benefit</h3>
                        <p>Ambulance services, enhance your reach and responsiveness by featuring on our platform, connecting with those in urgent need."</p>
                        <a href="Registration.html">Learn more</a>
                </div>
                <div className="card">
                    <img src="pngwing.com (13).png" alt="Card 21"/>
                        <h3>Benefit</h3>
                        <p>Waste collection truck operators, extend your service reach and connect with communities in need of your waste disposal solutions by featuring on our platform, ensuring efficient and reliable waste collection services."</p>
                        <a href="Registration.html">Learn more</a>
                </div>
                <div className="card">
                    <img src="pngwing.com (14).png" alt="Card 22"/>
                        <h3>Benefit</h3>
                        <p>Connect with customers in need of your construction expertise, promoting your services on our USSD platform to generate leads."</p>
                        <a href="Registration.html">Learn more</a>
                </div>
                <div className="card">
                    <img src="pngwing.com (15).png" alt="Card 22"/>
                        <h3>Benefit</h3>
                        <p>Firefighters, join our platform to ensure your life-saving services are readily available to the community in emergency situations."</p>
                        <a href="Registration.html">Learn more</a>
                </div>
                <div class="card">
                    <img src="pngwing.com (16).png" alt="Card 22"/>
                        <h3>Benefit</h3>
                        <p>List your construction equipment inventory to attract project managers and contractors, expanding your rental opportunities."</p>
                        <a href="Registration.html">Learn more</a>
                </div>
                <div class="card">
                    <img src="pngwing.com (17).png" alt="Card 22"/>
                        <h3>Benefit</h3>
                        <p>Construction professionals, use our platform to showcase your expertise, attracting new clients for your projects."</p>
                        <a href="Registration.html">Learn more</a>
                </div>
                <div class="card">
                    <img src="pngwing.com (18).png" alt="Card 22"/>
                        <h3>Benefit</h3>
                        <p>Stay competitive and relevant in the industry. Learn more.</p>
                        <a href="Registration.html">Learn more</a>
                </div>
                <div class="card">
                    <img src="pngwing.com (19).png" alt="Card 22"/>
                        <h3>Benefit</h3>
                        <p>Farm equipment owners, increase your rental business's reach by connecting with farmers in need of your machinery."</p>
                        <a href="Registration.html">Learn more</a>
                </div>
            </div>

            <div class="footer">
                &copy; 2023 RoadwayRiders Hub. All rights reserved.
            </div>
        </div>
    );
};

export default Landing;