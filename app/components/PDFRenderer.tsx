'use client'
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import {  highlightPlugin, RenderHighlightsProps, Trigger } from "@react-pdf-viewer/highlight";
import React from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import 'pdfjs-dist/build/pdf.worker.entry';
import { usePdfStore, type BboxOverlay } from '../store/usePdfStore';

interface PDFRendererProps {
    bboxOverlay: BboxOverlay | null;
}

export default function PDFRenderer({ bboxOverlay }: PDFRendererProps) {
    const { pdf_url } = usePdfStore();

    let x0: number, x1: number, y0: number, y1: number;

    if (Array.isArray(bboxOverlay?.bbox) && bboxOverlay.bbox.length === 4) {
        [x0, y0, x1, y1] = bboxOverlay.bbox;
    }
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: () => [],
    });
    

    const renderHighlights = (props: RenderHighlightsProps) => {

        if (bboxOverlay?.page === props.pageIndex) {

            const highlightStyles: React.CSSProperties = {
                position: 'absolute', 
                left: x0-10,
                top: y0-10,
                width: x1-x0,
                height: y1-y0,
            };

            return (
                <div key={0} className="highlight-area bg-yellow-400 opacity-40 z-10" style={{ ...highlightStyles }}>
                    
                </div>
            );
        } else {
            return <div />;
        }
    };

    const highlightPluginInstance = highlightPlugin({
        renderHighlights,
        trigger: Trigger.None,
    });

    return (
        <div className="relative w-full">
            <Worker workerUrl={`/pdf.worker.min.js`}>
                {pdf_url && (
                    <div className="relative">
                        <Viewer
                            fileUrl={pdf_url}
                            plugins={[defaultLayoutPluginInstance, highlightPluginInstance]}
                            defaultScale={SpecialZoomLevel.PageFit}
                        />
                    </div>
                )}
            </Worker>
        </div>
    );
}