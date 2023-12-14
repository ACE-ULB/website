import React, { useState } from "react";
import { Button, Modal, ModalFooter } from "reactstrap";
import Viewer, { Worker } from "@phuocng/react-pdf-viewer";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";

export default ({ file, title }) => {
  const [numPages, setNumPages] = useState();
  const onDocumentLoadSuccess = document => {
    const { numPages } = document;
    setNumPages(numPages);
  };

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button block onClick={toggle}>
        {title}
      </Button>
      <Modal size="lg" isOpen={modal} toggle={toggle}>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@4.0.269/build/pdf.mjs`}>
          <div style={{ height: "750px" }}>
            <Viewer fileUrl={file} />
          </div>
        </Worker>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Fermer
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
