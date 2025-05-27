'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.mjs`;

export default function PdfViewer({ fileUrl }) {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Document
        file={fileUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        loading="Loading PDF..."
        onLoadError={(error) => console.error('Error loading PDF:', error)}
      >
        {Array.from({ length: numPages || 0 }, (_, i) => (
          <Page
            key={`page_${i + 1}`}
            pageNumber={i + 1}
            width={800}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        ))}
      </Document>
    </div>
  );
}
