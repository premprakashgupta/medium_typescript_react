import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import NewPostNavbar from "../components/NewPostNavbar";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const EditorPage = () => {
  const [value, setValue] = useState("Write Your Story Here ...");
  const [title, setTitle] = useState("");

  const [base64Image, setBase64Image] = useState<string[]>([]);
  const handleImage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setBase64Image((prevImages) => [...prevImages, reader.result as string]);
      setValue(
        `${value}<br /> <img className="w-2/4 mx-auto" src="${reader.result}" /> <br /> &nbsp;`
      );
    };
  };

  const renderPreviewContent = () => {
    const elements: React.ReactNode[] = [];

    var array = value.split("``");
    console.log(array);

    for (let index = 0; index < array.length; index++) {
      if (index % 2 !== 0) {
        var content = array[index].replaceAll("</p><p>", "\n");
        elements.push(
          <SyntaxHighlighter
            language="javascript"
            style={vscDarkPlus}
            key={index}
          >
            {content}
          </SyntaxHighlighter>
        );
      } else {
        elements.push(
          <div dangerouslySetInnerHTML={{ __html: array[index] }}></div>
        );
      }
    }
    console.log(elements);

    return elements;
  };

  return (
    <div className="editor h-screen">
      <NewPostNavbar
        addPost={{
          title: title,
          content: value,
          desc: "lorem ipsum ",

          author: "prem praksh",
        }}
      />

      <div className="flex my-5 h-[86%]">
        <div className="editor-wrapper w-full md:w-3/4 mx-3">
          <div className="title w-full border-b-2 border-slate-300 mb-4 flex">
            <input
              type="text"
              placeholder="Title here"
              value={title}
              className="p-2 bg-transparent w-full outline-none text-2xl font-semibold font-serif"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="block w-full text-sm text-slate-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-violet-50 file:text-violet-700
                      hover:file:bg-violet-100
                        "
              />
            </label>
          </div>
          <ReactQuill
            className="h-[82%]"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
        <div className="preview hidden md:block border-2 w-1/4 h-full p-3 overflow-scroll">
          <div>
            <div className="text-2xl font-semibold font-serif mb-3">
              {title}
            </div>
            <div className="editor-content">{renderPreviewContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
