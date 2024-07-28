"use client";

import './upload.css';
import React, { useState } from 'react';
import Viewer from '../ui/viewer';
import Progress from '../ui/progress';
import TimeCounter from '../ui/timer';
import axios from 'axios';

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


      const processRes = await axios({
        method: 'post',
        url: `${BACKEND_URL}/process`,
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
        timeout: 180000,
      }).catch((error) => {
        throw new Error("Processing image failed", error.message);
      });      

      console.log('File URL:', processRes.data.image_url);
      setIsProcessed(true);

      const res = await axios.post(`${BACKEND_URL}/make_3d`, {
        image_url: processRes.data.image_url
      }, {timeout: 180000}).catch((error) => {
        throw new Error("Processing image failed", error.message);
      });
      console.log('Model URL:', res.data.model_url);
      setObjURL(res.data.model_url);
      setLoading(false);

    } catch (error: any) {
      console.log(error);
      setLoading(false);
      setIsProcessed(false);
      toast.error(error.message, {
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
