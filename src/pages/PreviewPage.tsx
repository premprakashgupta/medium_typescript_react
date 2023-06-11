import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import NavbarComponet from "../components/NavbarComponet";
import usePostStore from "../store/poststore";
import { useLocation } from "react-router-dom";

const PreviewPage = () => {
  const posts: {
    title: string;
    uuid: string;
    desc: string;
    content: string;
    author: string;
  }[] = usePostStore((state) => state.posts);
  const [value, setValue] = useState<string>("Write Your Story Here ...");
  const [title, setTitle] = useState<string>("");

  const location = useLocation();

  const [post, setpost] = useState<
    {
      title: string;
      uuid: string;
      desc: string;
      content: string;
      author: string;
    }[]
  >([]);
  useEffect(() => {
    if (posts.length > 0) {
      setpost(
        posts.filter((item) => item.uuid === location.pathname.split("/")[2])
      );
    }
  }, [location]);

  useEffect(() => {
    if (post.length > 0) {
      setTitle(post[0]?.title);
      setValue(post[0]?.content);
    }
  }, [post]);

  const renderPreviewContent = () => {
    const elements: React.ReactNode[] = [];

    const array = value.split("``");

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

    return elements;
  };
  return (
    <div>
      <NavbarComponet />
      <div className="preview block border-2 w-full min-h-screen p-3 overflow-scroll">
        <div>
          <div className="text-2xl font-semibold font-serif mb-3">{title}</div>
          <div className="editor-content">{renderPreviewContent()}</div>
        </div>
      </div>
    </div>
  );
};
export default PreviewPage;
