import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

export default function Gallery(params) {
  const [item, setItem] = useState();

  useEffect(() => {
    setItem();
  }, []);

  return (
    <>
      <div className="gallery">
        <ul>
          {item &&
            item.map((i) => (
              <li key={i.id}>
                <ItemCard author="" poster="" />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
