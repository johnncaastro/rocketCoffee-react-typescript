import logoDesktopImg from '../../assets/logo-desktop.svg';
import arrowImg from '../../assets/arrow.svg';
import logoMobileImg from '../../assets/logo-mobile.svg';
import menuOpenImg from '../../assets/menu-buguer-open.svg';
import rocketCoffeeImg from '../../assets/rocket-coffee.png';
import blurRightImg from '../../assets/blur-2.png';
import blurLeftImg from '../../assets/blur-1.png';
import blurMobileImg from '../../assets/blur-mobile.png';

import { Container } from './styles';

export function Home() {
  const spanName = '<Great Code/>';

  return (
    <Container>
      <div className="blur-left">
        <img src={blurLeftImg} alt="Decoração roxa à esquerda" />
      </div>

      <div className="blur-right">
        <img src={blurRightImg} alt="Decoração roxa à direita" />
      </div>

      <div className="blur-mobile">
        <img src={blurMobileImg} alt="Decoração roxa no mobile" />
      </div>

      <nav className='menu-web'>
        <a href=""><img src={logoDesktopImg} alt="Logo desktop" /></a>

        <ul>
          <a href=""><li>Home</li></a>
          <a href=""><li>Menu</li></a>
          <a href=""><li>Recompensas</li></a>
          <a href=""><li>Gift Cards</li></a>
          <a href=""><li>Lojas</li></a>
        </ul>

        <button className='take-coffee' type="button">
          pegar meu café
        </button>
      </nav>

      <nav className='menu-mobile'>
        <a href=""><img src={logoMobileImg} alt="Logo mobile" /></a>

        <button type="button">
          <img src={menuOpenImg} alt="ícone para abrir o menu" />
        </button>
      </nav>

      <main className='main-web'>
        <h1>Great Coffee</h1>
        <span>{spanName}</span>

        <img src={rocketCoffeeImg} alt="Foto de dois copos Rocket Coffee" />
      </main>

      <main className='main-mobile'>
        <p>O café que fará seu código decolar para o próximo nível.</p>

        <button type="button">
          pegar meu café

          <img src={arrowImg} alt="seta para direita" />
        </button>

        <h1>Great Coffee</h1>
        <span>{spanName}</span>

        <img src={rocketCoffeeImg} alt="Foto de dois copos Rocket Coffee" />
      </main>
    </Container>
  )
}