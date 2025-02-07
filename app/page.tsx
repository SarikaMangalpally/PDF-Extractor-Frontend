
import PDFUploader from "./components/PDFUploader";
import PDFViewer from "./components/PDFViewer";

export default function Home() {  
  return (
    <main className="w-full mx-auto p-5">
      <h1 className="max-w-screen-lg mx-auto bg-gray-900/80 uppercase rounded-md text-white text-2xl text-center m-4 py-4">Pdf Extractor</h1>
        <PDFUploader/>
        <PDFViewer/>
    </main>
  );
}
