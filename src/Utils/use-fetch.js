import { toRefs, reactive } from "vue";

export default function (url) {
  const state = reactive({
    response: [],
    error: "",
  });
  const fetchData = () => {
    state.fetching = true;
    fetch(url)
      .then((response) => response.json())
      .then(
        (data) => {
          state.response.value = data;
          //   console.log("items are",state.response.value);
        },
        (error) => {
          console.log(error);
          state.error = error;
        }
      );
    // try {
    //   const res = await axios.get(url, options);
    //   // state.response = await res.json();

    //   console.log("Data Fetched",res.data)
    // } catch (errors) {
    //   state.error = errors;
    // } finally {
    //   state.fetching = false;
    // }
  };
  fetchData();
  return { ...toRefs(state), fetchData };
}
