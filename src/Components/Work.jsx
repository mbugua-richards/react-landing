import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Place your order",
      text: "Fill out our simple order form and provide us with your paper details",
    },
    {
      image: ChooseMeals,
      title: "Review and revise",
      text: "Once the your paper has been completed, you can review it and request any revisions you need",
    },
    {
      image: DeliveryMeals,
      title: "Receive your paper",
      text: "Once you are satisfied with the paper, we will deliver it to you by the agreed-upon deadline",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Our team of writers will review your order and assign a writer who is
          best suited for the task
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
