import styled from "styled-components";
// import axios from "axios";
import { IoMenuOutline, IoCartOutline, IoSearchSharp } from "react-icons/io5";

import Header from "./Header";
import ProductCard from "./ProductCard";

const products = [
  {
    name: "Notebook Gamer Acer Nitro 5 Intel Core i5-10300H 8GB (GeForce GTX1650 4GB) 512GB SSD W11 15,6” Preto AN515-55-59T4",
    price: "5409,84",
    amount: 4,
    description:
      "O notebook gamer Acer Aspire Nitro 5 é a nova geração, com uma configuração que não treme para os jogos mais pesados. Embarque agora e prepare-se para a potência máxima. A super placa de vídeo NVIDIA® GeForce® GTX 1650 com 4 GB de memória dedicada GDDR6 traz a performance que você precisa para surpreender seus adversários e jogar com alto nível de realismo. Se é poder que você quer para chegar mais rápido ao level avançado, conte com o desempenho do Processador Intel® Core™ i5-10300H Quad Core de 10ª geração, além dos 8 GB de memória tipo DDR4, expansível até 32GB. O Aspire Nitro 5 vem equipado com osistema operacional Windows 11, entregando os mais diversos recursos para que seus momentos de jogos e entretenimento sejam ainda mais emocionantes e desafiadores. ESPAÇO DE SOBRA E MUITO VELOZ O Acer Aspire Nitro 5 vem equipado com 512 GB SSD, que possui velocidade de leitura e gravação mais rápida que um HD tradicional. Com seu sistema operacional e jogos instalados nele, tudo abrirá em poucos segundos! O chassi traz linhas inspiradas no mundo gamer, com acabamento premium texturizado e detalhes em vermelho. Os adversários já começam a partida respeitando seu time. A tela de 15.6” IPS Full HD transforma a sua experiência e te faz mergulhar de verdade na ação. O recurso IPS permite que você enxergue bem o jogo até dos ângulos mais complicados. O ZERO ABSOLUTO CHEGOU Com duas ventoinhas para um resfriamento superior e a tecnologia CoolBoost, a sua máquina fica fria nas horas mais tensas. SUPERIOR ATÉ NA CONEXÃO Com Intel® Wi-Fi 6 MU-MIMO 2x2 e Killer™ Ethernet E2600, a conexão de alta velocidade é garantida e essencial para quem disputa partidas online. Chega de lag, agora o choro é só de quem leva headshot.",
    images: [
      {
        src: "https://http2.mlstatic.com/D_NQ_NP_976051-MLA43117842632_082020-O.webp",
        alt: "Acer Nitro 5 image 1",
      },
      {
        src: "https://http2.mlstatic.com/D_NQ_NP_714069-MLA43117842635_082020-O.webp",
        alt: "Acer Nitro 5 image 2",
      },
    ],
    categories: ["Lançamento, notebook"],
  },
  {
    name: "Notebook asus X515JF-EJ360T Intel Core i5 1035G1 8GB 256GB ssd W10 15,6 LED-backlit Cinza",
    price: "3899,00",
    amount: 3,
    description: `Seja para trabalho ou lazer, o novo Notebook asus X515 é perfeito para o dia-a-dia, que oferece desempenho e recursos visuais imersivos. Sua Tela NanoEdge possui bordas incrivelmente finas e um revestimento fosco antirreflexo para uma experiência verdadeiramente envolvente. Além disso, o notebook asus X515 possui armazenamento SSD¹, que além de mais rápido é mais leve e mais seguro, enquanto seu chassi reforçado melhora a digitação e permite abrir e fechar a tampa em um movimento suave.
      No interior do asus X515, existe uma estrutura de suporte de metal embaixo do teclado que fornece uma plataforma muito mais estável ao digitar e usar o touchpad. Além de fornecer rigidez estrutural, também fortalece a articulação da dobradiça e protege os componentes internos. Os lados da tampa também são reforçados e funcionam como vigas de proteção contra impactos laterais em automóveis. Eles fornecem suporte estrutural para a tampa, o painel de LED e a junta de dobradiça.
      Proteção física e também para os seus dados. O asus X515 possui armazenamento SSD¹, que além de ser muito mais rápido que o HD convencional, é menor, mais leve e não tem partes mecânicas extremamente sensíveis a impactos e solavancos. Isso garante maior proteção aos dados armazenados no seu notebook, para que você possa trabalhar sem preocupações, com alto desempenho e produtividade, mesmo em um veículo em movimento.
      Se você está sempre em movimento e quer produtividade onde estiver, o asus X515 tem tela grande, mas corpo pequeno. Provavelmente você deve pensar que notebooks de 15 polegadas são grandes, mas como a moldura da tela é muito fina, o notebook ficou extremamente compacto, ainda assim sem perder produtividade e mantendo o teclado numérico. Ele ainda é leve, com apenas 1,8Kg, e bem fino, com 19,9mm de espessura - perfeito para levar, com você, onde for.
      Já que o asus X515 estará sempre com você, ele precisa estar sempre pronto! Com o carregamento rápido, você pode ter 60% da sua carga total em apenas 49 minutos de tomada. E para que isso aconteça com total segurança, a asus desenvolveu a exclusiva tecnologia que monitora a bateria, protegendo-a de sobrecargas e com isso aumentando a vida útil em até 3 vezes.
      No interior, ele é alimentado pelo processador Intel Core i5 da 10ª geração, disponível em versões de até 8GB de memória ram e até 256GB de armazenamento rápido SSD¹. E para aqueles que precisam de uma força ainda maior na parte gráfica, o notebook asus X515 também tem versões com placa de vídeo nvidia GeForce MX130² com 2GB de memória GDDR5 dedicada (apenas na versão X515JF).
      Além disso, o novo asus X515 está equipado com a porta reversível USB Tipo-C 3.2, para transferência de dados até 10x mais rápidas³ do que as conexões USB 2.0 mais antigas, e portas USB Tipo-A 3.2 e 2.0 e saída hdmi - para que você possa conectar facilmente todos os seus periféricos, monitores e projetores atuais, sem complicações.
      Novo Notebook asus X515, fácil de levar e produtividade sem esforço.
      Disclaimer obrigatório
      As especificações podem ser alteradas sem aviso prévio.
      Para o modelo X515JA, o processador gráfico é o Intel HD graphics 620 (integrado ao processador Intel Core i5 1035G1), e para o modelo X515JF, o processador gráfico é o nvidia GeForce MX130 com 2GB de memória GDDR5 dedicada.
      Os números de transferência de dados usb-c são baseados no desempenho teórico. O desempenho real pode variar em diferentes situações de uso.`,
    images: [
      {
        src: "https://http2.mlstatic.com/D_NQ_NP_779687-MLB49510653732_032022-O.webp",
        alt: "Asus X515JF image 1",
      },
      {
        src: "https://http2.mlstatic.com/D_NQ_NP_825610-MLB49510792228_032022-O.webp",
        alt: "Asus X515JF image 2",
      },
    ],
    categories: ["notebook"],
  },
  {
    name: 'Notebook Samsung Galaxy Book Go prata 14", Qualcomm Snapdragon 7c Gen 2 4GB de RAM 128GB SSD, Qualcomm Adreno 618 1920x1080px Windows 10 Home',
    price: "2799,99",
    amount: 4,
    description: `O notebook Samsung Galaxy Book Go é uma solução para trabalhar e estudar, bem como para entreter. Por ser portátil, a oficina deixará de ser o seu único espaço a utilizar para abrir-lhe as portas a outros ambientes, seja em casa ou no escritório.

      Tela com alto impacto visual
      A sua tela LED de 14" e 1920x1080 px de resolução lhe dará cores mais vivas e definidas. Seus filmes e séries favoritas ganharão vida, com maior qualidade e definição em cada detalhe.
      
      Eficiência na ponta dos dedos
      Seu processador Qualcomm Snapdragon de 8 núcleos, lhe permitirá executar diversos programas e processos indispensáveis ​​para se desenvolver no dia a dia, seja no seu trabalho ou nos momentos de lazer em sua casa.
      
      Unidade sólida poderosa
      O disco sólido de 128 GB faz o equipo funcionar em alta velocidade e por isso oferece a maior agilidade para operar com diversos programas.
      
      Um processador exclusivo para os gráficos
      Sua placa de vídeo Qualcomm Adreno 618 torna a este dispositivo numa ótima ferramenta de trabalho para qualquer profissional de design. Ele vai permitir que você atinja um ótimo desempenho em todos os seus jogos e outras tarefas diárias que requerem processamento gráfico.
      
      Uma bateria de extra longa duração
      A bateria deste equipamento tem uma autonomia em torno de 18 horas, que a posiciona dentro da gama de computadores com maior autonomia no mercado. É ideal para aqueles que precisam continuar trabalhando ou estudando enquanto estão desconectados.`,
    images: [
      {
        src: "https://http2.mlstatic.com/D_NQ_NP_846712-MLA48231451819_112021-O.webp",
        alt: "Samsung Galaxy Book Go image 1",
      },
      {
        src: "https://http2.mlstatic.com/D_NQ_NP_874201-MLA48231451895_112021-O.webp",
        alt: "Samsung Galaxy Book Go image 2",
      },
    ],
    categories: ["notebook"],
  },
  {
    name: 'Notebook Lenovo IdeaPad 15IML05 platinum gray 15.6", Intel Core i3 10110U 4GB de RAM 256GB SSD, Intel UHD Graphics 620 1366x768px Windows 11 Home',
    price: "2699,00",
    amount: 3,
    description: `O notebook Lenovo IdeaPad 3 foi projetado para tornar sua vida mais fácil. Seu design elegante e inovador e sua comodidade para transportá-lo, farão com que seja seu PC favorito. Qualquer tarefa que você proponha, seja em casa ou na oficina, você fará isso com facilidade graças ao seu poderoso desempenho.

      Tela com alto impacto visual
      A sua tela de 15.6" e 1366x768 px de resolução lhe dará cores mais vivas e definidas. Seus filmes e séries favoritas ganharão vida, obtendo maior qualidade e definição em cada detalhe.
      
      Eficiência na ponta dos dedos
      Seu processador Intel Core i3 de 2 núcleos, é projetado para aquelas pessoas que geram e consomem conteúdo. Com base nisso, permite o desempenho necessário para editar fotos ou vídeos em programas básicos.
      
      Unidade sólida poderosa
      O disco sólido de 256 GB faz o equipo funcionar em alta velocidade e por isso oferece a maior agilidade para operar com diversos programas.
      
      Um processador exclusivo para os gráficos
      Sua placa de vídeo Intel UHD Graphics 620 torna a este dispositivo numa ótima ferramenta de trabalho para qualquer profissional de design. Ele vai permitir que você atinja um ótimo desempenho em todos os seus jogos e outras tarefas diárias que requerem processamento gráfico.`,
    images: [
      {
        src: "https://http2.mlstatic.com/D_NQ_NP_820566-MLA48452096150_122021-O.webp",
        alt: "Lenovo IdeaPad image 1",
      },
      {
        src: "https://http2.mlstatic.com/D_NQ_NP_703916-MLA48452096155_122021-O.webp",
        alt: "Lenovo IdeaPad image 2",
      },
    ],
    categories: ["notebook"],
  },
  {
    name: `Smart TV Philco PTV32G70RCH LED HD 32" 110V/220V`,
    price: "1349,00",
    amout: 10,
    description: `Marca pioneira na indústria de tecnologia e eletrodomésticos em todo o mundo, a Philco é sinônimo de qualidade e inovação constante. Oferece uma ampla gama de televisores, projetados e criados para proporcionar o máximo conforto aos seus consumidores.
      Com Smart TV PTV32G70RCH você poderá acessar os aplicativos onde seu conteúdo favorito está localizado. Além disso, você pode navegar na web, interagir em redes sociais e se divertir com jogos de vídeo.
      
      Mergulhe na tela
      Sua resolução HD apresenta imagens com grande detalhe e alta definição. Agora tudo o que você vê ganhará vida com brilho e cores mais reais.
      
      Um som que o rodeia
      Você sentirá que vem de todas as direções possíveis, o que enriquece a percepção disso. O diálogo de sua série de fim de semana ou a música de seus cantores favoritos assumirá um significado diferente.
      
      Além de assistir TV
      Sua função Screen Share permite duplicar a tela do seu smartphone, tablet ou PC para aparecer na sua TV. Desta forma, você poderá visualizar todo tipo de conteúdo: material audiovisual, documentos de trabalho, e-mails e muito mais.`,
    images: [
      {
        src: "https://http2.mlstatic.com/D_NQ_NP_853126-MLA48700120634_122021-O.webp",
        alt: "TV Philco image 1",
      },
      {
        src: "https://http2.mlstatic.com/D_NQ_NP_707714-MLA49841818983_052022-O.webp",
        alt: "TV Philco image 2",
      },
    ],
    categories: ["televisão"],
  },
  {
    name: `Smart TV LG AI ThinQ 50NANO75SPA LED 4K 50" 100V/240V`,
    price: "3028.90",
    amount: 5,
    description: `A LG é inovação e isso pode ser visto em cada um dos seus produtos tecnológicos, especialmente pensados ​​para que toda a família aproveite mais a vida. Ter uma televisão LG é tirar proveito da mais alta qualidade do mercado.
      Com Smart TV 50NANO75 você poderá acessar os aplicativos onde seu conteúdo favorito está localizado. Além disso, você pode navegar na web, interagir em redes sociais e se divertir com jogos de vídeo.
      
      Eu vivi em 4K
      O número de pixels que oferece é 4 vezes maior do que Full HD, o resultado? Cenas muito mais realistas com um nível incrível de detalhes. Agora você vai conhecer uma aventura imersiva que não deixará de surpreendê-lo.
      
      Um som que o rodeia
      Você sentirá que vem de todas as direções possíveis, o que enriquece a percepção disso. O diálogo de sua série de fim de semana ou a música de seus cantores favoritos assumirá um significado diferente.
      
      Além de assistir TV
      Sua função Screen Share permite duplicar a tela do seu smartphone, tablet ou PC para aparecer na sua TV. Desta forma, você poderá visualizar todo tipo de conteúdo: material audiovisual, documentos de trabalho, e-mails e muito mais.`,
    images: [
      {
        src: "https://http2.mlstatic.com/D_NQ_NP_678936-MLA47631790010_092021-O.webp",
        alt: "Smart TV LG image 1",
      },
      {
        src: "https://http2.mlstatic.com/D_NQ_NP_737407-MLA47631790012_092021-O.webp",
        alt: "Smart TV LG image 2",
      },
    ],
    categories: ["televisão"],
  },
];

