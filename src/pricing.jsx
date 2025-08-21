import { useState } from "react";
import PricingCard from "./pricingcard.jsx";
import styles from "./pricing.module.css";

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [coloured, setColoured] = useState(null);

  const plans = [
    {
      title: "Basic Plan",
      price: isYearly ? "$0/year" : "$0/month",
      features: [
        "Resume Upload",
        "AI Interview",
        "Access to AI Powered Interviews",
      ],
      // highlight: coloured === 0,
      buttonText: "Get Started",
    },
    {
      title: "Standard Plan",
      price: isYearly ? "$288/year" : "$30/month",
      features: [
        "Resume Upload",
        "Priority Applications",
        "150 credit top-ups",
      ],
      // highlight: coloured === 1,
      buttonText: "Get Started",
    },
    {
      title: "Pro Plan",
      price: isYearly ? "$576/year" : "$60/month",
      features: [
        "Resume Upload",
        "Candidate Score",
        "ATS Checker",
        "300 credit top-ups",
      ],
      // highlight: coloured === 2,
      buttonText: "Get Started",
      badge: "Most Popular",
    },
    {
      title: "Enterprise Plan",
      price: "Custom",
      features: [
        "Unlimited Profile Views",
        "500 credit top-ups",
        "IDOTx Verified Talent Pool",
      ],
      // highlight: coloured === 3,
      buttonText: "Contact Sales",
    },
  ];

  return (
    <>
      <div className={styles.head}>
        <h1>Pick the price that's right for you</h1>
        <p>
          Join millions of other customers on this platform <span>$USD</span>
        </p>
      </div>

      <div className={styles.toggle}>
        <button
          className={!isYearly ? styles.active : ""}
          onClick={() => setIsYearly(false)}
        >
          Monthly
        </button>
        <button
          className={isYearly ? styles.active : ""}
          onClick={() => setIsYearly(true)}
        >
          Yearly - 20% off
        </button>
      </div>

      <div className={styles.cardContainer}>
        {plans.map((plan, index) => (
          <PricingCard
            badge={plan.badge}
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            buttonText={plan.buttonText}
            onClick={() => setColoured(coloured === index ? null : index)}
          />
        ))}
      </div>
    </>
  );
}

export default Pricing;
