import { useState } from "react";

export default function Card({ title, text, image }) {
  const [count, setCount] = useState(0);

  return (
    <section className="slide2">
      <img src={image} alt={title} />
      <div className="info">
        <h4>{title}</h4>
        <h6>{text}</h6>
        <button className="like-btn" onClick={() => setCount(count + 1)}>
          ❤ {count}
        </button>
      </div>
    </section>
  );
}
