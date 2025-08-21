import styles from "./PricingCard.module.css";

function PricingCard({
  badge,
  title,
  price,
  features,
  buttonText,
  onClick,
}) {
  return (
    <div
      className={styles.card}
      onClick={onClick}
    >
      <p>{badge}</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>{price}</p>
      <ul>
        {features.map((feature) => (
          <li>{feature}</li>
        ))}
      </ul>
      <button className={styles.btnSecondary}>
        {buttonText}
      </button>
    </div>
  );
}

export default PricingCard;
