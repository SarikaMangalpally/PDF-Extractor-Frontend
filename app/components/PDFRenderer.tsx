'use client'
import {Worker, Viewer, SpecialZoomLevel} from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';
import { highlightPlugin, Trigger } from "@react-pdf-viewer/highlight"
import { useRef } from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


import { usePdfStore } from '../store/usePdfStore';

import packageJson from '../../package.json';

const pdfjsVersion = packageJson.dependencies['pdfjs-dist'];

// // interface PDFRendererProps {
// //     url: string;
// // }

export default function PDFRenderer() {
    const {pdf_url} = usePdfStore()
//     console.log(pdf_url)
    const viewerRef = useRef(null);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const highlightPluginInstance = highlightPlugin({
        trigger: Trigger.TextSelection,
    });

    return (
        <div className='w-full'>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>
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
