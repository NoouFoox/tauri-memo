import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { Button } from "antd";
import { Editor } from "@tinymce/tinymce-react";
function App() {
  const [top, setTop] = useState(false);
  const handleToTop = async () => {
    setTop(await invoke("set_always_on_top", { alwaysOnTop: !top }));
  };

  return (
    <>
      <Button size="small" onClick={handleToTop}>
        {top ? "取消置顶" : "置顶"}
      </Button>
      <Editor
        init={{
          height: 700,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
    alignleft aligncenter alignright alignjustify | \
    bullist numlist outdent indent | removeformat | searchreplace",
        }}
        apiKey="61m8183hkwziizh4wrbnhda7qtosmvk35df1xepjlm60qzxl"
      ></Editor>
    </>
  );
}

export default App;
