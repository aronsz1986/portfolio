import Head from 'next/head';
import Navbar from '../components/Navbar';

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Portfolio
            </h1>
            <p className="description">
              Incididunt in cillum magna occaecat nisi qui in. Incididunt in
              cillum magna occaecat nisi qui in. Incididunt in cillum magna
              occaecat nisi qui in. Incididunt in cillum magna occaecat nisi qui
              in.
            </p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img src="/chitchat.png" className="portfolio-image" alt="" />
                <img
                  src="https://upleveled.io/images/logo-white-up.png"
                  alt="UpLeveled Logo"
                />
                <h4 className="portfolio-name">Chat App Exploration</h4>
                <div className="portfolio-category">Mobile Dev</div>
              </div>
              <div className="portfolio-item">
                <img src="/kajian.jpg" className="portfolio-image" alt="" />

                <h4 className="portfolio-name">kajian App</h4>
                <div className="portfolio-category">Mobile Dev</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
