import CommentItem from "./CommentItem";

function Comments({ reviews }) {
  return (
    <div>
      <div className="border-b-2 my-10"></div>
      <h1 className="text-2xl font-semibold">
        Comments{" "}
        <span className="text-white bg-red-500 rounded-3xl px-4 ">
          {reviews.length}
        </span>
      </h1>
      <ul className="py-8">
        {reviews.map((item, index) => {
          return (
            <li key={index}>
              <CommentItem
                name={item.reviewerName}
                comment={item.comment}
                rating={item.rating}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Comments;
