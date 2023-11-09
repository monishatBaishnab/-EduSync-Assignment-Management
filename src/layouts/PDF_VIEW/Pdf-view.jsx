import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { IconButton } from '@material-tailwind/react';
import PropTypes from 'prop-types';

function PdfView({pdfUrl}) {
  

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet) {
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1)
  }

  function changePageNext() {
    changePage(+1)
  }


  return (
    <div className="App">
      <header className="App-header">
        <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            renderTextLayer={false}
            renderAnnotationLayer={false}
            pageNumber={pageNumber}
          />
        </Document>
        <p className='text-center my-5'> Page {pageNumber} of {numPages}</p>
        <div className='flex items-center gap-2 justify-center'>
          {pageNumber > 1 ?
            <IconButton onClick={changePageBack}><BsArrowLeft /></IconButton> 
            :
            <IconButton onClick={changePageBack} disabled><BsArrowLeft /></IconButton> 
          }
          {
            pageNumber < numPages ?
            <IconButton onClick={changePageNext}><BsArrowRight /></IconButton>:
            <IconButton onClick={changePageNext} disabled><BsArrowRight /></IconButton>
          }
        </div>
      </header>
    </div>
  );
}

PdfView.propTypes = {
  pdfUrl: PropTypes.string,
}

export default PdfView;