import {reactive,onMounted} from "vue";
export default function useMousePosition() {
  let mousePosition = reactive({
    x:0,
    y:0
  });
  onMounted(()=>{
    document.addEventListener("click",(e)=>{
     mousePosition.x = e.pageX;
      mousePosition.y = e.pageY;
    })
  })
  return {
    mousePosition
  }
}