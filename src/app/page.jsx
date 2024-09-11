
import CaroulselCustom from "@/components/CaroulselCustom";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <nav className="flex items-center justify-between w-full bg-black py-4 2xl:px-20 px-10">
        <Image src="/itau.png" alt="logo itau" width={44} height={44} />
        <Image src="/conquer-pos.png" alt="logo conquer" width={136} height={42}/>
      </nav>
    <div className="flex flex-col items-center justify-center w-full">
        <div className=" bg-[url('/main-mobile.png')] bg-cover bg-center 2xl:w-[600px] 2xl:h-[400px] w-[328px] h-[413px] relative items-center mt-10 mb-10 bg-black rounded-3xl">  
          <div className="absolute bottom-5 left-5">
            <h1 className="text-3xl text-white font-bold">Conquer Pós</h1>
            <h3 className="text-lg text-white font-bold">Aproveite os descontos!</h3>
            </div>
        </div>
        </div>

      <div className="2xl:px-20 px-10 flex flex-col items-start justify-start w-full gap-6">
        <h2 className="text-2xl text-text-a font-bold">Garanta seu desconto</h2>
        <Button className=" bg-yellow-main text-black text-lg font-bold w-80 h-12"><Link href="https://escolaconquer.com.br/pos-graduacao/" target="_blank">Ir para a Conquer </Link></Button>
        <p className="text-text-a text-xl font-bold">São mais de 80 habilidades
          disponíveis! Descubra o poder das
          soft e hard skills na sua carreira.</p>
      </div> 
      
      <CaroulselCustom />
      
      <div className="2xl:px-20 px-10  w-full">
      <ul className="list-disc list-inside">
    <li className="text-black 2xl:text-lg font-bold">
      Você aprende com um conteúdo mão na massa, colocando em prática cada curso imediatamente.
    </li>
    <li className="text-black 2xl:text-lg font-bold">
      Seus professores vivem o que ensinam, então você vai aprender aquilo que já foi validado no mercado.
    </li>
    <li className="text-black 2xl:text-lg font-bold">
      Além do conhecimento técnico, você terá acesso a mais de 80 cursos para acelerar ainda mais o seu crescimento.
    </li>
    <li className="text-black 2xl:text-lg font-bold">
      Sem enrolação! Aqui você desenvolve uma nova habilidade em dias focando no que realmente é importante.
    </li>
    <li className="text-black 2xl:text-lg font-bold">
      A rotina está agitada? Não se preocupe. Aqui você acompanha as aulas de onde, quando e quantas vezes quiser.
    </li>
    <li className="text-black 2xl:text-lg font-bold">
      Conquiste certificados de peso e coloque a sua carreira em destaque.
    </li>
  </ul>

            <Button className=" bg-yellow-main text-black text-lg font-bold w-80 h-12"><Link href="https://escolaconquer.com.br/pos-graduacao/" target="_blank">Ir para a Conquer </Link></Button>
          
        
      </div>

      <footer className="flex flex-wrap items-center justify-center gap-6 w-full bg-black py-8 2xl:px-20 px-10">
        <p className="text-white text-sm ">Powered by</p>
        <Image src="/indico.png" alt="logo itau" width={81} height={25} />
        <p className="text-white text-[8px] 2xl:text-xs ">CAOS SISTEMAS DINÂMICOS E COMPLEXOS LTDA - Brasil - CNPJ 05.934.733/0001-17</p>
      </footer>
    
    </main>
  );
}
