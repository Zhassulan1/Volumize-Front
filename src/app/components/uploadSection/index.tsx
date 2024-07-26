"use client";

import './upload.css';
import React, { useState } from 'react';
import Viewer from '../ui/viewer';
import Progress from '../ui/progress';
import TimeCounter from '../ui/timer';

import PrimaryLink from '@/app/components/ui/primaryLink';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../ui/loader';
import Upload from '../ui/upload';
import Thumbnail from '../ui/thumbnail';

const BACKEND_URL = 'https://volumizeback.gestionempresarial.cl';
// const BACKEND_URL = 'http://localhost:8000';

interface Loader {
  text: string;
  isFinished: boolean;
}


interface Progress {
  Loaders: Loader[];
}

// toast.configure();
export default function UploadSection() {
  const [file, setFile] = useState<File>();
  const [objURL, setObjURL] = useState('');
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [isProcessed, setIsProcessed] = useState(false);
  const [loading, setLoading] = useState(false);

  let progress: Progress = {
    Loaders: [
      {
        text: 'Uploading image...',
        isFinished: file !== undefined
      },
      {
        text: 'Processing image...',
        isFinished: isProcessed
      },
      {
        text: 'Creating 3D model...',
        isFinished: !!objURL
      }, 

    ]
  };

  const debugURL = "https://volumize-bucket.s3.amazonaws.com/robot_demo.obj";

  const onRemoveImage = () => {
    setFile(undefined);
    setImageURL(null);
    setObjURL('');
    setIsProcessed(false);
    setLoading(false);

    progress = {
      Loaders: [
        {
          text: 'Uploading image...',
          isFinished: file !== undefined
        },
        {
          text: 'Processing image...',
          isFinished: isProcessed
        },
        {
          text: 'Creating 3D model...',
          isFinished: !!objURL
        }, 
  
      ]
    };
  };


  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const debug = false;
    if (debug) {
      setObjURL(debugURL);
      return;
    }
    if (!file) {
      return;
    }

    try {
      setLoading(true);
      const data = new FormData();
      data.set('image', file);

      const processRes = await fetch(`${BACKEND_URL}/process`, {
        method: 'POST',
        body: data
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
      console.log("Server error", error);
      setLoading(false);
      toast.error("Server error", {
        autoClose: 5000,
      });
    }
  };

  return (
    <>
      <div className='md:flex md:flex-row items-center justify-center align-middle'>
        <div className='md:w-1/3 p-5 w-screen'>
          <form onSubmit={onSubmit} className='flex flex-col m-auto'>
            {imageURL ? (
              <Thumbnail imageURL={imageURL} onRemoveImage={onRemoveImage} /> 
            ) : (
                <Upload setFile={setFile} setImageURL={setImageURL} setLoading={setLoading}></Upload>              
            )}

            <button
              type="submit"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none hover:ring-blue-300 dark:hover:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 my-11"
            >
              Upload
            </button>
          </form>
        </div>
        {
          loading ? ( 
            <div className='items-center md:mx-0 m-auto max-w-64'>
              <Progress progress={progress} />
              <TimeCounter />
            </div>
          ) : (
            (objURL) &&
            <div className='h-64 flex flex-col my-16'>
              <Viewer url={objURL} rotate={[0, 0, 0]} />
              <PrimaryLink text="Download" url={objURL} />
            </div>
          )
        }
        <ToastContainer />
      </div>
    </>
  );
}
