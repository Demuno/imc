import styled from 'styled-components'

export const HomeView = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  width: 100%;
  height: 100%;

  margin-top: 20px;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    margin-bottom: 100px;
    background-color: red;
    width: 100vw;
    height: 100vh;

}

  iframe {
    margin-top: 30px;
  }

  svg {
    width: 25rem;

    align-self: flex-start;
    margin-left: 200px;

  }

  p {
    height: 10rem;
    width: 20rem;

    margin-left: 500px;
    margin-top: -300px;
  }

`
