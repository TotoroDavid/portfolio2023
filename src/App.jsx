
import { HeaderSection } from './components/HeaderSection';
import { StackSection } from './components/StackSection';
import { SkillsSection } from './components/SkillsSection';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';
import { SocialLinks } from './components/SocialLinks';
const url = `https://raw.githubusercontent.com/TotoroDavid/You-dont-know-JS/master/fotor_2023-2-6_15_11_3.png`

export const App = () => {

  return (
    <>
      <div className='container'>
        <HeaderSection />
        <StackSection />
        <SkillsSection />
        <Portfolio />
        <SocialLinks />
        <Footer />
      </div>


    </>
  )
}