import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import notice from '../../assets/notice.pdf';

function PdfView() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      {/* <Document file='https://drive.google.com/file/d/16r983EH31VaZwWr79I9ppmAvUuoQGW29/view?usp=sharing' onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} renderAnnotationLayer={false} renderTextLayer={false} />
          
      </Document> */}
      <Document
        file={'https://blush-eleen-56.tiiny.site/'}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page, idx) => <Page key={idx} className='my-5' pageNumber={page} />)}
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default PdfView;