import Image from "next/image";
import styles from "./page.module.css";
import Button from "./components/Buttons";
import Carrousel from "./components/Carrousel";

export default function Home() {
  const imageArr = [
    "/assets/carrousel_images/image1.jpg",
    "/assets/carrousel_images/image2.jpg",
    "/assets/carrousel_images/image3.jpg",
  ];

  return (
    <>
      <section className={styles.hero}>
        <main className={styles.main}>
          <div className={styles.heroDetails}>
            <h1>Connecting people to the beauty of earth</h1>
            <p className={styles.description}>
              From breathtaking landscapes to serene sunsets, Natura allows you
              to explore the wonders of the natural world.
            </p>
            <div className={styles.list} style={{ marginTop: "1.25rem" }}>
              <Button message={"Explore now"} type={"primary"} />
              <Button message={"Learn more"} type={"secondary"} />
            </div>
          </div>
          <div className={styles.heroCarrousel}>
            <Carrousel imageArr={imageArr} />
          </div>
        </main>
      </section>
      <section>
        <h2></h2>
      </section>
    </>
  );
}