export default function MainPage() {
  const num = 1;

  return (
    <MainPageContainer>
      <PageTop>
        <Header />
        <NavBar>
          <IoMenuOutline className="nav-icon" />
          <SearchField>
            <input type="text" placeholder="Buscar produto" />
            <IoSearchSharp className="search-icon" />
          </SearchField>
          <IoCartOutline className="nav-icon" />
        </NavBar>
      </PageTop>
      <h2>Olá, User</h2>
      <h1>Do que você precisa hoje?</h1>
      <ProductsContainer>
        <NavProducts num={num}>
          <p>Todos</p>
          <p>Notebooks</p>
          <p>Televisões</p>
          <p>Celulares</p>
        </NavProducts>
        <ProductsCardsContainer>
          {products?.length > 0 ? (
            products.map((prod) => (
              <ProductCard
                title={prod.name}
                price={prod.price}
                image={prod.images[0]}
                id={prod._id}
              />
            ))
          ) : (
            <h5>Não há produtos</h5>
          )}
        </ProductsCardsContainer>
      </ProductsContainer>
    </MainPageContainer>
  );
}

const MainPageContainer = styled.div`
  width: 100%;

  h1 {
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
    margin-left: 25px;
    margin-bottom: 40px;
  }

  h2 {
    margin-top: 150px;
    font-size: 16px;
    line-height: 20px;
    margin-left: 25px;
  }
`;

const PageTop = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const NavBar = styled.nav`
  margin-top: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;

  .nav-icon {
    font-size: 24px;
    color: var(--black);
  }
`;

const SearchField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  position: relative;
  top: 0;
  left: 0;

  input {
    height: 34px;
    width: 225px;
    padding-left: 45px;
    border: 1px solid var(--grey);
    border-radius: 10px;
  }

  .search-icon {
    font-size: 20px;
    position: absolute;
    left: 12px;
    color: var(--grey);
  }
`;

const ProductsContainer = styled.div`
  width: 100%;
  background-color: var(--light-gray);
  border-radius: 20px 20px 0 0;
`;

const NavProducts = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-left: 25px;
  margin-bottom: 20px;
  padding-top: 30px;
  overflow-x: auto;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 25px;
    margin-right: 25px;
    font-size: 14px;
    line-height: 20px;
    border-radius: 30px;
    letter-spacing: 0.2px;
    padding: 15px;
  }

  p:nth-child(${(props) => props.num}) {
    background-color: var(--blue);
    color: #fff;
  }
`;

const ProductsCardsContainer = styled.div`
  width: 100%;
  padding: 0 25px 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
`;
