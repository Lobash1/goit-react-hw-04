import axios from "axios";


// export const fetchArticles = async (topic) => {
//     const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${topic}`);
//     return response.data.hits
// }

export const fetchArticles = async (topic, currentPage) => {
    const response = await axios.get(`http://hn.algolia.com/api/v1/search`, {
        params: {
            query: topic,
            hitsPerPage: 5,
            page: currentPage,
        }
    });
    return response.data.hits
}