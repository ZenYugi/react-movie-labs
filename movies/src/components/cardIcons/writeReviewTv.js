import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { Link } from "react-router-dom";

const WriteReviewIconTv = ({ tv }) => {
  return (
    <Link
      to={`/reviews/form`}
      state={{
          tvId: tv.id,
      }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default WriteReviewIconTv;

