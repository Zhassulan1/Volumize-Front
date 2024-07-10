import UploadSection from "../components/upload";


export default function Create() {

    return (
        <div className="bg-gradient-to-br from-gray-900 to-black align-middle justify-between">

            <div className="min-h-screen align-middle justify-center">
                <UploadSection></UploadSection>
                <div className="align-middle justify-center flex">
                    <a href="/create/text" className="hover:underline inline-flex items-center justify-center p-0.5 mb-1 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-tl from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none">
                        <span className="px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-80">
                            Try Creating 3D Model from text
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}