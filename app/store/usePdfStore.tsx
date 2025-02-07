import {create} from 'zustand';


// interface PdfText {
//   text: string;
//   bbox: number[];
// }

interface PdfText {
  page_number: number;
  sections: {
      text_and_bboxes: {
          text: string;
          bbox: number[];
      }[];
  }[];
}

export interface PdfStore {
  pdf_url: string;
  setPdfUrl: (url: string) => void;
  pdf_text: PdfText[];
  setPdfText: (pdf_text: PdfText[]) => void;
}

export const usePdfStore = create<PdfStore>((set) => ({
  pdf_url: '', // Ensure this is initialized properly
  pdf_text: [],
  setPdfText: (pdf_text: PdfText[]) => set({ pdf_text }),
  setPdfUrl: (pdf_url: string) => set({ pdf_url }), // Ensure URL updates
}));