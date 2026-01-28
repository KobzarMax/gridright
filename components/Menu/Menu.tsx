"use client";

import { useEffect, useState } from "react";
import NavLink from "../ui/Link/NavLink";
import styles from "./Menu.module.css";

const items = [
  { href: "#zielgruppe", label: "Zielgruppe" },
  { href: "#unser-ansatz", label: "Unser Ansatz" },
  { href: "#funktionen", label: "Funktionen" },
  { href: "#sicherheit", label: "Sicherheit" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Menu({ action }: { action?: () => void }) {
  const [hash, setHash] = useState<string>("");
  console.log(hash);

  const handleChange = (hash: string) => {
    setHash(hash);
  };

  useEffect(() => {
    const sync = () => setHash(window.location.hash || "");
    sync();
  }, []);


  return (
    <div className={`${styles.navWrap} rounded-2xl! lg:rounded-full! lg:w-fit! w-full!`}>
      <div className={`${styles.bubble} ${styles.bubbleActive}`} />
      <div className={`${styles.bubble} ${styles.bubbleHover}`} />

      <nav className={`${styles.nav} in-[.visible]:flex-col`} aria-label="Hauptmenü">
        {items.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            className={styles.navLink}
            activeClassName={styles.active}
            isActive={hash === item.href}
            action={action}
            onChange={handleChange}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
