import SearchBar from "../SearchBar/SearchBar";
import css from "./App.module.css";
// import toast, { Toaster } from "react-hot-toast";

// key = -wJ9Fwrs9URX_U_m7C3bAOaKrHUM76jPbw8RfF5po6o
//  доступний за адресою https://api.unsplash.com/

export default function App() {
  return (
    <div className={css.container}>
      <h1>dz4 HTTP </h1>
      <SearchBar />
      <Toaster position="top-left" reverseOrder={true} />
    </div>
  );
}
