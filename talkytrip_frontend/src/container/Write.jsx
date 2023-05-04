import React, { useEffect, useRef, useState } from "react";
import MainNavbar from "../components/MainNavbar";
import { Button, Container, Row, Spacer } from "@nextui-org/react";
import EditorJS from "@editorjs/editorjs";
import Header from '@editorjs/header'; 
import List from '@editorjs/list'; 
import ImageTool from '@editorjs/image';

const editorOptions = { 
  holder: 'editorjs', 
  tools: { 
    header: {
      class: Header, 
      inlineToolbar: ['link'] 
    }, 
    list: { 
      class: List, 
      inlineToolbar: true 
    },
    image: {
      class: ImageTool,
      config: {
        endpoints: {
          byFile: 'http://localhost:1337/api/upload', // Your backend file uploader endpoint
          byUrl: 'http://localhost:1337/api/upload', // Your endpoint that provides uploading by Url
        }
      },
    }  
  }, 
};

export default function Write() {
  const [editor, setEditor] = useState(null);

  const initRef = useRef(null);

  useEffect(() => {
    if (!initRef.current) {
      initRef.current = true;
      // setEditor(new EditorJS(editorOptions));
      _getDataFromStrapi();
    }
  }, []);

  const _createNewTrip = async () => {
    const editorData = await editor.save();

    const url = "http://localhost:1337/api/trips";
    const method = "POST";
    const body = JSON.stringify({
      data: {
        title: "Awesome trip",
        description: "This is an awesome trip",
        body: editorData,
      }
    });
    const headers = new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json",
    });

    const response = await fetch(url, { method, body, headers });
    const data = await response.json();

    console.log(data);
  };

  const _getDataFromStrapi = async () => {
    const url = "http://localhost:1337/api/trips/3";
    const method = "GET";
    const headers = new Headers({
      accept: "application/json",
    });

    const response = await fetch(url, { method, headers });
    const data = await response.json();
    console.log(data);

    // await editor?.destroy();
    setEditor(new EditorJS({
      ...editorOptions,
      data: data?.data?.attributes?.body,
    }));
  }

  return (
    <div>
      <MainNavbar />
      <Container>
        <Row>
          <h2>Write about your trip</h2>
        </Row>
        <Spacer y={2} />
        <Row>
          <div style={{ width: 400, height: 400, border: "1px solid gray", borderRadius: 10 }}>
            <div id="editorjs" />
          </div>
        </Row>
        <Spacer y={1} />
        <Row>
          <Button
            onClick={_createNewTrip}
          >
            Create
          </Button>
        </Row>
      </Container>
    </div>
  );
}
