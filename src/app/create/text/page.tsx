"use client";

import React, { useState } from 'react';
import Viewer from '@/app/components/ui/viewer';
import Progress from '@/app/components/ui/progres';
import TimeCounter from '@/app/components/ui/timer';

const BACKEND_URL = 'https://volumizeback.gestionempresarial.cl';

export default function UploadSection() {
  const [prompt, setPromt] = useState('');
  const [objURL, setObjURL] = useState('');
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [isProcessed, setIsProcessed] = useState(false);
  const [loading, setLoading] = useState(false);


  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!prompt) {
      return;
    }

    try {
      setLoading(true);
        
      const prompt_obj = {
        prompt: prompt
      }

        console.log(prompt);
      const imageRes = await fetch(`${BACKEND_URL}/generate_image`, {
        method: 'POST',
        body: `{
          "prompt": "${prompt}"
        }`
      });

      const imageResult = await imageRes.json();
      const image = {
        image_url:  imageResult.file_url
      };
      console.log(image)
      const processRes = await fetch(`${BACKEND_URL}/process_url`, {
        method: 'POST',
        body: JSON.stringify(image)
      });

      if (!processRes.ok) {
        throw new Error(await processRes.text());
      }

      const processResult = await processRes.json();
      if (processRes.ok) {
        console.log('File URL:', processResult.image_url);
        setIsProcessed(true);
      } else {
        console.error('Upload failed:', processResult.error);
      }

      const modelData = {
        image_url: processResult.image_url
      };

      const res = await fetch(`${BACKEND_URL}/make_3d`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(modelData)
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      const modelResult = await res.json();
      if (res.ok) {
        console.log('Model URL:', modelResult.model_url);
        setObjURL(modelResult.model_url);
        setLoading(false);
      } else {
        console.error('Upload failed:', modelResult.error);
      }

    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <>
        <div className="bg-gradient-to-br from-gray-900 to-black align-middle justify-between">
            <div className="min-h-screen align-middle justify-center">
                <div className='flex flex-row items-center m-auto justify-center align-middle'>
                    <div className='w-1/3 p-5'>
                    <form onSubmit={onSubmit} className='flex flex-col m-auto'>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Describe your model</label>
                        <textarea 
                            id="prompt" 
                            rows={4}
                            onChange={(e) => setPromt(e.target.value)}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Write your thoughts here..."
                        >
                        </textarea>
                        <button
                        type="submit"
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none hover:ring-blue-300 dark:hover:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 my-11"
                        >
                            Upload
                        </button>
                    </form>
                    </div>

                    {loading && 
                    <div>
                        <Progress isProcessed={isProcessed} />
                        <TimeCounter />
                    </div>
                    }

                    {(objURL && !loading) &&
                    <div className='h-64 flex flex-col my-auto'>
                        <Viewer url={objURL} rotate={[0, 0, 0]} />

                        <a
                        type="submit"
                        href={objURL}
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none hover:ring-blue-300 dark:hover:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 my-1"
                        >
                        Download
                        </a>
                    </div>
                    }
                </div>
            </div>
        </div>
    </>
  );
}
