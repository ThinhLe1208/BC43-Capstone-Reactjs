import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { usersThunk } from "redux/thunks/usersThunk";
import styles from "./styles.module.scss";
import InputFooter from "components/InputFooterA";
import TextHoverFooter from "components/TextHoverFooterA";
import { Select } from "antd";
import TextHover from "components/TextHoverA";

const Footer = () => {
  const dispatch = useDispatch();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        name: "",
        gender: true,
        phone: "",
      },
      validationSchema: "",
      onSubmit: (values) => {
        console.log(values);
        dispatch(usersThunk.contact(values));
      },
    });
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Subscribe Now</h1>
          <p>Whether you need to sell your products, share some big news</p>
          <div className={styles.contactEmail}>
            <form onSubmit={handleSubmit}>
              <TextHoverFooter content={"sub"} className={styles.sub} />
              <InputFooter
                label="Email"
                name="email"
                value={values.email}
                error={errors.email}
                touched={touched.email}
                placeholder=" "
                onChange={handleChange}
                onBlur={handleBlur}
                colorText={"white"}
                colorInput={"white"}
              />
            </form>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.item}>
            <h1>
              <img
                src="https://cdn.shopify.com/s/files/1/0567/9169/5421/files/Group_1863_226x.png?v=1650346870"
                alt=""
              />
            </h1>
            <ul>
              <li>4800 San Mateo Ln NE</li>
              <li>(505) 881-0080</li>
              <li>your@email.com</li>
            </ul>
          </div>
          <div className={styles.item}>
            <h1>Extra</h1>
            <ul>
              <li>
                <TextHoverFooter content={"Search"} />
              </li>
              <li>
                <TextHoverFooter content={"News"} />
              </li>
              <li>
                <TextHoverFooter content={"All Collections"} />
              </li>
              <li>
                <TextHoverFooter content={"All Products"} />
              </li>
            </ul>
          </div>
          <div className={styles.item}>
            <h1>Service</h1>
            <ul>
              <li>
                <TextHoverFooter content={"About Us"} />
              </li>
              <li></li>
              <li>
                <TextHoverFooter content={"Wishlist"} />
              </li>
              <li>
                <TextHoverFooter content={"Information"} />
              </li>
              <li>
                <TextHoverFooter content={"Privacy Policy"} />
              </li>
              <li>
                <TextHoverFooter content={"Terms & Conditions"} />
              </li>
            </ul>
          </div>
          <div className={styles.item}>
            <h1>Language & Currency</h1>
            <ul>
              <li>
                <Select
                  defaultValue="lucy"
                  style={{
                    width: 120,
                    backgroundColor: "red",
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "Yiminghe",
                      label: "yiminghe",
                    },
                  ]}
                />
              </li>
              <li>a</li>
              <li>a</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <p>© 2023,</p>
            <TextHoverFooter content={"TabBase"} />
            <span></span>
            <TextHoverFooter content={"Powered by Shopify"} />
          </div>
          <div className={styles.contentRight}>a a a a a a</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
