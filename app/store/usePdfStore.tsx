import {create} from 'zustand';


// interface PdfText {
//   text: string;
//   bbox: number[];
// }
export interface BboxOverlay {
  page: number;
 bbox: Bbox;
}

export interface Bbox {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface PdfText {
  page_number: number;
  sections: {
      text_and_bboxes: {
          text: string;
          bbox: Bbox;
      }[];
  }[];
}

export interface PdfStore {
  pdf_url: string;
  setPdfUrl: (url: string) => void;
  pdf_text: PdfText[];
  setPdfText: (pdf_text: PdfText[]) => void;
  bbox_overlay: BboxOverlay | null;
  setBboxOverlay: (bbox_overlay: BboxOverlay) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const usePdfStore = create<PdfStore>((set) => ({
  pdf_url: '', // Ensure this is initialized properly
  pdf_text: [],
  bbox_overlay: null,
  isLoading: false,
  setPdfText: (pdf_text: PdfText[]) => set({ pdf_text }),
  setPdfUrl: (pdf_url: string) => set({ pdf_url }), // Ensure URL updates
  setBboxOverlay: (bbox_overlay: BboxOverlay) => set({ bbox_overlay }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));