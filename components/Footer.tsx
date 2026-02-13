import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-8">
      <div className="mx-auto max-w-[1200px] px-6">
        <Separator className="mb-6 bg-white/10" />
        <div className="flex flex-col items-center gap-2 text-center text-sm text-white/50">
          <p>
            (주)메디시안 &nbsp;|&nbsp; 대표자:정선미 &nbsp;|&nbsp; 서울특별시
            강남구 도산대로 228 연송빌딩 8l &nbsp;|&nbsp; TEL:02-6203-9200
            &nbsp;|&nbsp; FAX:02-6203-9203
          </p>
          <p className="font-poppins text-xs text-white/30">
            Copyright MEDISIAN Corp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
