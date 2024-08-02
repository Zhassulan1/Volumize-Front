export default function PrimaryLink({ text, url }: { text: string, url: string }) {
    return (
        <a
            href={url}
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none hover:ring-blue-300 dark:hover:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 my-1"
        >
            {text}
        </a>
    )
}