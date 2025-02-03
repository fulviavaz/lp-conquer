 
import CaroulselCustom from "@/components/CaroulselCustom";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="flex items-center justify-between w-full bg-black py-4 2xl:px-20 px-10">
        <Image src="/itauuniclass/minhasvantagens/conquerpos/images/itau.png" alt="logo itau" width={44} height={44} />
        <Image src="/itauuniclass/minhasvantagens/conquerpos/images/conquer-pos.png" alt="logo conquer" width={136} height={42}/>
      </nav>

        {/* hero */}
      
        <div className="flex flex-wrap-reverse gap-10 items-center justify-between w-full bg-[#0131FF] py-24 2xl:px-30 xl:px-40 lg:px-30 px-10">
        <div className="2xl:w-[500px] xl:w-[500px] lg:w-[500px] flex flex-col">
          <h1 className="text-white 2xl:text-4xl xl:text-4xl lg:text-4xl text-2xl font-bold ">Conquer e Uniclass<br/>
            Uma parceria para<br/> investir no seu futuro</h1>
          <p className="text-lg font-semibold text-white mt-10">Aproveite os descontos exclusivos minhas vantagens!</p>
        </div>
        <div>
          <Image src="/itauuniclass/minhasvantagens/conquerpos/images/cpos.png" alt="hero" width={630} height={323} />
        </div>
        </div>

    <main className="flex flex-col items-center justify-between max-w-[1280px] mx-auto">    
    

      <div className="2xl:px-20 px-10 flex flex-col items-start justify-start w-full gap-6 py-14">      
      
        <p className="text-text-a text-2xl font-bold">São mais de 80 habilidades
          disponíveis! Descubra o poder das
          soft e hard skills na sua carreira.</p>
      </div> 
      
      <CaroulselCustom />
      
      <div className="2xl:px-20 px-10 mb-6 w-full">
        <p className="text-black text-sm font-normal mb-6">Ao escolher o curso desejado, você será direcionado para página de check-out. Preencha os dados do cartão e, no campo “possui cupom?”, insira o cupom <strong>ITAÚ</strong> para garantir o desconto e seguir com o pagamento.</p>
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
        
      </div>   
    
      </main>
        <footer className="flex flex-wrap items-center justify-center gap-6 w-full bg-black py-8 2xl:px-20 px-10">
        <p className="text-white text-sm ">Powered by</p>
        <Image src="/itauuniclass/minhasvantagens/conquerpos/images/indico.png" alt="logo itau" width={81} height={25} />
        <p className="text-white text-[8px] 2xl:text-xs ">CAOS SISTEMAS DINÂMICOS E COMPLEXOS LTDA - Brasil - CNPJ 05.934.733/0001-17</p>
      </footer>
      </>
  );
}
