import AssignmentForm from "../../layouts/AssignmentForm/AssignmentForm";
// import PdfView from "../../layouts/PDF_VIEW/Pdf-view";
// import { pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/build/pdf.worker.min.js',
//     import.meta.url,
// ).toString();


const CreateAssignment = () => {
    return (
        <div>
            <AssignmentForm title='Assignment Creation' description='Provide Relevant Information' />
            <div className="flex justify-center p-5 container bg-blue-gray-50">
                {/* <PdfView /> */}
            </div>
        </div>
    );
};

export default CreateAssignment;