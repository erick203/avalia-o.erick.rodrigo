import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Imobiliária Santos | Seu sonho começa aqui</title>
      </Head>

      {/* HEADER FIXO */}
      <header className="topo-container">
        <div className="topo-conteudo">
          <img src="/img/logo.png" alt="Imobiliária Santos" className="logo" />
          <nav className="menu">
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#corretores">Corretores</a>
            <a href="#contato" className="btn-contato-topo">Contato</a>
          </nav>
        </div>
      </header>

      {/* HERO / BANNER */}
      <section className="banner-container">
        <img src="/img/banner.png" alt="Banner Imobiliária" className="banner-img" />
        <div className="banner-overlay">
          <h1>Encontre o imóvel dos seus sonhos</h1>
          <p>A imobiliária que te ajuda a conquistar seu novo lar</p>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="secao">
        <div className="conteudo-central">
          <h2 className="titulo-secao">Sobre Nós</h2>
          <div className="sobre-flex">
            <img className="imagem-arredondada" src="/img/imovel-assinatura.jpg" alt="Assinatura" />
            <div className="sobre-texto">
              <p>
                Há <span className="destaque-azul">10 anos</span> no ramo, conquistamos a confiança de inúmeros clientes. 
                Procuramos sempre as melhores condições para quem quer comprar, vender ou alugar.
              </p>
              <p>Oferecemos um serviço de excelência, servindo como a ponte ideal para o seu sucesso imobiliário.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="secao bg-cinza">
        <div className="conteudo-central">
          <h2 className="titulo-secao">Nossos Serviços</h2>
          <div className="servicos-grid">
            <div className="servico-card"><h4>Venda</h4></div>
            <div className="servico-card"><h4>Aluguel</h4></div>
            <div className="servico-card"><h4>Financiamento</h4></div>
            <div className="servico-card"><h4>Parcerias</h4></div>
          </div>
        </div>
      </section>

      {/* CORRETORES */}
      <section id="corretores" className="secao">
        <div className="conteudo-central">
          <h2 className="titulo-secao">Time de Especialistas</h2>
          <img className="imagem-arredondada" src="/img/corretores.jpg" alt="Nossos Corretores" />
          <p className="paragrafo-final">
            Profissionais qualificados com anos de experiência no mercado. 
            <br />
            <a className="btn-azul" href="mailto:corretores@email.com">Falar com um corretor</a>
          </p>
        </div>
      </section>

      {/* CONTATO */}
      <footer id="contato" className="footer">
        <div className="conteudo-central">
          <h2>Contato</h2>
          <div className="mapa-wrapper">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.212727196236!2d-43.19253452468934!3d-22.90554657925501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f58a6a00a9d%3A0x3f11bc0237e3d647!2sCentro%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1700000000000" 
                width="100%" height="300" style={{ border: 0, borderRadius: '15px' }} allowFullScreen="" loading="lazy">
             </iframe>
          </div>
          <div className="contato-links">
            <a href="mailto:barra@email.com">Barra da Tijuca</a>
            <a href="mailto:centro@email.com">Centro / RJ</a>
            <a href="mailto:meier@email.com">Méier</a>
          </div>
        </div>
      </footer>
    </>
  );
}