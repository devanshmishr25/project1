import styles from "./PricingCard.module.css";

function PricingCard({
  badge,
  highlight,
  title,
  price,
  features,
  buttonText,
  onClick,
}) {
  return (
    <div
      className={`${styles.card} ${highlight ? styles.highlight : ""}`}
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
      <button className={highlight ? styles.btnPrimary : styles.btnSecondary}>
        {buttonText}
      </button>
    </div>
  );
}

export default PricingCard;
