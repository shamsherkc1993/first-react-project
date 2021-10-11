import React from "react";
import { Link } from "react-router-dom";
import Footer from './common/Footers';
const Home = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>BURGER Devlivery</h3>
            <h1>BURGER HOUSE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              minus ut mollitia error molestiae quia.
            </p>
            <div className="banner__btn">
              <Link to="/shop" className="btn btn-smart">
                DEVLERY NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO BURGER HOUSE</h1>
            <p>
              Investigationes demonstraverunt lectores legere me lius quod ii
              legunt saepius. Claritas est etiam processus dynaus, quise
              sequitur mutationem consuetudium lectorum.
            </p>
            <div className="about__btn">
              <Link to="/shop" className="btn btn-smart">
                VIEW MORE
              </Link>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="/img/abt.jpg" alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src="/img/abt.jpg" alt="burger" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>The BURGER Menu</h3>
            <h1>KYOTO SPECIAL</h1>
            <p>
              Investigationes demonstraverunt lectores legere me lius quod ii
              legunt saepius. Claritas est etiam processus dynaus, quise
              sequitur mutationem consuetudium lectorum.
            </p>
            <div className="about__btn">
              <Link to="/shop" className="btn btn-smart">
                VIEW MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="clients">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="client">
              <h1>300</h1>
              <p>Awesome Employees</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>59</h1>
              <p>BURGER Types</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>4357</h1>
              <p>Satisfied Customers</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>5647</h1>
              <p>Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="prices">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/burger1.jpg" alt="pizza" />
              </div>
              <h1 className="price__heading">Burger with Soup</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">$50.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/burger2.jpg" alt="pizza" />
              </div>
              <h1 className="price__heading">3 piece burger</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">$35.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/burger3.jpg" alt="pizza" />
              </div>
              <h1 className="price__heading">Special Burger</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">$59.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/burger4.jpg" alt="pizza" />
              </div>
              <h1 className="price__heading">Chicken Burger</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">$42.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/burger5.jpg" alt="pizza" />
              </div>
              <h1 className="price__heading">Pork Burger</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">$40.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/burger6.jpg" alt="pizza" />
              </div>
              <h1 className="price__heading">Cheese Burger</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">$12.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default Home;
