/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import { uploadURL } from '../api';
import { usePdfStore } from "../store/usePdfStore"

export default function PDFUploader() {
    const [inputUrl, setInputUrl] = useState('');
    const setPdfText = usePdfStore((state) => state.setPdfText);
    const setPdfUrl = usePdfStore((state) => state.setPdfUrl);
    const setIsLoading = usePdfStore((state)=> state.setIsLoading);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputUrl || !inputUrl.toLowerCase().endsWith(".pdf")) {
            alert("Invalid PDF URL");
            return;
        }
        try {
            try {
                setIsLoading(true);
                const response = await uploadURL(inputUrl);
                if (response.status === 200) {
                    console.log("PDF uploaded response: ", response.data);
                    const TranscriptData = (response.data as { data: { text: string, bbox: number[], page_number: number, sections: any[] }[] }).data;
                    // const TranscriptData = (response.data as { data: { text: string, bbox: number[], page_number: number, sections: any[] }[] });
                    setPdfText(TranscriptData);
                    setPdfUrl(inputUrl);
                    setIsLoading(false);
                } 
            } catch (error) {
                setIsLoading(false);
                console.error("Error processing PDF", error);
                alert("Error processing PDF. Please try again.");
            }
        } catch (error) {
            console.error("Error processing PDF", error);
            alert("Error processing PDF. Please try again.");
        }
    }

    return (
        <div className='w-full max-w-screen-lg mx-auto px-5'>
            <form onSubmit={handleSubmit} className='flex space-x-4 justify-between'>
                <input
                className='border-2 border-black/10 p-2 rounded-sm w-4/5 focus:outline-none focus:border-blue-400'
                value={inputUrl}
                type="url" 
                name="pdf_url"
                onChange={(e) => setInputUrl(e.target.value)}
                />
                <button type="submit" className="w-1/5 bg-black text-white py-1 rounded-sm active:scale-75">Upload PDF</button>
            </form>
        </div>
    )
    
}
