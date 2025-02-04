import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function CaroulselCustom() {
  return (
      <div className="w-full flex justify-center relative items-center mt-10 mb-10">
      <Carousel className="2xl:w-10/12 xl:w-10/12 lg:w-10/12 w-full">
        <CarouselContent className="2xl:-ml-3 ml-3 ">
          <CarouselItem className="basis-auto relative pl-3 ">
            <div className="relative w-[326px] h-[326px]"> 
              <Image
                src="/itauuniclass/minhasvantagens/conquerpos/images/c1.png"
                alt="carrossel item 1"
                fill
                className="rounded-md object-cover"
              />
              </div>
              <div className="absolute flex flex-col items-start justify-center bottom-5 left-10 w-64 gap-3">
                <h3 className="text-3xl text-white font-bold w-72">Gestão de Pessoas e Negócios</h3>
                <div className="flex gap-4">
              <Link
  href="https://drive.conqueronline.com.br/growth/escola-de-negocios/pos-graduacao/ementas/Ementa_GPN.pdf"
  target="_blank"
>
  <Button className="bg-white-main text-black text-sm font-bold w-[87px] h-[45px]">
    Ver ementa
  </Button>
</Link>

                <Link href="https://cnqr.com.br/r/itau" target="_blank"><Button className=" bg-yellow-main text-black text-sm font-bold w-[159px] h-[45px]">
                  Matricule-se Já!</Button></Link>
                </div>
                
              </div>
            </CarouselItem>

            <CarouselItem className="basis-auto relative pl-3 ">
            <div className="relative w-[326px] h-[326px]"> 
              <Image
                src="/itauuniclass/minhasvantagens/conquerpos/images/c2.png"
                alt="carrossel item 2"
                fill
                className="rounded-md object-cover"
              />
              </div>
              <div className="absolute flex flex-col items-start justify-center bottom-5 left-10 w-64 gap-3">
                <h3 className="text-3xl text-white font-bold w-72">Gestão Estratégica de Negócios</h3>
              <div className="flex gap-4">
                <Link href="https://drive.conqueronline.com.br/growth/escola-de-negocios/pos-graduacao/ementas/Ementa_GEN.pdf" target="_blank">
                <Button className=" bg-white-main text-black text-sm font-bold w-[87px] h-[45px]">
                    Ver ementa </Button></Link>
                <Link href="https://cnqr.com.br/r/itau" target="_blank">
                <Button className=" bg-yellow-main text-black text-sm font-bold w-[159px] h-[45px]">
                  Matricule-se Já!</Button></Link>
                </div>
                
              </div>
            </CarouselItem>

          <CarouselItem className="basis-auto relative pl-3 ">
            <div className="relative w-[326px] h-[326px]"> 
              <Image
                src="/itauuniclass/minhasvantagens/conquerpos/images/c3.png"
                alt="carrossel item 3"
                fill
                className="rounded-md object-cover"
              />
              </div>
              <div className="absolute flex flex-col items-start justify-center bottom-5 left-10 w-64 gap-3">
                <h3 className="text-3xl text-white font-bold w-72">Liderança e Gestão em Tecnologia</h3>
              <div className="flex gap-4">
                  <Link href="https://drive.conqueronline.com.br/growth/escola-de-negocios/pos-graduacao/ementas/Ementa_TECH.pdf" target="_blank">
                <Button className=" bg-white-main text-black text-sm font-bold w-[87px] h-[45px]">
                    Ver ementa </Button></Link>
                <Link href="https://cnqr.com.br/r/itau" target="_blank">
                <Button className=" bg-yellow-main text-black text-sm font-bold w-[159px] h-[45px]">
                  Matricule-se Já!</Button></Link>
                </div>
                
              </div>
            </CarouselItem>

          <CarouselItem className="basis-auto relative pl-3 ">
            <div className="relative w-[326px] h-[326px]"> 
              <Image
                src="/itauuniclass/minhasvantagens/conquerpos/images/c4.png"
                alt="carrossel item 4"
                fill
                className="rounded-md object-cover"
              />
              </div>
              <div className="absolute flex flex-col items-start justify-center bottom-5 left-10 w-64 gap-3">
                <h3 className="text-3xl text-white font-bold w-72">Liderança e Gestão de Pessoas</h3>
              <div className="flex gap-4">
                <Link href="https://drive.conqueronline.com.br/growth/escola-de-negocios/pos-graduacao/ementas/Ementa_LID.pdf" target="_blank">
                <Button className=" bg-white-main text-black text-sm font-bold w-[87px] h-[45px]">
                    Ver ementa</Button> </Link>
                  <Link href="https://cnqr.com.br/r/itau" target="_blank">
                <Button className=" bg-yellow-main text-black text-sm font-bold w-[159px] h-[45px]">
                Matricule-se Já!</Button> </Link>
                </div>
                
              </div>
          </CarouselItem>
          
            <CarouselItem className="basis-auto relative pl-3 ">
            <div className="relative w-[326px] h-[326px]"> 
              <Image
                src="/itauuniclass/minhasvantagens/conquerpos/images/c5.png"
                alt="carrossel item 5"
                fill
                className="rounded-md object-cover"
              />
              </div>
              <div className="absolute flex flex-col items-start justify-center bottom-5 left-10 w-64 gap-3">
                <h3 className="text-3xl text-white font-bold w-72">Marketing e Estratégias Digitais</h3>
              <div className="flex gap-4">
                <Link href="https://drive.conqueronline.com.br/growth/escola-de-negocios/pos-graduacao/ementas/Ementa_MED.pdf" target="_blank">
                <Button className=" bg-white-main text-black text-sm font-bold w-[87px] h-[45px]">
                    Ver ementa </Button></Link>
                  <Link href="https://cnqr.com.br/r/itau" target="_blank">
                <Button className=" bg-yellow-main text-black text-sm font-bold w-[159px] h-[45px]">
                Matricule-se Já!</Button> </Link>
                </div>
                
              </div>
            </CarouselItem>

            <CarouselItem className="basis-auto relative pl-3 ">
            <div className="relative w-[326px] h-[326px]"> 
              <Image
                src="/itauuniclass/minhasvantagens/conquerpos/images/c6.png"
                alt="carrossel item 6"
                fill
                className="rounded-md object-cover"
              />
              </div>
              <div className="absolute flex flex-col items-start justify-center bottom-5 left-10 w-64 gap-3">
                <h3 className="text-3xl text-white font-bold w-72">Business Intelligence & Analytics</h3>
              <div className="flex gap-4">
                  <Link href="https://drive.conqueronline.com.br/growth/escola-de-negocios/pos-graduacao/ementas/Ementa_BIA.pdf" target="_blank">
                <Button className=" bg-white-main text-black text-sm font-bold w-[87px] h-[45px]">
                    Ver ementa </Button></Link>
                <Link href="https://cnqr.com.br/r/itau" target="_blank">
                <Button className=" bg-yellow-main text-black text-sm font-bold w-[159px] h-[45px]">
                  Matricule-se Já!</Button> </Link>
                </div>
                
              </div>
            </CarouselItem>

              <CarouselItem className="basis-auto relative pl-3">
            <div className="relative w-[326px] h-[326px]"> 
              <Image
                src="/itauuniclass/minhasvantagens/conquerpos/images/c7.png"
                alt="carrossel item 7"
                fill
                className="rounded-md object-cover"
              />
              </div>
              <div className="absolute flex flex-col items-start justify-center bottom-5 left-10 w-64 gap-3">
                <h3 className="text-3xl text-white font-bold w-72">Gestão Ágil e Inovação</h3>
              <div className="flex gap-4">
                <Link href="https://drive.conqueronline.com.br/growth/escola-de-negocios/pos-graduacao/ementas/Ementa_GAPI.pdf" target="_blank">
                <Button className=" bg-white-main text-black text-sm font-bold w-[87px] h-[45px]">
                    Ver ementa </Button></Link>
                <Link href="https://cnqr.com.br/r/itau" target="_blank">
                <Button className=" bg-yellow-main text-black text-sm font-bold w-[159px] h-[45px]">
                  Matricule-se Já!</Button> </Link>
                </div>
                
              </div>
            </CarouselItem>

              <CarouselItem className="basis-auto relative pl-3">
            <div className="relative w-[326px] h-[326px]"> 
              <Image
                src="/itauuniclass/minhasvantagens/conquerpos/images/c8.png"
                alt="carrossel item 8"
                fill
                className="rounded-md object-cover"
              />
              </div>
              <div className="absolute flex flex-col items-start justify-center bottom-5 left-10 w-64 gap-3">
                <h3 className="text-3xl text-white font-bold w-72">Gestão Estratégica de Recursos Humanos</h3>
              <div className="flex gap-4">
                <Link href="https://drive.conqueronline.com.br/growth/escola-de-negocios/pos-graduacao/ementas/Ementa_GERH.pdf" target="_blank">
                <Button className=" bg-white-main text-black text-sm font-bold w-[87px] h-[45px]">
                    Ver ementa </Button></Link>
                  <Link href="https://cnqr.com.br/r/itau" target="_blank">
                <Button className=" bg-yellow-main text-black text-sm font-bold w-[159px] h-[45px]">
                Matricule-se Já!</Button></Link>
                </div>
                
              </div>
            </CarouselItem>

              <CarouselItem className="basis-auto relative pl-3">
            <div className="relative w-[326px] h-[326px]"> 
              <Image
                src="/itauuniclass/minhasvantagens/conquerpos/images/c9.png"
                alt="carrossel item 9"
                fill
                className="rounded-md object-cover"
              />
              </div>
              <div className="absolute flex flex-col items-start justify-center bottom-5 left-10 w-64 gap-3">
                <h3 className="text-3xl text-white font-bold w-72">Transformação Digital e Liderança</h3>
              <div className="flex gap-4">
                <Link href="https://drive.conqueronline.com.br/growth/escola-de-negocios/pos-graduacao/ementas/Ementa_IA.pdf" target="_blank">
                <Button className=" bg-white-main text-black text-sm font-bold w-[87px] h-[45px]">
                    Ver ementa </Button></Link>
                <Link href="https://cnqr.com.br/r/itau" target="_blank">
                <Button className=" bg-yellow-main text-black text-sm font-bold w-[159px] h-[45px]">
                  Matricule-se Já!</Button></Link>
                </div>
                
              </div>
            </CarouselItem>

              <CarouselItem className="basis-auto relative pl-3">
            <div className="relative w-[326px] h-[326px]"> 
              <Image
                src="/itauuniclass/minhasvantagens/conquerpos/images/c10.png"
                alt="carrossel item 10"
                fill
                className="rounded-md object-cover"
              />
              </div>
              <div className="absolute flex flex-col items-start justify-center bottom-5 left-10 w-64 gap-3">
                <h3 className="text-2xl text-white font-bold w-72">Gestão de Projetos e Metodologias Ágeis</h3>
              <div className="flex gap-4">
                <Link href="https://drive.conqueronline.com.br/growth/escola-de-negocios/pos-graduacao/ementas/Ementa_GPMA.pdf" target="_blank">
                <Button className=" bg-white-main text-black text-sm font-bold w-[87px] h-[45px]">
                    Ver ementa </Button></Link>
                <Link href="https://cnqr.com.br/r/itau" target="_blank">
                <Button className=" bg-yellow-main text-black text-sm font-bold w-[159px] h-[45px]">
                  Matricule-se Já!</Button></Link>
                </div>
                
              </div>
          </CarouselItem>    
          <CarouselItem className="basis-auto relative pl-3">
            <div className="relative w-[326px] h-[326px]"> 
              <Image
                src="/itauuniclass/minhasvantagens/conquerpos/images/ca11.png"
                alt="carrossel item 11"
                fill
                className="rounded-md object-cover"
              />
              </div>
              <div className="absolute flex flex-col items-start justify-center bottom-5 left-10 w-64 gap-3">
                <h3 className="text-3xl text-white font-bold w-72">Gestão comercial e vendas</h3>
              <div className="flex gap-4">
                <Link href="https://drive.conqueronline.com.br/growth/escola-de-negocios/pos-graduacao/ementas/Ementa_GCV.pdf" target="_blank">
                <Button className=" bg-white-main text-black text-sm font-bold w-[87px] h-[45px]">
                    Ver ementa </Button></Link>
                <Link href="https://cnqr.com.br/r/itau" target="_blank">
                <Button className=" bg-yellow-main text-black text-sm font-bold w-[159px] h-[45px]">
                  Matricule-se Já!</Button></Link>
                </div>
                
              </div>
            </CarouselItem>  

                    </CarouselContent>
      </Carousel>
      </div>
  )
}
