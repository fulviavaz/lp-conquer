
import CaroulselCustom from "@/components/CaroulselCustom";
import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <nav className="flex items-center justify-between w-full bg-black py-4 px-20">
        <Image src="/itau.png" alt="logo itau" width={44} height={44} />
        <Image src="/conquer.png" alt="logo conquer" width={136} height={42}/>
      </nav>
    <div className="flex flex-col items-center justify-center w-full">
        <div className=" bg-[url('/main.png')] bg-cover bg-center w-[600px] h-[400px] relative items-center mt-10 mb-10 bg-black rounded-3xl">  
          <div className="absolute top-80 left-7">
            <h1 className="text-3xl text-white font-bold">Conquer Pós</h1>
            <h3 className="text-lg text-white font-bold">Aproveite os descontos!</h3>
            </div>
        </div>
        </div>

      <div className="px-20 flex flex-col items-start justify-start w-full gap-6">
        <h2 className="2xl:text-2xl text-text-a font-bold">Garanta seu desconto</h2>
        <Button className=" bg-yellow-main text-black text-lg font-bold w-80 h-12">Ir para a Conquer</Button>
        <p className="text-text-a 2xl:text-2xl font-bold">São mais de 80 habilidades
          disponíveis! Descubra o poder das
          soft e hard skills na sua carreira.</p>
      </div> 
      
      <CaroulselCustom />
      
      <div className="px-20 w-full">
        <ul>
          <li className="flex gap-2 items-center">
            <Circle size={8} className="bg-black rounded-full" />
            <p className="text-black 2xl:text-lg font-bold">Você aprende com um conteúdo mão na massa, colocando em prática cada curso imediatamente.</p>
          </li>
            <li className="flex gap-2 items-center">
            <Circle size={8} className="bg-black rounded-full" />
            <p className="text-black 2xl:text-lg font-bold">Seus professores vivem o que ensinam, então você vai aprender aquilo que já foi validado no mercado.</p>
          </li>
          <li className="flex gap-2 items-center">
            <Circle size={8} className="bg-black rounded-full" />
            <p className="text-black 2xl:text-lg font-bold">Além do conhecimento técnico, você terá acesso a mais de 80 cursos para acelerar ainda mais o seu crescimento.</p>
          </li>
            <li className="flex gap-2 items-center">
            <Circle size={8} className="bg-black rounded-full" />
            <p className="text-black 2xl:text-lg font-bold">Sem enrolação! Aqui você desenvolve uma nova habilidade em dias focando no que realmente é importante.</p>
          </li>
            <li className="flex gap-2 items-center">
            <Circle size={8} className="bg-black rounded-full" />
            <p className="text-black 2xl:text-lg font-bold">A rotina está agitada? Não se preocupe. Aqui você acompanha as aulas de onde, quando e quantas vezes quiser.</p>
          </li>
            <li className="flex gap-2 items-center">
            <Circle size={8} className="bg-black rounded-full" />
            <p className="text-black 2xl:text-lg font-bold">Conquiste certificados de peso e coloque a sua carreira em destaque.</p>
          </li>

            <Button className=" bg-yellow-main text-black text-lg font-bold w-80 h-12 mt-6 mb-6">Ir para a Conquer</Button>
          
          
        </ul>
      </div>

      <footer className="flex flex-wrap items-center justify-center gap-6 w-full bg-black py-8 px-20">
        <p className="text-white text-sm ">Powered by</p>
        <Image src="/indico.png" alt="logo itau" width={81} height={25} />
        <p className="text-white text-sm ">CAOS SISTEMAS DINÂMICOS E COMPLEXOS LTDA - Brasil - CNPJ 05.934.733/0001-17</p>
      </footer>
    
    </main>
  );
}
