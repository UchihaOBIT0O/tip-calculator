import { useState } from "react";
import { Bill } from "./Bill";
import { Service } from "./Service";
import { Pay } from "./Pay";
import { Button } from "./Button";

export default function App() {
  const [price, setPrice] = useState("");
  const [service, setService] = useState(0);
  const [service1, setService1] = useState(0);

  function handleReset() {
    setPrice("");
    setService(0);
    setService1(0);
  }

  const tip = (price * (service + service1)) / 2 / 100;

  return (
    <div>
      <Bill price={price} setPrice={setPrice} />
      <Service service={service} setService={setService}>
        How did you like the service?
      </Service>
      <Service service={service1} setService={setService1}>
        How did your friend like the service?
      </Service>
      {price > 0 && (
        <>
          <Pay tip={tip} price={price} />
          <Button handleReset={handleReset} />
        </>
      )}
    </div>
  );
}
