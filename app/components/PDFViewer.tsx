'use client';
import {  BboxOverlay, usePdfStore } from "../store/usePdfStore";
import PDFRenderer from "./PDFRenderer"
import TranscriptViewer from "./TranscriptViewer";
// import { useState } from "react";


export default function PDFViewer() {
    const {bbox_overlay } = usePdfStore()
    const setBboxOverlay = usePdfStore((state)=> state.setBboxOverlay)
    // const [bboxOverlay, setBboxOverlay] = useState<BboxOverlay | null>(null);
    
    const handleBboxClick= (bbox: BboxOverlay) => {
        // console.log('pdfviewer',bbox)
        setBboxOverlay(bbox);

    }
    return (
        <div className={`border-2 block border-spacing-3 w-full md:max-w-screen-xl h-[760px] md:flex md:flex-row mt-4 p-5 mx-auto space-x-4`}>
            <div className="w-full md:w-1/2 overflow-y-scroll">
                <PDFRenderer bboxOverlay={bbox_overlay}/>
            </div>
            <div className="w-full md:w-1/2 text-center overflow-y-scroll my-2">
                <TranscriptViewer onBboxClick={handleBboxClick}/>
            </div>
        </div>
    )
}