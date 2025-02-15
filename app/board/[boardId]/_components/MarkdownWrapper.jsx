import React, { useState, useRef, useEffect, useCallback } from "react";
import MarkdownPreview from '@uiw/react-markdown-preview';
import { getCodeString } from 'rehype-rewrite';
import mermaid from "mermaid";
import katex from 'katex';
import 'katex/dist/katex.css';

// Generate a random ID for Mermaid diagrams
const randomid = () => parseInt(String(Math.random() * 1e15), 10).toString(36);

// Custom Code component to handle Mermaid diagrams and KaTeX
const Code = ({ inline, children = [], className, ...props }) => {
  const demoid = useRef(`dome${randomid()}`);
  const [container, setContainer] = useState(null);
  const isMermaid = className && /^language-mermaid/.test(className.toLocaleLowerCase());
  const isKaTeX = className && /^language-katex/.test(className.toLocaleLowerCase());
  const code = props.node && props.node.children ? getCodeString(props.node.children) : children[0] || '';

  // Re-render Mermaid diagram when code or container changes
  const reRender = useCallback(async () => {
    if (container && isMermaid) {
      try {
        const { svg } = await mermaid.render(demoid.current, code);
        container.innerHTML = svg;
      } catch (error) {
        container.innerHTML = `<div style="color: red;">Mermaid Error: ${error.message}</div>`;
      }
    }
  }, [container, isMermaid, code]);

  // Initialize Mermaid and re-render diagrams
  useEffect(() => {
    mermaid.initialize({ startOnLoad: false });
    reRender();
  }, [reRender]);

  // Set the container ref for Mermaid diagrams
  const refElement = useCallback((node) => {
    if (node !== null) {
      setContainer(node);
    }
  }, []);

  // Render Mermaid diagram
  if (isMermaid) {
    return (
      <>
        <code id={demoid.current} style={{ display: "none" }} />
        <div ref={refElement} data-name="mermaid" />
      </>
    );
  }

  // Render KaTeX
  if (isKaTeX) {
    const html = katex.renderToString(code, {
      throwOnError: false,
    });
    return <code style={{ fontSize: '150%' }} dangerouslySetInnerHTML={{ __html: html }} />;
  }

  // Render inline KaTeX (e.g., $$...$$)
  if (typeof children === 'string' && /^\$\$(.*)\$\$/.test(children)) {
    const html = katex.renderToString(children.replace(/^\$\$(.*)\$\$/, '$1'), {
      throwOnError: false,
    });
    return <code dangerouslySetInnerHTML={{ __html: html }} style={{ background: 'transparent' }} />;
  }

  // Render regular code
  return <code className={String(className)}>{children}</code>;
};

// Main component
export function MarkdownWrapper({source}) {
  return (
    <MarkdownPreview
      source={source}
      style={{ padding: 16 }}
      wrapperElement={{   "data-color-mode": "light" }}
      components={{
        code: Code,
      }}
    />
  );
}