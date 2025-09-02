import { Editor } from "./editor"


const page = async ( { params }: { params: Promise <{documentId: string}>} ) => {
  
    const {documentId} = await params

  return (
    <div className="min-h-screen bg-[#FAFBFD] ">
        <Editor></Editor>
    </div>
  )
}

export default page
