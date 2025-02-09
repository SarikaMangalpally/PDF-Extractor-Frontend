import { usePdfStore, type BboxOverlay } from "../store/usePdfStore"
interface TranscriptViewerProps {
    onBboxClick: (bbox: BboxOverlay) => void;
}

export default function TranscriptViewer({onBboxClick}: TranscriptViewerProps) {
    const PdfText = usePdfStore((state) => state.pdf_text)

    return (
        <div className="p-4 overflow-auto break-words whitespace-normal ">
            {
                PdfText.length ? (
                    <>
                        {
                            PdfText.map((page, pageIndex) => (
                                <div key={pageIndex} className="my-5">
                                    <h3 className="Bold my-10">Page {pageIndex}</h3>
                                    {
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        page.sections.map((section: { text_and_bboxes: { text: string, bbox: Bbox}[] }, sectionIndex) => (
                                            <div key={sectionIndex} className="">
                                                {
                                                    section.text_and_bboxes.map(({text, bbox}, index) => (
                                                        <span key={index} className="hover:bg-yellow-200"
                                                        
                                                        onClick={() => onBboxClick({
                                                            page: pageIndex,
                                                            bbox
                                                        })} >                                                            
                                                            {`${text}${" "}`}
                                                        </span>
                                            
                                                    ))
                                                }
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