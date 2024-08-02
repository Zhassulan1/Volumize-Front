export default function PrimaryLink1({ text, url }: { text: string, url: string }) {
    return (
        <a
        href={url}
            className="text-white focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-primary-800"
            >
                {text}
            </a>
        )
    }