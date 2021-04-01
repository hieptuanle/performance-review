import React from "react";
import { observer } from "mobx-react-lite";
import useRootStore from "../hooks/useRootStore";

const RevieweeTitle = observer<{ revieweeCode: string }>(({ revieweeCode }) => {
  const rootStore = useRootStore();
  const reviewee = rootStore.revieweeStore.reviewees.find((reviewee) => {
    return revieweeCode === reviewee.revieweeCode;
  });
  if (!reviewee) return null;
  return <h3>{reviewee.revieweePositions.join(" | ")}</h3>;
});

export default RevieweeTitle;
