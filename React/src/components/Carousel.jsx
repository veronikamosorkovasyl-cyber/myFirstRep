import { Children, useEffect, useRef, useState } from "react";

export default function Carousel({ wrapClass, wrapId, trackClass, trackId, interval = 3000, children }) {
  const trackRef = useRef(null);
  const scrollTimer = useRef(null);
  const slides = Children.toArray(children);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  function goTo(i) {
    const n = (i + slides.length) % slides.length;
    const track = trackRef.current;
    const slide = track.children[n];
    track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
    setIndex(n);
  }

  // автоперемикання
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => goTo(index + 1), interval);
    return () => clearInterval(t);
  });

  // синхронізація крапок при ручному гортанні
  function onScroll() {
    clearTimeout(scrollTimer.current);
    scrollTimer.current = setTimeout(() => {
      const track = trackRef.current;
      let best = 0, bestDist = Infinity;
      Array.from(track.children).forEach((el, i) => {
        const d = Math.abs(el.offsetLeft - track.offsetLeft - track.scrollLeft);
        if (d < bestDist) { bestDist = d; best = i; }
      });
      setIndex(best);
    }, 80);
  }

  return (
    <div
      className={wrapClass}
      id={wrapId}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={trackClass} id={trackId} ref={trackRef} onScroll={onScroll}>
        {slides}
      </div>
      <button className="carousel-btn prev" aria-label="Попередній слайд" onClick={() => goTo(index - 1)}>‹</button>
      <button className="carousel-btn next" aria-label="Наступний слайд" onClick={() => goTo(index + 1)}>›</button>
      <div className="carousel-dots">
        {slides.map((_, n) => (
          <span key={n} className={"dot" + (n === index ? " active" : "")} onClick={() => goTo(n)} />
        ))}
      </div>
    </div>
  );
}
