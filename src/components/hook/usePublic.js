import {reactive} from "vue";
export default function article() {
  let control = reactive({
    isShow: false,
    formPropsData: {}
  })
  const lookClickHandler = (v) => {
    if (control.isShow) {
      control.isShow = false;
    } else {
      control.formPropsData = v;
      control.isShow = true;
    }
  }
  const editClickHandler = (v) => {
    if (control.isShow) {
      control.isShow = false;
    } else {
      control.formPropsData = v;
      control.isShow = true;
    }
  }
  return {
    lookClickHandler,
    editClickHandler,
    control
  }
}