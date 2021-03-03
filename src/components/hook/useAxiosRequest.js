import {ref} from "vue";
import axios from "axios";
import {ElMessage} from "element-plus";
import {useRouter} from "vue-router";

export default function axiosRequest() {
  let formData = ref([]);
  let router = useRouter()
  const getAxiosGetRequest = async (url, datas = {}) => {
    let {data} = await axios.get("http://www.qgy.com:928/" + url, {
      params: datas
    });
    formData.value = data;
  }
  const getAxiosPostRequest = async (url, datas = {}) => {
    let URLParams = new URLSearchParams();
    for (const dataKey in datas) {
      URLParams.append(dataKey, datas[dataKey]);
    }
    axios({
      method: "post",
      url: "http://www.qgy.com:928/" + url,
      data: URLParams
    }).then(v => {
      ElMessage({
        message: v.data,
        type: "success"
      })
      router.go(0);
    });

  }
  return {
    getAxiosGetRequest,
    getAxiosPostRequest,
    formData
  }
}