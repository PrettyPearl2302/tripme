import React, { useState } from 'react';
import './MealPlan.css';
import DietaryPopup from '../DietaryPopup/DietaryPopup';

function MealPlan() {
    const [mainMealSelection, setMainMealSelection] = useState({
        gyro: false,
        enchilada: false,
        noMeal: false,
    });

    const [appetizerSelection, setAppetizerSelection] = useState({
        fruitSkewers: false,
        mixedNuts: false,
        noAppetizer: false,
    });

    const [dessertSelection, setDessertSelection] = useState({
        lemonCake: false,
        ricePudding: false,
        noDessert: false,
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleMealChange = (meal, category) => {
        console.log('Changing selection:', meal);

        const selectionActions = {
            main: setMainMealSelection,
            appetizer: setAppetizerSelection,
            dessert: setDessertSelection,
        };

        const currentSelections = {
            main: mainMealSelection,
            appetizer: appetizerSelection,
            dessert: dessertSelection,
        };

        if (currentSelections[category][meal]) {
            selectionActions[category](prevState => ({ ...prevState, [meal]: false }));
        } else if (Object.values(currentSelections[category]).some(value => value)) {
            console.log('Showing popup');
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false);
                console.log('Hiding popup');
            }, 2000);
        } else {
            selectionActions[category]({
                ...Object.keys(currentSelections[category]).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
                [meal]: true,
            });
        }
    };

    const [showDietaryPopup, setShowDietaryPopup] = useState(false);

    // Handler to show the dietary popup
    const handleShowDietaryPopup = () => {
        setShowDietaryPopup(true);
    };

    // Handler to hide the dietary popup
    const handleHideDietaryPopup = () => {
        setShowDietaryPopup(false);
    };

    return (
        <>
            {showPopup && (
                <div className="popup">
                    <p className="popup-message">Please select only one option.</p>
                </div>
            )}

            {showDietaryPopup && (
                <DietaryPopup onClose={handleHideDietaryPopup} />
            )}

            <div className={`meal-plan-container ${showDietaryPopup ? 'blur' : ''}`}>
                <div className="help-tripme">Help Tripme</div>
                <div className="reduce">Reduce</div>
                <div className='food'>Food Wastage</div>
                <div className='details'>Despite a growing in-flight catering market, valued at $18 billion in 2019 with expectations to reach $24 billion by 2027, 86% of airlines are planning sustainability investments by 2024, which may include efforts to minimize food waste.</div>
                <div>
                    <img className="placeholder-image" src="https://www.realsimple.com/thmb/RxAC0RVmFtJcqEekPwqs5GutS0A=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/easy-dinner-recipes-f768402675e04452b1531360736da8b5.jpg" alt="Placeholder Image" />
                </div>

                <div className="flight-title">First Flight</div>
                <div>
                    <div className="meal-title">Main meal</div>
                    <div className="choice">Choose One</div>
                    <div className="container">
                        {/* Gyro Sandwich Checkbox */}
                        <div>
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    checked={mainMealSelection.gyro}
                                    onChange={() => handleMealChange('gyro', 'main')}
                                />
                                <span className="checkbox-custom"></span>
                            </label>
                            <div className="card">
                                <img src="https://hips.hearstapps.com/hmg-prod/images/gyro-sandwich1-1650490757.jpg?crop=0.844xw:1.00xh;0.0267xw,0&resize=1200:*" alt="Food" className="card-image" />
                                <div className="card-content">
                                    <div className="card-content1">
                                        <h2 className="card-title">Gyro Sandwich</h2>
                                        <h6 onClick={handleShowDietaryPopup} className="dietary-options">Dietary Options</h6>
                                    </div>
                                    <p className="card-details">Seasoned meat (beef, lamb, or chicken) in warm pita with tzatziki, tomatoes, onions, lettuce. Optional: feta, olives, peppers, cucumbers.</p>
                                </div>
                            </div>
                        </div>
                        {/* Enchilada Checkbox */}
                        <div>
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    checked={mainMealSelection.enchilada}
                                    onChange={() => handleMealChange('enchilada', 'main')}
                                />
                                <span className="checkbox-custom"></span>
                            </label>
                            <div className="card">
                                <img src="https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_5514_44222.jpg" alt="Food" className="card-image" />
                                <div className="card-content">
                                    <div className="card-content1">
                                        <h2 className="card-title">Enchilada</h2>
                                        <h6 onClick={handleShowDietaryPopup} className="dietary-options">Dietary Options</h6>
                                    </div>
                                    <p className="card-details">Rolled tortillas filled with seasoned meat, cheese, and other ingredients, topped with enchilada sauce and baked.</p>
                                </div>
                            </div>
                        </div>
                        {/* No Main Meal Checkbox */}
                        <div className="noOption">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={mainMealSelection.noMeal}
                                    onChange={() => handleMealChange('noMeal', 'main')}
                                />
                                <span className="checkbox-custom"></span>
                            </label>
                            <span>No Main Meal</span>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="meal-title">Appetizers</div>
                    <div className="choice">Choose One</div>
                    <div className="container">
                        {/* Fruit Skewers Checkbox */}
                        <div>
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    checked={appetizerSelection.fruitSkewers}
                                    onChange={() => handleMealChange('fruitSkewers', 'appetizer')}
                                />
                                <span className="checkbox-custom"></span>
                            </label>
                            <div className="card">
                                <img src="https://cravinghomecooked.com/wp-content/uploads/2023/07/rainbow-fruit-skewers-1-10.jpg" alt="Food" className="card-image" />
                                <div className="card-content">
                                    <div className="card-content1">
                                        <h2 className="card-title">Fruit Skewers</h2>
                                        <h6 onClick={handleShowDietaryPopup} className="dietary-options">Dietary Options</h6>
                                    </div>
                                    <p className="card-details">Skewers with a mix of fresh fruit, like melon, berries, and grapes, can serve as a refreshing and healthy appetizer.</p>
                                </div>
                            </div>
                        </div>
                        {/* Mixed Nuts Checkbox */}
                        <div>
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    checked={appetizerSelection.mixedNuts}
                                    onChange={() => handleMealChange('mixedNuts', 'appetizer')}
                                />
                                <span className="checkbox-custom"></span>
                            </label>
                            <div className="card">
                                <img src="https://previews.123rf.com/images/juliasudnitskaya/juliasudnitskaya1607/juliasudnitskaya160700055/62316211-wooden-bowl-with-mixed-nuts-on-white-table-top-view-healthy-food-and-snack-walnut-pistachios-almonds.jpg" alt="Food" className="card-image" />
                                <div className="card-content">
                                    <div className="card-content1">
                                        <h2 className="card-title">Mixed Nuts</h2>
                                        <h6 onClick={handleShowDietaryPopup} className="dietary-options">Dietary Options</h6>
                                    </div>
                                    <p className="card-details">A small serving of mixed nuts, such as almonds, walnuts, and cashews, is a classic and nutritious choice, healthy appetizer</p>
                                </div>
                            </div>
                        </div>
                        {/* No Appetizer Checkbox */}
                        <div className="noOption">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={appetizerSelection.noAppetizer}
                                    onChange={() => handleMealChange('noAppetizer', 'appetizer')}
                                />
                                <span className="checkbox-custom"></span>
                            </label>
                            <span>No Appetizer</span>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="meal-title">Dessert</div>
                    <div className="choice">Choose One</div>
                    <div className="container">
                        {/* Lemon Cake Checkbox */}
                        <div>
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    checked={dessertSelection.lemonCake}
                                    onChange={() => handleMealChange('lemonCake', 'dessert')}
                                />
                                <span className="checkbox-custom"></span>
                            </label>
                            <div className="card">
                                <img src="https://chelsweets.com/wp-content/uploads/2023/04/slice-of-lemon-curd-cake-on-platev2-scaled-720x540.jpg" alt="Food" className="card-image" />
                                <div className="card-content">
                                    <div className="card-content1">
                                        <h2 className="card-title">Lemon Cake</h2>
                                        <h6 onClick={handleShowDietaryPopup} className="dietary-options">Dietary Options</h6>
                                    </div>
                                    <p className="card-details">A slice of moist and zesty lemon cake, drizzled with a light lemon glaze</p>
                                </div>
                            </div>
                        </div>
                        {/* Rice Pudding Checkbox */}
                        <div>
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    checked={dessertSelection.ricePudding}
                                    onChange={() => handleMealChange('ricePudding', 'dessert')}
                                />
                                <span className="checkbox-custom"></span>
                            </label>
                            <div className="card">
                                <img src="https://spicysouthernkitchen.com/wp-content/uploads/Rice-Pudding-2.jpg" alt="Food" className="card-image" />
                                <div className="card-content">
                                    <div className="card-content1">
                                        <h2 className="card-title">Rice Pudding</h2>
                                        <h6 onClick={handleShowDietaryPopup} className="dietary-options">Dietary Options</h6>
                                    </div>
                                    <p className="card-details">A portion of rice pudding with a hint of cinnamon offers a comforting option.</p>
                                </div>
                            </div>
                        </div>
                        {/* No Main Meal Checkbox */}
                        <div className="noOption">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={dessertSelection.noDessert}
                                    onChange={() => handleMealChange('noDessert', 'dessert')}
                                />
                                <span className="checkbox-custom"></span>
                            </label>
                            <span>No Dessert</span>
                        </div>
                    </div>
                </div>

                <button className="continue-button">Continue</button>
            </div>

        </>
    );
}

export default MealPlan;
