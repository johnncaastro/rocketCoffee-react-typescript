import styled from 'styled-components';

export const Container = styled.header`
  .blur-left {
    position: absolute;
    bottom: -4.7rem;

    img {
      max-width: 60rem;
    }
  }

  .blur-right {
    position: absolute;
    top: -8rem;
    right: 0;
    z-index: -1;

    img {
      max-width: 60rem;
    }
  }

  .blur-mobile {
    display: none;
  }

  .menu-mobile {
    display: none;
  }

  .menu-web {
    max-width: 70rem;
    height: 3.4rem;
    margin: 0 auto;
    padding: 4rem 4rem 4rem 10rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      max-width: 2.7rem;
    }

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      a {
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }

    .take-coffee {
      max-width: 14rem;
      height: 2.4rem;
      padding: 1rem 2rem;
      border: 1px solid var(--button);
      border-radius: 0.5rem;

      display: flex;
      align-items: center;

      color: var(--text-color);
      font-size: 0.75rem;
      text-transform: uppercase;

      transition: background 0.2s;

      &:hover {
        background: var(--button);
      }
    }
  }

  .main-mobile {
    display: none;
  }

  .main-web {
    max-width: 1120px;
    height: 35rem;
    margin: 2rem auto 0 auto;

    h1 {
      font-size: 4.8rem;
      line-height: 4.2rem;
    }

    span {
      font-size: 4.8rem;
      color: var(--background);
      text-shadow: -1px -1px 0 var(--button), 1px -1px 0 var(--button), -1px 1px 0 var(--button), 1px 1px 0 var(--button);
    }

    img {
      max-width: 50rem;
      display: block;
      margin: 0 auto;
    }
  }

  
  @media(max-width: 700px) {
    .blur-left, .blur-right, .menu-web, .main-web {
      display: none;
    }

    .blur-mobile {
      position: absolute;
      right: 2rem;
      bottom: -40rem;
      display: block;

      img {
        width: 62rem;
      }
    }

    .menu-mobile {
      max-width: 80rem;
      height: 10rem;
      margin: 0 auto;
      padding: 4rem 2rem 2rem 2rem;
      border-bottom: 1px solid var(--border-menu-mobile);

      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        border: none;
      }
    }

    .main-mobile {
      max-width: 74rem;
      margin: 0 auto;
      padding-inline: 3rem;
      display: block;

      p {
        margin-block: 10rem;

        font-size: 4rem;
      }

      button {
        max-width: 34rem;
        margin: 0 auto;
        padding: 1.5rem 4rem;
        border: 1px solid var(--button);
        border-radius: 0.75rem;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        color: var(--text-color-menu-mobile);
        text-transform: uppercase;
      }

      h1 {
        margin-top: 9rem;
        font-size: 8rem;
        line-height: 8rem;
      }

      span {
        font-size: 8rem;
        color: var(--background);
        text-shadow: -1px -1px 0 var(--button), 1px -1px 0 var(--button), -1px 1px 0 var(--button), 1px 1px 0 var(--button);
      }

      img {
        max-width: 60rem;
        display: block;
        margin: 0 auto;
      }
    }
  }
`