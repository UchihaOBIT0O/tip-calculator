export function Bill({ price, setPrice }) {
  return (
    <div className="bill">
      <p>How much was the bill?</p>
      <input
        onChange={(el) => setPrice(Number(el.target.value))}
        type="text"
        placeholder="enter the amount"
        size={24}
        value={price}
      ></input>
    </div>
  );
}
