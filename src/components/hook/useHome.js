import EditWang from "wangeditor";
import {ref, reactive, onMounted} from "vue";

export default function useHome() {
  const editor = ref();
  const editShow = ref(false);
  let instance;
  onMounted(() => {
    instance = new EditWang(editor.value);
    instance.create();
  });
  let x = reactive({
    html: ""
  })
  const asyncHTML = () => {
    editShow.value = true;
    x.html = instance.txt.html();
  }
  const closeEdit = (val)=>{
    editShow.value = val;
  }
  return {
    editShow,
    closeEdit,
    editor,
    x,
    asyncHTML
  };
}