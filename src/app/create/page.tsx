import Header from "../components/header";
import SecondaryLink from "../components/ui/secondaryLink";
import UploadSection from "../components/uploadSection";


export default function Create() {

    return (
        <>
        <Header />

        <div className="bg-gradient-to-br from-gray-900 to-black align-middle justify-between">
            <div className="min-h-screen align-middle justify-center">

                <UploadSection></UploadSection>
                <div className="align-middle justify-center flex">
                    <SecondaryLink text="Try Creating 3D Model from text" url="/create/text" />
                </div>
                
            </div>
        </div>
        </>
    )
}