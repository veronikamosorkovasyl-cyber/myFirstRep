import { useEffect, useState } from "react";

const links = [
  { id: 1, label: "Wiki", href: "https://jojowiki.com/Diamond_is_Unbreakable_(Anime)" },
  { id: 2, label: "Gallery", href: "https://jojowiki.com/Anime_Gallery#2016-2020" },
  { id: 3, label: "Characters", href: "https://jojowiki.com/Category:Part_4_Characters" },
  { id: 4, label: "About", href: "https://jojowiki.com/Diamond_is_Unbreakable#Plot_Summary" },
  {
    id: 5,
    label: "Where to Watch",
    href: "https://uakino.best/animeukr/anime-series/13647-himern-prigodi-dzhodzho-zolotiy-vter-4-sezon.html",
    blank: true,
  },
];

function getInitialTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {}
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function Navbar() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try { localStorage.setItem("theme", theme); } catch {}
  }, [theme]);

  return (
    <div className="nav">
      <nav>
        <ul>
          {links.map((l) => (
            <li key={l.id}>
              <a href={l.href} target={l.blank ? "_blank" : undefined} rel="noreferrer">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <button id="theme-toggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              Theme Change
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
