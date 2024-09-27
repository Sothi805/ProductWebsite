import HonmePage from "@/features/home/HonmePage";
import App from "@/layouts/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";



const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App />}
        >
          <Route path="/" element={<HonmePage />} />
           <Route path="*" element={<NotFoundPage />} />
\        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

const NotFoundPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <span className="font-extrabold text-2xl">
        {" "}
        404 - Oop Page Not Found !
      </span>
    </div>
  );
};
