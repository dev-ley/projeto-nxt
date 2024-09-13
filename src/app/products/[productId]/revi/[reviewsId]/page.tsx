import { notFound } from "next/navigation";

interface ReviewsParams {
  params: {
    productId: number;
    reviewsId: string;  // Primeiro capturamos como string
  };
}

const Review = ({ params }: ReviewsParams) => {
  const reviewId = Number(params.reviewsId); // Convertendo para número

  // Verifica se é um número válido e se é <= 300
  if (isNaN(reviewId) || reviewId > 300) {
    notFound();
  }

  return (
    <div>
      <h1>Product ID: {params.productId}</h1>
      <h2>Review ID: {reviewId}</h2>
    </div>
  );
};

export default Review;
