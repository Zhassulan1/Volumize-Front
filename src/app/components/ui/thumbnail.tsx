export default function Thumbnail({ imageURL, onRemoveImage }: { imageURL: any, onRemoveImage: any }) {
    return (
        <div className="relative flex flex-col items-center justify-center">
            <img src={imageURL} alt="Thumbnail" className="w-64 h-64 object-cover rounded-lg" />
            <button 
                type="button" 
                className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                data-modal-toggle="deleteModal"
                onClick={onRemoveImage}
            >
                <svg 
                aria-hidden="true" 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
                >
                <path 
                    fillRule="evenodd" 
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                    clipRule="evenodd"
                >
                </path>
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
        </div>
    )
}