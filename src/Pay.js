export function Pay({ tip, price }) {
  return (
    <p className="pay">
      You pay {tip + price} (${price} + ${tip} tip)
    </p>
  );
}
