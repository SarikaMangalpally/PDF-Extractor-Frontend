import { usePdfStore } from "../store/usePdfStore"

export default function TranscriptViewer() {
    const PdfText = usePdfStore((state) => state.pdf_text)
    return (
        <div className="p-4 overflow-auto break-words whitespace-normal bg-white">
            {
                PdfText.length ? (
                    <>
                        <p>
                        {
                            PdfText.map((page, pageIndex) => (
                                <div key={pageIndex}>
                                    <h3>Page {page.page_number}</h3>
                                    {
                                        page.sections.map((section: { text_and_bboxes: { text: string }[] }, sectionIndex) => (
                                            <div key={sectionIndex}>
                                                <p className="my-4">
                                                    {section.text_and_bboxes.map((text, textIndex) => (
                                                        <span key={textIndex}>
                                                            {text.text}{" "}
                                                            </span>
                                                            ))}            
                                                </p>
            
                                            </div>
                                        ))}
                                </div>
                                ))}
                        </p>
                    </>
                ) : ''
            }
        </div>
    )
}
