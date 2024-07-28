"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Header from '@/app/components/layout/header';
import TextArea from '@/app/components/ui/textArea';
import Progress from '@/app/components/ui/progress';
import Viewer from '@/app/components/ui/viewer';
import TimeCounter from '@/app/components/ui/timer';
import PrimaryLink from '@/app/components/ui/primaryLink';

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
  const [prompt, setPromt] = useState('');
  const [objURL, setObjURL] = useState('');
  const [imageURL, setImageURL] = useState<string>("");
  const [isProcessed, setIsProcessed] = useState(false);
  const [loading, setLoading] = useState(false);

  let progress: Progress = {
    Loaders: [
      {
        text: 'Generating image...',
        isFinished: imageURL !== ""
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
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const debug = false;
    if (debug) {
      setObjURL(debugURL);
      return;
    }

    if (!prompt) {
      return;
    }

    try {
      setLoading(true);

      console.log(prompt);

      const imageRes = await axios.post(`${BACKEND_URL}/generate_image`, {
        prompt: prompt
      }, {timeout: 180000});
      setImageURL(imageRes.data.file_url);
      console.log("image URL: ", imageRes.data.file_url)


      const processRes = await axios.post(`${BACKEND_URL}/process_url`, {
          image_url:  imageRes.data.file_url
        }, {timeout: 180000}
      ).catch((error) => {
        throw new Error("Processing image failed", error.message);
      });

      console.log("URL for processed image: ", processRes.data.image_url)
      setIsProcessed(true);

      const res = await axios.post(`${BACKEND_URL}/make_3d`, {
        image_url: processRes.data.image_url
      }, {timeout: 180000}).catch((error) => {
        throw new Error(error.message);
      });

      console.log('Model URL:', res.data.model_url);
      setObjURL(res.data.model_url);
      setLoading(false);

    } catch (error: any) {
      console.log("Server error", error);
      setLoading(false);
      toast.error("Server error", {
        autoClose: 5000,
      });
      console.log(error.message);
    }
  };

  return (
    <>
      <Header />
      <div className="bg-gradient-to-br from-gray-900 to-black align-middle justify-between">
      <div className="min-h-screen align-middle justify-center">

        <div className='md:flex md:flex-row items-center justify-center align-middle'>
          <div className='md:w-1/3 p-5 w-screen'>
            <form onSubmit={onSubmit} className='flex flex-col m-auto'>
              <label 
                htmlFor="message" 
                className="block mb-2 text-sm font-medium text-white"
              >
                Describe your model
              </label>
              <TextArea onChange={setPromt} />
              <button
                type="submit"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none hover:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 my-11"
              >
                Generate
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
              objURL &&
              <div className='h-64 flex flex-col my-16'>
                <Viewer url={objURL} rotate={[0, 0, 0]} />
                <PrimaryLink text="Download" url={objURL} />
              </div>
            )
          }

        </div>
        <ToastContainer />
        </div>
      </div>
    </>
  );
}
