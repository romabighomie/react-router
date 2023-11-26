import {Routes, Route} from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import PhotosPage from "./pages/PhotosPage";
import AlbumsPage from "./pages/AlbumsPage";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UsersPage />}/>
          <Route path="/albums/:id" element={<AlbumsPage />}/>
          <Route path="/photos/:id" element={<PhotosPage />}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
