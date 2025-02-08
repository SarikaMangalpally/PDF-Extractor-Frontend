import {create} from 'zustand';


// interface PdfText {
//   text: string;
//   bbox: number[];
// }
export interface BboxOverlay {
  bbox: number[]
}


interface PdfText {
  page_number: number;
  sections: {
      text_and_bboxes: {
          text: string;
          bbox: BboxOverlay;
      }[];
  }[];
}

export interface PdfStore {
  pdf_url: string;
  setPdfUrl: (url: string) => void;
  pdf_text: PdfText[];
  setPdfText: (pdf_text: PdfText[]) => void;
  transcript_bbox: BboxOverlay;
}

export const usePdfStore = create<PdfStore>((set) => ({
  pdf_url: '', // Ensure this is initialized properly
  pdf_text: [],
  transcript_bbox: {bbox: []},
  setPdfText: (pdf_text: PdfText[]) => set({ pdf_text }),
  setPdfUrl: (pdf_url: string) => set({ pdf_url }), // Ensure URL updates
  setTranscriptBbox: (transcript_bbox: BboxOverlay) => set({transcript_bbox}),
}));