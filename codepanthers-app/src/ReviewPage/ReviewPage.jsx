import React from "react";
import './ReviewPage.css'

export default function ReviewPage() {

    return(

        <><div className="help-tripme">Help Tripme</div><div className="reduce">Reduce</div><div className="food">Food Wastage</div><div className="details">
            Despite a growing in-flight catering market, valued at $18 billion in
            2019 with expectations to reach $24 billion by 2027, 86% of airlines
            are planning sustainability investments by 2024, which may include
            efforts to minimize food waste.
        </div><div>
                <img
                    className="placeholder-image"
                    src="https://www.realsimple.com/thmb/RxAC0RVmFtJcqEekPwqs5GutS0A=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/easy-dinner-recipes-f768402675e04452b1531360736da8b5.jpg"
                    alt="Placeholder Image" />
            </div>

            
            <div className="review"> Review </div>
            <div>
          <div className="meal-title">Main meal</div>
          <div className="container">
            {/* Gyro Sandwich Checkbox */}
            <div>
              <div className="card">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/gyro-sandwich1-1650490757.jpg?crop=0.844xw:1.00xh;0.0267xw,0&resize=1200:*"
                  alt="Food"
                  className="card-image"
                />
                <div className="card-content">
                  <div className="card-content1">
                    <h2 className="card-title">Gyro Sandwich</h2>
                    <h6
                      className="dietary-options"
                    >
                      Dietary Options
                    </h6>
                  </div>
                  <p className="card-details">
                    Seasoned meat (beef, lamb, or chicken) in warm pita with
                    tzatziki, tomatoes, onions, lettuce. Optional: feta, olives,
                    peppers, cucumbers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div>
          <div className="meal-title">Appetizer</div>
          <div className="container">
            {/* Gyro Sandwich Checkbox */}
            <div>
              <div className="card">
                <img
                  src="https://previews.123rf.com/images/juliasudnitskaya/juliasudnitskaya1607/juliasudnitskaya160700055/62316211-wooden-bowl-with-mixed-nuts-on-white-table-top-view-healthy-food-and-snack-walnut-pistachios-almonds.jpg"
                  alt="Food"
                  className="card-image"
                />
                <div className="card-content">
                  <div className="card-content1">
                    <h2 className="card-title">Mixed Nuts</h2>
                    <h6
                      className="dietary-options"
                    >
                      Dietary Options
                    </h6>
                  </div>
                  <p className="card-details">
                  A small serving of mixed nuts, such as almonds, walnuts, and
                    cashews, is a classic and nutritious choice, healthy
                    appetizer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="meal-title">Dessert</div>
        <div className="dessert">No Dessert</div>

        <button className="continue-button">
         Submit
        </button>

             </>
            
    )
};


