import ReviewTable from "@/components/main/reviews/ReviewTable";
import ReviewsCard from "@/components/reviews/ReviewsCard";

const ReviewPage = ({ searchParams }: { searchParams: { page: string } }) => {
  const pageNumber = searchParams.page;

  return (
    <main className="pt-[5rem]">
      <ReviewsCard isReviewPage />
      <ReviewTable currentPage={Number(pageNumber ?? 1)} />
    </main>
  );
};

export default ReviewPage;
