import React from "react";
import './Confirmation.css'

const Confirmation = () => {


    return (
        <><><div className="outer-div">
            <div className="inner-div">
                <div className="confirmation-text">Your flight has been booked successfully! Your confirmation number is #381029404387</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </div>
        </div><div className="greeting-text">Bon voyage, Sophia!</div><div className="confirmation-number">Confirmation number: #381029404387</div></><div className="summary-div">
                <span className="summary-text">Thank you for booking your travel with Tripme! Below is a summary of your trip to Narita airport in Tokyo, Japan. We’ve sent a copy of your booking confirmation to your email address. You can also find this page again in </span>
                <span className="my-trips-text">My trips</span>
                <span className="summary-text">.</span>
            </div>
            <div>
                <div className="flight-summary">Flight summary</div>
                <div>
                    <div className="departure-date">Departing February 25th, 2024</div>

                    <div className="outer-container">
                        <div className="info-container">
                            <div className="info-row">
                                <div className="info-text">16h 45m</div>
                                <div className="info-text">7:00AM - 4:15PM</div>
                                <div className="info-text right-align">1 stop</div>
                                <div className="info-text right-align">$624</div>
                            </div>
                            <div className="info-row">
                                <div className="info-text secondary">Tripme Airlines</div>
                                <div className="info-text secondary">value</div>
                                <div className="info-text secondary right-align">2h 45m in HNL</div>
                                <div className="info-text secondary right-align">round trip</div>
                            </div>
                        </div>
                    </div>

                    <div className="seat-info">Seat 9F (economy, window), 1 checked bag</div>
                </div>

                <div>
                    <div className="departure-date">Arriving March 31st, 2024</div>

                    <div className="outer-container">
                        <div className="info-container">
                            <div className="info-row">
                                <div className="info-text">16h 45m</div>
                                <div className="info-text">7:00AM - 4:15PM</div>
                                <div className="info-text right-align">1 stop</div>
                                <div className="info-text right-align">$624</div>
                            </div>
                            <div className="info-row">
                                <div className="info-text secondary">Tripme Airlines</div>
                                <div className="info-text secondary">value</div>
                                <div className="info-text secondary right-align">2h 45m in HNL</div>
                                <div className="info-text secondary right-align">round trip</div>
                            </div>
                        </div>
                    </div>

                    <div className="seat-info">Seat 4F (business, window), 1 checked bag</div>
                </div>
            </div>

            <div>
                <div className="price-breakdown">Price breakdown</div>
            </div>



            <div className="shop-hotels">
                <span className="shop-text">Shop </span>
                <span className="hotels-text">hotels</span>

                <div className="hotel-deal">Tripme partners with thousands of hotels to get you the best deal. Save up to 30% when you add a hotel to your trip.</div>
                <div className="hotel-card">
                    <img className="hotel-image" src="https://a2.cdn.japantravel.com/photo/59042-198695/1440x960!/guide-to-ryokan-198695.jpg" />
                    <div className="hotel-info">
                        <div className="hotel-header">
                            <div className="hotel-name">Ryokan Japan</div>
                            <div className="hotel-price">$439</div>
                        </div>
                        <div className="hotel-description">Enjoy views of the garden from your room</div>
                    </div>
                </div>

                <div className="hotel-card">
                    <img className="hotel-image" src="https://taketheleaptravel.com/wp-content/uploads/2018/09/20190429_120922-01.jpeg" />
                    <div className="hotel-info">
                        <div className="hotel-header">
                            <div className="hotel-name">HOTEL THE FLAG 大阪市n</div>
                            <div className="hotel-price">$139</div>
                        </div>
                        <div className="hotel-description">Modern hotel in the heart of Osaka</div>
                    </div>
                </div>

                <div className="hotel-card">
                    <img className="hotel-image" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/354898473.jpg?k=b93a4a166da31fed33e7ac68c6386d7e8abd25e40258375f60fc2418eff5fcb9&o=&hp=17" />
                    <div className="hotel-info">
                        <div className="hotel-header">
                            <div className="hotel-name">9 Hours Shinjuku</div>
                            <div className="hotel-price">$59</div>
                        </div>
                        <div className="hotel-description">A convenient capsule hotel at Shinjuku station</div>
                    </div>
                </div>

                <div className="hotel-card">
                    <img className="hotel-image" src="https://selected-ryokan.com/wp-content/uploads/2016/02/bessho-sasa_a001r_mtfuji.jpg" />
                    <div className="hotel-info">
                        <div className="hotel-header">
                            <div className="hotel-name">Bessho SASA</div>
                            <div className="hotel-price">$529</div>
                        </div>
                        <div className="hotel-description">Japanese ryokan with private onsen bath</div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Confirmation;