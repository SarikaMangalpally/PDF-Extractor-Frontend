'use client';
import { BboxOverlay, usePdfStore } from "../store/usePdfStore";
import PDFRenderer from "./PDFRenderer";
import TranscriptViewer from "./TranscriptViewer";

export default function PDFViewer() {
    const { bbox_overlay, isLoading } = usePdfStore()

    const setBboxOverlay = usePdfStore((state) => state.setBboxOverlay);

    const handleBboxClick = (bbox: BboxOverlay) => {
        setBboxOverlay(bbox);
    }

    return (
        <div className={`relative border-2 block border-spacing-3 w-full md:max-w-screen-xl h-[760px] md:flex md:flex-row mt-4 p-5 mx-auto space-x-4`}>
            {isLoading ? 
          <p className="flex space-x-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-black"
            >
                
          </span> 
          <span className="mt-1">{'loading...'}</span>
          </p>: (
                <>
                    <div className="w-full md:w-1/2 overflow-y-scroll">
                        <PDFRenderer bboxOverlay={bbox_overlay} />
                    </div>
                    <div className="w-full md:w-1/2 text-center overflow-y-scroll my-2">
                        <TranscriptViewer onBboxClick={handleBboxClick} />
                    </div>
                </>
            )}
        </div>
    )
}
