import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import Image from 'next/image'
import { Button } from '../ui/button'

export default function CaroulselCustom() {
  return (
      <div className="w-full flex justify-center relative items-center mt-10 mb-10">
      <Carousel className="w-full max-w-[1750px] ">
        <CarouselContent className="2xl:-ml-8 ">
          <CarouselItem className="basis-1/3 2xl:basis-auto relative pl-8 ">
            <div className="relative 2xl:w-96 2xl:h-96"> 
              <Image
                src="/c1.png"
                alt="carrossel item 1"
                fill
                className="rounded-md object-cover"
              />
              </div>
              <div className="absolute flex flex-col items-start justify-center top-56 left-16 w-64 gap-3">
                <h3 className="text-3xl text-white font-bold w-72">Gestão de Pessoas e Negócios</h3>
                <div className="flex gap-4">
                  <Button className=" bg-white-main text-black text-lg font-bold w-32 h-12">Ver ementa</Button>
                <Button className=" bg-yellow-main text-black text-lg font-bold w-44 h-12">Matricule-se Já!</Button>
                </div>
                
              </div>
            </CarouselItem>

            <CarouselItem className="basis-1/3 2xl:basis-auto relative pl-8 ">
            <div className="relative 2xl:w-96 2xl:h-96"> 
              <Image
                src="/c2.png"
                alt="carrossel item 2"
                fill
                className="rounded-md object-cover"
              />
              </div>
              <div className="absolute flex flex-col items-start justify-center top-56 left-16 w-64 gap-3">
                <h3 className="text-3xl text-white font-bold w-80">Gestão Estratégica de Negócios</h3>
                <div className="flex gap-4">
                  <Button className=" bg-white-main text-black text-lg font-bold w-32 h-12">Ver ementa</Button>
                <Button className=" bg-yellow-main text-black text-lg font-bold w-44 h-12">Matricule-se Já!</Button>
                </div>
                
              </div>
            </CarouselItem>

            <CarouselItem className="basis-1/3 2xl:basis-auto relative pl-8 ">
            <div className="relative 2xl:w-96 2xl:h-96"> 
              <Image
                src="/c3.png"
                alt="carrossel item 3"
                fill
                className="rounded-md object-cover"
              />
              </div>
              <div className="absolute flex flex-col items-start justify-center top-56 left-16 w-64 gap-3">
                <h3 className="text-3xl text-white font-bold w-72">Liderança e Gestão em Tecnologia</h3>
                <div className="flex gap-4">
                  <Button className=" bg-white-main text-black text-lg font-bold w-32 h-12">Ver ementa</Button>
                <Button className=" bg-yellow-main text-black text-lg font-bold w-44 h-12">Matricule-se Já!</Button>
                </div>
                
              </div>
            </CarouselItem>

            <CarouselItem className="basis-1/3 2xl:basis-auto relative pl-8 ">
            <div className="relative 2xl:w-96 2xl:h-96"> 
              <Image
                src="/c4.png"
                alt="carrossel item 4"
                fill
                className="rounded-md object-cover"
              />
              </div>
              <div className="absolute flex flex-col items-start justify-center top-56 left-16 w-64 gap-3">
                <h3 className="text-3xl text-white font-bold w-72">Liderança e Gestão de Pessoas</h3>
                <div className="flex gap-4">
                  <Button className=" bg-white-main text-black text-lg font-bold w-32 h-12">Ver ementa</Button>
                <Button className=" bg-yellow-main text-black text-lg font-bold w-44 h-12">Matricule-se Já!</Button>
                </div>
                
              </div>
            </CarouselItem>
              <CarouselItem className="basis-1/3 2xl:basis-auto relative pl-8 ">
            <div className="relative 2xl:w-96 2xl:h-96"> 
              <Image
                src="/c5.png"
                alt="carrossel item 5"
                fill
                className="rounded-md object-cover"
              />
              </div>
              <div className="absolute flex flex-col items-start justify-center top-56 left-16 w-64 gap-3">
                <h3 className="text-3xl text-white font-bold w-72">Marketing e Estratégias Digitais</h3>
                <div className="flex gap-4">
                  <Button className=" bg-white-main text-black text-lg font-bold w-32 h-12">Ver ementa</Button>
                <Button className=" bg-yellow-main text-black text-lg font-bold w-44 h-12">Matricule-se Já!</Button>
                </div>
                
              </div>
            </CarouselItem>

              <CarouselItem className="basis-1/3 2xl:basis-auto relative pl-8 ">
            <div className="relative 2xl:w-96 2xl:h-96"> 
              <Image
                src="/c6.png"
                alt="carrossel item 6"
                fill
                className="rounded-md object-cover"
              />
              </div>
              <div className="absolute flex flex-col items-start justify-center top-56 left-16 w-64 gap-3">
                <h3 className="text-3xl text-white font-bold w-80">Business Intelligence & Analytics</h3>
                <div className="flex gap-4">
                  <Button className=" bg-white-main text-black text-lg font-bold w-32 h-12">Ver ementa</Button>
                <Button className=" bg-yellow-main text-black text-lg font-bold w-44 h-12">Matricule-se Já!</Button>
                </div>
                
              </div>
            </CarouselItem>

              <CarouselItem className="basis-1/3 2xl:basis-auto relative pl-8 ">
            <div className="relative 2xl:w-96 2xl:h-96"> 
              <Image
                src="/c7.png"
                alt="carrossel item 7"
                fill
                className="rounded-md object-cover"
              />
              </div>
              <div className="absolute flex flex-col items-start justify-center top-56 left-16 w-64 gap-3">
                <h3 className="text-3xl text-white font-bold w-72">Gestão Ágil e Inovação</h3>
                <div className="flex gap-4">
                  <Button className=" bg-white-main text-black text-lg font-bold w-32 h-12">Ver ementa</Button>
                <Button className=" bg-yellow-main text-black text-lg font-bold w-44 h-12">Matricule-se Já!</Button>
                </div>
                
              </div>
            </CarouselItem>

              <CarouselItem className="basis-1/3 2xl:basis-auto relative pl-8 ">
            <div className="relative 2xl:w-96 2xl:h-96"> 
              <Image
                src="/c8.png"
                alt="carrossel item 8"
                fill
                className="rounded-md object-cover"
              />
              </div>
              <div className="absolute flex flex-col items-start justify-center top-56 left-16 w-64 gap-3">
                <h3 className="text-3xl text-white font-bold w-96">Gestão Estratégica de Recursos Humanos</h3>
                <div className="flex gap-4">
                  <Button className=" bg-white-main text-black text-lg font-bold w-32 h-12">Ver ementa</Button>
                <Button className=" bg-yellow-main text-black text-lg font-bold w-44 h-12">Matricule-se Já!</Button>
                </div>
                
              </div>
            </CarouselItem>

              <CarouselItem className="basis-1/3 2xl:basis-auto relative pl-8 ">
            <div className="relative 2xl:w-96 2xl:h-96"> 
              <Image
                src="/c9.png"
                alt="carrossel item 9"
                fill
                className="rounded-md object-cover"
              />
              </div>
              <div className="absolute flex flex-col items-start justify-center top-56 left-16 w-64 gap-3">
                <h3 className="text-3xl text-white font-bold w-72">Transformação Digital e Liderança</h3>
                <div className="flex gap-4">
                  <Button className=" bg-white-main text-black text-lg font-bold w-32 h-12">Ver ementa</Button>
                <Button className=" bg-yellow-main text-black text-lg font-bold w-44 h-12">Matricule-se Já!</Button>
                </div>
                
              </div>
            </CarouselItem>

              <CarouselItem className="basis-1/3 2xl:basis-auto relative pl-8 ">
            <div className="relative 2xl:w-96 2xl:h-96"> 
              <Image
                src="/c10.png"
                alt="carrossel item 10"
                fill
                className="rounded-md object-cover"
              />
              </div>
              <div className="absolute flex flex-col items-start justify-center top-56 left-16 w-64 gap-3">
                <h3 className="text-3xl text-white font-bold w-96">Gestão de Projetos e Metodologias Ágeis</h3>
                <div className="flex gap-4">
                  <Button className=" bg-white-main text-black text-lg font-bold w-32 h-12">Ver ementa</Button>
                <Button className=" bg-yellow-main text-black text-lg font-bold w-44 h-12">Matricule-se Já!</Button>
                </div>
                
              </div>
            </CarouselItem>
            

                    </CarouselContent>
      </Carousel>
      </div>
  )
}
