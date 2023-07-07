import Features from '@/components/Features'
import Cta from '@/components/Cta'
import Packages from '@/components/Packages'
import Testimonials from '@/components/Testimonials'

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