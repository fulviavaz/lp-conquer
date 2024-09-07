
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <nav className="flex items-center justify-between w-full bg-black py-4 px-20">
        <Image src="/itau.png" alt="logo itau" width={44} height={44} />
        <Image src="/conquer.png" alt="logo conquer" width={136} height={42}/>
      </nav>

      <div className=" w-full flex justify-center relative items-center mt-10 mb-10">        
          <Image src="/main.png" width={600} height={400} alt="main" className="rounded-md object-cover" />          
      </div>

      <div className="px-20 flex flex-col items-start justify-start w-full gap-6">
        <h2 className="text-2xl text-text-a font-bold">Garanta seu desconto</h2>
        <Button className=" bg-yellow-main text-black text-lg font-bold w-80 h-12">Ir para a Conquer</Button>
        <p className="text-text-a text-xl">São mais de 80 habilidades
          disponíveis! Descubra o poder das
          soft e hard skills na sua carreira.</p>
      </div>
    </main>
  );
}
