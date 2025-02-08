import { usePdfStore, type BboxOverlay } from "../store/usePdfStore"
// import { useState } from "react"

interface TranscriptViewerProps {
    onBboxClick: (bbox: BboxOverlay) => void;
}

export default function TranscriptViewer({onBboxClick}: TranscriptViewerProps) {
    const PdfText = usePdfStore((state) => state.pdf_text)

    return (
        <div className="p-4 overflow-auto break-words whitespace-normal bg-white">
            {
                PdfText.length ? (
                    <>
                        {
                            PdfText.map((page, pageIndex) => (
                                <div key={pageIndex}>
                                    <h3>Page {page.page_number}</h3>
                                    {
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        page.sections.map((section: { text_and_bboxes: { text: string, bbox: BboxOverlay }[] }, sectionIndex) => (
                                            <div key={sectionIndex}>
                                                {
                                                    section.text_and_bboxes.map(({text, bbox}, index) => (
                                                        <span key={index} className="hover:bg-yellow-200"
                                                         onClick={() => onBboxClick(bbox)} >
                                                            
                                                            {`${text}${" "}`}
                                                        </span>
                                                    
                                                    ))
                                                }
                                                {/* <p className="my-4">
                                                    {section.text_and_bboxes.map((text, textIndex) => (
                                                        <span key={textIndex}>
                                                            {text.text}{" "}
                                                            </span>
                                                       ))}            
                                                </p> */}
                                            </div>
                                        ))}
                                </div>
                            ))}
                    </>
                ) : ''
            }
        </div>
    )
}