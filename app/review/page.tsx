import Cushion from "@/components/layout/Cushion";
import ReviewTable from "@/components/main/reviews/ReviewTable";
import ReviewsCard from "@/components/reviews/ReviewsCard";

const ReviewPage = () => {
  return (
    <main className="pt-[5rem]">
      <ReviewsCard isReviewPage />
      <ReviewTable />
      <Cushion />
    </main>
  );
};

export default ReviewPage;
