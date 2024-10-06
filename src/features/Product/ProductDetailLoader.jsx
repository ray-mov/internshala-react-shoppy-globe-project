import { Skeleton } from "@mui/material";

function ProductDetailLoader() {
  return (
    <div className="grid md:grid-cols-2 gap-6 ">
      <div className="flex-1">
        <Skeleton animation="wave" height={500} />
      </div>
      <div className="space-y-8 flex-1">
        <Skeleton animation="wave" height={50} />
        <Skeleton animation="wave" height={20} />
        <Skeleton animation="wave" height={20} />
        <Skeleton animation="wave" height={20} />
        <Skeleton animation="wave" height={30} />
      </div>
    </div>
  );
}

export default ProductDetailLoader;
