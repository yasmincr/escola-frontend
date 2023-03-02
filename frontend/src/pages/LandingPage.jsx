import React from "react";
import styles from "./LandingPage.module.css";

import rectangle from "../img/rectangle.svg";
import professor from "../img/professor.svg";

function LandingPage() {
  return (
    <div className={styles.landingBg}>
      <div className={styles.cover}>
        <img src={professor} alt="" />

        <div className={styles.landingPage}>
          <img src={rectangle} alt="" />
          <div className={styles.title}>
            <h1>Sobre a Elite<span>.</span></h1>
            <div className={styles.description}>
              <h3>
                Aplicação com o foco de auxiliar no dia a dia o planejamento de
                notas e professores com rapidez e organização.
              </h3>
              <div className={styles.container}></div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
