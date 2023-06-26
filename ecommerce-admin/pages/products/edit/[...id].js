import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const EditProductFormPage = () => {
  const [productInfo, setProductInfo] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  const getId = async () => {
    const { data } = await axios.get("/api/products?id=" + id);
    setProductInfo(data);
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    getId();
  }, [id]);
  return (
    <Layout>
      <h1>Edit Product</h1>
      {productInfo && <ProductForm {...productInfo} />}
    </Layout>
  );
};

export default EditProductFormPage;
