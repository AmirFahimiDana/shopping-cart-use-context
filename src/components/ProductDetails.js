
// استفاده میکنیم use context در حالتی که از 
//کنیم به خطا میخوریم referesh  چون دیتا از کامپوننت قبلی میاید اگر صفحه رو
// در حالت فعلی چون دیتا از سرور خوانده میشود 
//این خطا رو نداریم ولی سرعت خیلی کند تری نسبت به حالت قبل داریم
//import { useContext } from "react";

import React, { useEffect , useState } from "react";
import { Link, useParams } from "react-router-dom";

// API
import { getProductDetail } from '../services/api';

//به کامنت بالای صفحه مراجعه شود
// Context
//import { ProductsContext } from "../context/ProductContextProvider";

// Style
import styles from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  //react-router-dom version 6
  const params = useParams();
  const id = params.id;

  //react-router-dom version 5
  //const id = props.match.params.id;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProductDetail(id));
    };

    fetchAPI();
  }, [id]);

  //به کامنت بالای صفحه مراجعه شود
  //const data = useContext(ProductsContext);
  //const product = data[id - 1];

  const { image, title, description, price, category } = products;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="product" />
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}>
          <span>Category:</span> {category}
        </p>
        <div className={styles.buttonContainer}>
          <span className={styles.price}>{price} $</span>
          <Link to="/products">Back to Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
