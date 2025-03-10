import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery"
import css from "./App.module.css";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageMoodal from "../ImageMoodal/ImageMoodal";


export default function App() {
    return (
        <div className={css.container}>
          <h1>dz4</h1>
          <LoadMoreBtn/>
          <SearchBar />
          <ImageGallery />
          <Loader />
          <ErrorMessage />
          <ImageMoodal />
        </div>


  );
}