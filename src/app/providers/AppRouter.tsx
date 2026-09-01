import { Suspense, useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom"
import { CatalogPage } from "@pages/CatalogPage/CatalogPage";
import { FavoritePage } from "@pages/FavoritePage/FavoritePage";
import { CollectionsPage } from "@pages/CollectionsPage/CollectionsPage";
import { NewsPage } from "@pages/NewsPage/NewsPage";
import { useDispatch, useSelector } from "@app/store/store";
import { getMovies } from "@entities/movies/api/getMovies";
import { getAllGenres } from "@entities/genres/api/getAllGenres";
import { getTopOfMovies } from "@entities/movies/api/getTopOfMovies";
import { Preloader } from "@features/Preloader/Preloader";
import { ErrorPage } from "@pages/ErrorPage/ErrorPage";
import { NotFoundPage } from "@pages/NotFoundPage/NotFoundPage";
import { HeaderLayout } from "./HeaderLayout";
import { DevelopersPage } from "@pages/DevelopersPage/DevelopersPage";
import { ModalCard } from "@features/ModalCard/ModalCard";
import { Modal } from "@features/Modal/Modal";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state?.background;
  const ref = useRef(false)

  const error = useSelector((state) => state.movies.error);

  useEffect(() => {
    if(!ref.current) {
      dispatch(getMovies())
      dispatch(getAllGenres())
      dispatch(getTopOfMovies())
      ref.current = true
    }
  }, [])

  return (
    <>
      <Suspense fallback={<Preloader />}>
        <Routes location={background || location}>
          <Route element={<HeaderLayout />}>
            <Route path='/' element={<CatalogPage />} />
            <Route path='/favorite' element={<DevelopersPage />} />
            <Route path='/collections' element={<DevelopersPage />} />
            <Route path='/news' element={<DevelopersPage />} />
            <Route path='/error' element={<ErrorPage />} />
          </Route>
            <Route path='*' element={<NotFoundPage />} />
            {background &&
              <Route path='/movies/:id' element={<Modal><ModalCard /></Modal>} />
            }
        </Routes>
      </Suspense>
    </>
  )
}