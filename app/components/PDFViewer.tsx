'use client';
import { BboxOverlay } from "../store/usePdfStore";
import PDFRenderer from "./PDFRenderer"
import TranscriptViewer from "./TranscriptViewer";
// import { usePdfStore } from "../store/usePdfStore"


export default function PDFViewer() {
    // const { pdf_url } = usePdfStore();
    const handleBboxClick= (bbox: BboxOverlay) => {
        console.log('parent', bbox)
    }
    return (
        <div className="w-full md:max-w-screen-xl h-[760px] md:flex md:flex-row my-5  p-5 mx-auto space-x-4 bg-black">
            <div className="w-full md:w-1/2 overflow-y-scroll">
                <PDFRenderer />
            </div>
            <div className="w-full md:w-1/2 text-center overflow-y-scroll">
                <TranscriptViewer onBboxClick={handleBboxClick}/>
            </div>
        </div>
    )
}