import {
  CopyIconAsString,
  CopyIconAsString2,
} from "../components/Svgs/Clipboard";

function copy_func(copy_btn_ref, code) {
  navigator.clipboard.writeText(code);
  copy_btn_ref.current.innerHTML = `${CopyIconAsString2} <small>Copied </small>`;
  setTimeout(() => {
    copy_btn_ref.current.innerHTML = `${CopyIconAsString} <small>Copy </small>`;
  }, 1500);
}

export default copy_func;
