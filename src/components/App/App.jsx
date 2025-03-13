// import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
// import Loader from "../Loader/Loader";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";
// import ImageModal from "../ImageModal/ImageModal";
// import ImageGallery from "../ImageGallery/ImageGallery"
import css from "./App.module.css";
import { fetchArticles } from "../../article-api";
import ArticleList from "../ArticleList/ArticleList";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import toast, {Toaster} from "react-hot-toast";


export default function App() {
  const [articles, setArticles] = useState([])
  const [isloading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(1)

  const handleSearch = (topic) => {
    setSearchTerm(topic)
    setPage(1)
    setArticles([])

    toast('here is your toast')
  }
  useEffect(()=>{
    if(searchTerm === '') {
      return}
    async function getDate () {
      try {
        setIsLoading(true)
        setError(false)
        const data = await fetchArticles(searchTerm, page)
        setArticles((prevArticles) => {
          return [...prevArticles, ...data]})
      } catch {
        setError(true)
      } finally {
        setIsLoading(false) }
    }
    getDate()
  }, [page, searchTerm])
    return (
        <div className={css.container}>
          <h1>dz4 HTTP </h1>
          <Toaster position="top-right"/>
          <SearchBar onSearch={handleSearch}/>
          {error && <p>You have error</p>}
          {articles.length > 0 && <ArticleList items={articles} />}
          {isloading && <p>Loading........</p>}
          {articles.length > 0 && <button onClick={()=>setPage(page+1)} className={css.button}>Load More {page}</button>}

          {/* <LoadMoreBtn/> */}
          {/* <ImageGallery />
          <Loader />
          <ErrorMessage />
          <ImageModal /> */}
        </div>


  );
}