/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import { uploadURL } from '../api';
import { usePdfStore } from "../store/usePdfStore"

export default function PDFUploader() {
    const [inputUrl, setInputUrl] = useState('');
    const setPdfText = usePdfStore((state) => state.setPdfText);
    const setPdfUrl = usePdfStore((state) => state.setPdfUrl);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputUrl || !inputUrl.toLowerCase().endsWith(".pdf")) {
            alert("Invalid PDF URL");
            return;
        }
        try {
            
            try {
                const response = await uploadURL(inputUrl);
                if (response.status === 200) {
                    console.log("PDF uploaded response: ", response.data);
                    const TranscriptData = (response.data as { data: { text: string, bbox: number[], page_number: number, sections: any[] }[] }).data;
                    // const TranscriptData = (response.data as { data: { text: string, bbox: number[], page_number: number, sections: any[] }[] });
                    setPdfText(TranscriptData);
                    setPdfUrl(inputUrl);
                } 
            } catch (error) {
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
                className='border-2 border-black/10 p-2 rounded-sm w-3/4 focus:outline-none'
                value={inputUrl}
                type="url" 
                name="pdf_url"
                onChange={(e) => setInputUrl(e.target.value)}
                />
                <button type="submit" className="w-1/4 bg-black text-white py-1 rounded-sm">Upload PDF</button>
            </form>
        </div>
    )
    
}
