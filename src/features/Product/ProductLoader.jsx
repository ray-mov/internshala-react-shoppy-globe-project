import { Skeleton } from "@mui/material";

function ProductLoader() {
  return (
    <div className="my-16 max-w-[80%] mx-auto">
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
        {Array.from({ length: 8 }).map((index) => {
          return (
            <li key={index}>
              <Skeleton animation="wave" variant="rectangular" height={250} />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductLoader;
