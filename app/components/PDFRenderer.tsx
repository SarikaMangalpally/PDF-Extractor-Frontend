'use client'
import {Worker, Viewer, SpecialZoomLevel} from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';
import { highlightPlugin, Trigger } from "@react-pdf-viewer/highlight"
import React, { useRef } from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import 'pdfjs-dist/build/pdf.worker.entry';

import { usePdfStore } from '../store/usePdfStore';



export default function PDFRenderer() {
    const {pdf_url} = usePdfStore()
    const viewerRef = useRef(null);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const highlightPluginInstance = highlightPlugin({
        trigger: Trigger.TextSelection,
    });

    return (
        <div className='w-full'>
            {/* <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}> */}
            <Worker workerUrl={`/pdf.worker.min.js`}>
            {pdf_url ? (
                <Viewer
                    fileUrl={pdf_url}
                    plugins={[defaultLayoutPluginInstance, highlightPluginInstance]}
                    defaultScale={SpecialZoomLevel.PageFit}
                    ref={viewerRef}
                />  ): ''}
            </Worker>
        </div>
    )
}
