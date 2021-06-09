import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../Styles/Layouts";
import Title from "../util/Title";
import ReviewItem from "../util/ReviewItem";

function ReviewsSetion() {
  const ReviewsStyled = styled.section`
    .reviews {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1.5rem;
      width: 100%;
      @media screen and (max-width: 650px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  `;

  return (
    <ReviewsStyled>
      <Title title={"Reviews"} span={"Reviews"} />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem text={"This Test Field!"} />
          <ReviewItem text={"This Test Field!"} />
        </div>
      </InnerLayout>
    </ReviewsStyled>
  );
}

export default ReviewsSetion;
