import Link from "next/link"

const products = () => {
  const productList = ["Produto 1 | ", "Produto 2 | ", "Produto 3 | "];

  return (
    <>
      {productList.map((product, index) => (
        <Link key={index + 1} href={`/products/${index + 1}/revi/${index + 1}`}>
          {product}
        </Link>
      ))}
    </>
  );
};

export default products