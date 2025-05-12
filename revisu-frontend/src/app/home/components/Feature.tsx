import Image from "next/image";

export default function Feature(){
    return (
        <div className="flex w-full items-center bg-[#F5F5F5F5] mt-10 h-[380px]">
            <Image className=""
                   src="/images/avatar/revisu-happy.svg"
                   alt="Revisu happy"
                   width={600}
                   height={600}
            />
            <div className="flex flex-col">
                <h1 className="text-[48px]">
                    Transforme suas notas em <br /> <span className="text-[#604993]">reações ativas</span> e <span className="text-[#604993]">personalizadas</span>
                </h1>
                <div className="flex justify-center items-center gap-10 pt-8">
                    <Image src="/images/icons/notes.svg"
                           alt="Note Icon"
                           width={80}
                           height={80}
                    />
                    <Image src="/images/icons/images.svg"
                           alt="Image Icon"
                           width={80}
                           height={80}
                    />
                    <Image src="/images/icons/pdfs.svg"
                           alt="PDF Icon"
                           width={80}
                           height={80}
                    />
                    <Image src="/images/icons/documents.svg"
                           alt="Document Icon"
                           width={80}
                           height={80}
                    />
                </div>
            </div>
        </div>
    )
}