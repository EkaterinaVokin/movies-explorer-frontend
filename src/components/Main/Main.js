import { AboutProject } from '../AboutProject/AboutProject.js';
import { Techs } from '../Techs/Techs.js';
import { AboutMe } from '../AboutMe/AboutMe.js';
import { Portfolio } from '../Portfolio/Portfolio.js';
import { Promo } from '../Promo/Promo.js';

export function Main() {

  return(
    <main>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>  
  ) 
}