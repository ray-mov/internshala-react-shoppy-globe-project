import { FcBusinessman } from "react-icons/fc";

function CommentItem({ name, comment, rating }) {
  return (
    <div className="py-4 flex items-start gap-4 font-mono shadow-sm">
      <div className="rounded-full border-2 p-1 border-red-200">
        <FcBusinessman size={32} />
      </div>
      <div>
        <h1 className="text-xl font-semibold">{name}</h1>
        <p>{comment}</p>
        <p>Rating : {rating}</p>
      </div>
    </div>
  );
}

export default CommentItem;
