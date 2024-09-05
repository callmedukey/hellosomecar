import React from "react";

interface ReviewCardProps {
  title: string;
  content: string;
  date: string;
  reviewer: string;
  stars: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  title,
  content,
  date,
  reviewer,
  stars,
}) => {
  return (
    <dl className="xl:w-[27.5rem] lg:w-[25rem] md:w-[20rem] w-[90vw] mx-auto border border-gray-300 rounded-lg shadow-md p-8 relative bg-white">
      <dt className="text-size-lg font-bold mb-2 sm:text-xl">{title}</dt>
      <div className="bg-primary w-[9rem] h-1 mb-6" />
      <div className="">
        <dd
          className="mb-2 font-medium leading-[130%] h-[10rem]"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="flex items-center justify-start mt-2">
          <div className="flex text-yellow-500">
            {Array(stars)
              .fill(null)
              .map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-3">
        {/* Reviewer */}
        <span className="text-gray-600 text-sm">{reviewer}</span>

        {/* Date */}
        <span className=" text-gray-500 text-sm">{date}</span>
      </div>
    </dl>
  );
};

export default ReviewCard;
