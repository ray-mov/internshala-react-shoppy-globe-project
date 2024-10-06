import { CircularProgress } from "@mui/material";

function ProductLoader() {
  return (
    <div className="w-full h-screen items-start justify-center">
      <CircularProgress variant="plain" />;
    </div>
  );
}

export default ProductLoader;
