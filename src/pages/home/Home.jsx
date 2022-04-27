import React from 'react'
import { HomeView } from './HomeView'

import { ReactComponent as Banner } from '../../assets/banner.svg'

export default function Home() {
  return (
    <HomeView>
      <section>
        <h1 class="topicTitle">Sobre</h1>
        <Banner />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
          exercitationem et explicabo harum soluta quod minus culpa recusandae
          ipsum nihil perspiciatis sapiente possimus sint doloribus similique
          deserunt, laboriosam, accusantium tenetur?
        </p>
      </section>

      <section>
        <h1 class="topicTitle">Nos localizamos aqui!</h1>
      </section>


    </HomeView>
  )
}
