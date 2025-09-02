"use client"
import { useEditor, EditorContent } from '@tiptap/react'
import { TaskItem, TaskList } from '@tiptap/extension-list'
import { TableKit } from '@tiptap/extension-table'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import ImageResize from 'tiptap-extension-resize-image';

export const Editor = () =>{

    const editor = useEditor({
    editorProps: {
        attributes: {
            style: "padding-left: 56px; padding-right: 56px", 
            class: "focus-outline-none print:border-0 bg-white border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text"
        }
    },
    extensions: [
        StarterKit,
        ImageResize,
        Image,
        TaskList,
        TaskItem.configure({
        nested: true,
      }),
      TableKit.configure({
        table: { resizable: true },
      }),
    ],
    content: `Welcome`,
    immediatelyRender: false,
  })
 

    return(
        <div className='size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible'>
        <div className='min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0'>
        <EditorContent editor={editor} />

        </div>
        </div>
    );
}