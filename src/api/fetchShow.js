import axios from "axios";

export const fetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then((res) => {
      //   setShow(res.data);
      //   setSeasons(formatSeasons(res.data._embedded.episodes));
      console.log(JSON.stringify(res.data._embedded.episodes));
      return res;
    })
    .catch((err) => {
      console.error("error fetching data, error: ", err.message);
      return err;
    });
};
