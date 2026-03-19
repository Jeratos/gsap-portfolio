import React from 'react'
import ProjectCard from '../../components/projects/project-card'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

export default function Projects() {

const projectImage:object[] = [{
  image1:'/image/saas.png',
  image1Title:'saas-product',
  image2:'/image/e-com.png',
  image2Title:'e-commerce'
},
{
  image1:'/image/e-commerce.png',
  image1Title:'e-commerce',
  image2:'/image/finance.png',
  image2Title:'finance'
},
{
  image1:'/image/meal.png',
  image1Title:'meal',
  image2:'/image/TinDog.png',
  image2Title:'pet-selling'
},
{
  image1:'/image/droneTv.png',
  image1Title:'droneTv: gen AI',
  image2:'/image/TechSolution.png',
  image2Title:'TechSolution'
}
]
 
gsap.registerPlugin(ScrollTrigger)
useGSAP(()=>{
  gsap.from('.hero',{
    height:"100px",
    stagger:{
      amount:0.8
    },
    scrollTrigger:{
      trigger:'.lol',
      start:'top 100%',
      end:'top -150%',
      scrub:true
    }
  })

})

  return (
    <>
    <div className='p-4'>
      <div className='pt-[30vh] md:pt-[40vh] '>
        <h1 className='text-[6vw] pl-5 font-[font2] uppercase '>Projects</h1>
      </div>
      <div className='mt-0 md:-mt-5 lol '>
      {projectImage.map((item, index) => (
        <div key={index} className="hero flex md:flex-nowrap flex-wrap h-[250px] md:h-[400px] gap-2 w-full mb-5">
          <ProjectCard  image1={item.image1} image2={item.image2} title1={item.image1Title} title2={item.image2Title}/>
          </div>
        ))}
        </div>
      
    </div>
    </>
  )
}
