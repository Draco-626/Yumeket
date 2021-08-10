import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import vector_left from '../assets/vector_left.png';
import img from '../assets/yumeket.svg';
import vector_search from '../assets/vector_search.png';




const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.flexWrapperThirteen}>
        <img
          alt=""
          className={styles.vectorLeft1}
          src={vector_left}
        />
        <div>
        <Link to="/" >
        <img
          alt=""
          className={styles.logo}
          src={img}
        /></Link>
        </div>
        <div className={styles.flexWrapperEleven}>
          <img
            alt=""
            className={styles.vectorSearch1}
            src={vector_search}
          />
          <p className={styles.searchWorks}>Search works</p>
        </div>
        <div className={styles.flexWrapperTwelve}>
          <p className={styles.postYourWork}>
            Post your work
          </p>
          <img
            alt=""
            className={styles.vectorSearch21}
            src="https://static.overlay-tech.com/assets/aba52419-f421-4d67-9383-0b16a16c39f5.png"
          />
        </div>
        <img
          alt=""
          className={styles.vectorMail1}
          src="https://static.overlay-tech.com/assets/2fb0d015-3c1d-48cc-b7cc-47857b331c57.png"
        />
        <img
          alt=""
          className={styles.vectorRing1}
          src="https://static.overlay-tech.com/assets/8cb02e24-1d5d-4e54-ab67-1a8e9c790d09.png"
        />
        <img
          alt=""
          className={styles.rectangle}
          src="https://static.overlay-tech.com/assets/ced6086d-07c4-4d24-ba24-2202cbcd1746.png"
        />
        <img
          alt=""
          className={styles.vector}
          src="https://static.overlay-tech.com/assets/a45a42c6-ce9c-416c-a205-286cf3a096d0.png"
        />
      </div>
      <div className={styles.flexWrapperTen}>
        <p className={styles.original}>#Original</p>
      </div>
      <img
        alt=""
        className={styles.rectanglehrec141}
        src="https://static.overlay-tech.com/assets/90439fdc-6d51-4c4a-bac6-cbd237fa9ab7.png"
      />
      <div className={styles.flexWrapperFourteen}>
        <div className={styles.flexWrapperOne}>
          <p className={styles.illustrations}>
            Illustrations
          </p>
        </div>
        <div className={styles.flexWrapperTwo}>
          <p className={styles.manga}>Manga</p>
        </div>
        <div className={styles.flexWrapperThree}>
          <p className={styles.manga}>Novels</p>
        </div>
        <div className={styles.flexWrapperFour}>
          <p className={styles.all}>All</p>
        </div>
        <p className={styles.r18}>R-18</p>
      </div>
      <div className={styles.flexWrapperFifteen}>
        <p className={styles.worksByUsersYouAreFollowing}>
          Works by users you are following
        </p>
        <p className={styles.seeAll}>See all</p>
      </div>
      <div className={styles.flexWrapperSixteen}>
        <div className={styles.flexWrapperFive}>
          <img
            alt=""
            className={styles.vectorTwo}
            src="https://static.overlay-tech.com/assets/ab548c98-2d12-4906-9fa6-f62459ad7a45.svg"
          />
          <img
            alt=""
            className={styles.vectorThree}
            src="https://static.overlay-tech.com/assets/16475b31-797f-4436-99e4-730f6669fdb6.svg"
          />
        </div>
        <img
          alt=""
          className={styles.vec2}
          src="https://static.overlay-tech.com/assets/723b5649-6a1f-4c1e-9783-1d4c85fcfeb3.png"
        />
      </div>
      <p className={styles.font3}>
        「アカクロ真夏のイラスト....
      </p>
      <div className={styles.flexWrapperSeventeen}>
        <img
          alt=""
          className={styles.rectangleTwo}
          src="https://static.overlay-tech.com/assets/fe86b802-5b17-4296-9595-35caa6ec4d0c.png"
        />
        <p className={styles.pixiv}>pixiv事務局</p>
      </div>
      <p className={styles.recommendedWorks}>
        Recommended works
      </p>
      <div className={styles.flexWrapperSix}>
        <img
          alt=""
          className={styles.vectorTwo}
          src="https://static.overlay-tech.com/assets/491051db-b47e-4a12-b08d-9b03f3b0bfc9.svg"
        />
        <img
          alt=""
          className={styles.vectorThree}
          src="https://static.overlay-tech.com/assets/f3be1279-b5e2-40b6-9467-34f1091c3718.svg"
        />
      </div>
      <p className={styles.font3}>無人列車</p>
      <div className={styles.flexWrapperEighteen}>
        <img
          alt=""
          className={styles.rectangleThree}
          src="https://static.overlay-tech.com/assets/a43c8ae1-0f54-49f8-afc5-182b09936b74.png"
        />
        <p className={styles.font2}>ワベマ</p>
      </div>
      <div className={styles.flexWrapperNineteen}>
        <p className={styles.dailyRanking}>Daily ranking</p>
        <p className={styles.seeAllTwo}>See all</p>
      </div>
      <p className={styles.jul27thRanking}>
        Jul 27th ranking
      </p>
      <div className={styles.flexWrapperTwenty}>
        <div className={styles.flexWrapperSeven}>
          <div className={styles.flexWrapperNine}>
            <p className={styles.num1}>1</p>
          </div>
          <div className={styles.flexWrapperEight}>
            <img
              alt=""
              className={styles.vectorFour}
              src="https://static.overlay-tech.com/assets/4c6af94e-4231-4746-b77a-d95dc8a249e7.svg"
            />
          </div>
        </div>
        <img
          alt=""
          className={styles.vec1}
          src="https://static.overlay-tech.com/assets/377c9fe7-6414-4e6d-ac4e-b8704e28d64b.png"
        />
      </div>
      <p className={styles.num123}>パワー</p>
      <div className={styles.flexWrapperTwentyOne}>
        <img
          alt=""
          className={styles.rectangleThsree}
          src="https://static.overlay-tech.com/assets/82af9548-1bbb-4712-952c-2b832bbed980.png"
        />
        <p className={styles.num121}>望月けい</p>
      </div>
    </div>
  );
};

export default Home;

