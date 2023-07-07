import Features from '@/components/Features.tsx'
import Cta from '@/components/Cta.tsx'
import Packages from '@/components/Packages.tsx'
import Testimonials from '@/components/Testimonials.tsx'

export default function LearnMore() {
    return <>
    <span id="features">
  <Features/>
        </span>
         <span id="cta">
         <Cta/>
        </span>
         <span id="packages">
          <Packages/>
        </span>
         <span id="testimonials">
        <Testimonials/>
        </span>
      
       
      
        
    </>
}