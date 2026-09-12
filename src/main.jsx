import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="app">
      <header className="wrap nav">
        <a className="logo" href="#top">BEATRIZ<span>.</span>WEB STUDIO</a>
        <nav className="navlinks">
          <a href="#servicos">Serviços</a><a href="#processo">Processo</a><a href="#planos">Planos</a>
        </nav>
        <a className="navcta" href="#contato">Quero meu site</a>
      </header>
      <main id="top">
        <section className="wrap hero">
          <div>
            <div className="eyebrow">✦ Web design sem complicação</div>
            <h1>Seu negócio merece um site <em>à altura.</em></h1>
            <p>Sites profissionais, landing pages e experiências digitais pensadas para deixar sua marca mais bonita, confiável e pronta para vender.</p>
            <div className="actions"><a className="btn primary" href="#contato">Vamos criar juntos →</a><a className="btn secondary" href="#servicos">Conhecer serviços</a></div>
            <div className="stats"><div><strong>100%</strong><small>personalizado</small></div><div><strong>+1</strong><small>site por projeto</small></div><div><strong>♥</strong><small>feito com cuidado</small></div></div>
          </div>
          <div className="browser"><div className="browserbar"><i/><i/><i/></div><div className="screen"><b>sua marca<span>.</span></b><div className="fakehero"><h2>Feito para <span>chamar atenção.</span></h2><p>Um exemplo de como sua marca pode ocupar seu próprio espaço na internet.</p><a className="fakebutton" href="#contato">Conheça</a></div><div className="shapes"><div/><div/><div/></div></div></div>
        </section>
        <section id="servicos" className="wrap"><div className="sectionhead"><h2>O que eu posso<br/>criar para você.</h2><p>Não é só colocar sua empresa na internet. É criar uma presença digital que tenha a cara do seu negócio.</p></div><div className="cards"><article><div className="icon">✦</div><h3>Sites profissionais</h3><p>Sites completos, responsivos e pensados para apresentar sua empresa com credibilidade.</p></article><article><div className="icon">↗</div><h3>Landing pages</h3><p>Páginas objetivas para divulgar um serviço, produto ou campanha e gerar contatos.</p></article><article><div className="icon">♥</div><h3>Presença digital</h3><p>Estrutura visual consistente para você parecer profissional em cada ponto de contato.</p></article></div></section>
        <section id="processo" className="dark"><div className="wrap"><div className="sectionhead"><h2>Do primeiro papo<br/>ao site no ar.</h2><p>Um processo simples, próximo e sem aquele monte de palavrão técnico que ninguém precisa entender.</p></div><div className="steps">{[['01','Conversa','Entendo seu negócio, seus objetivos e o que você precisa.'],['02','Criação','Transformo as ideias em uma identidade visual e estrutura.'],['03','Ajustes','Você vê, opina e refinamos juntos até ficar com a sua cara.'],['04','Publicação','Colocamos tudo no ar e você começa a divulgar.']].map(([n,t,d])=><div className="step" key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>
        <section id="planos" className="wrap"><div className="sectionhead"><h2>Comece pelo<br/>que faz sentido.</h2><p>Valores claros para projetos enxutos. Projetos maiores recebem uma proposta personalizada.</p></div><div className="pricing"><article className="price"><span>ESSENCIAL</span><h3>Landing Page</h3><div className="value">R$ 300</div><ul><li>Layout personalizado</li><li>Design responsivo</li><li>Botões de contato</li><li>Orientação para publicação</li></ul></article><article className="price featured"><span>MAIS COMPLETO</span><h3>Site Profissional</h3><div className="value">Sob consulta</div><ul><li>Estrutura personalizada</li><li>Design responsivo</li><li>Seções estratégicas</li><li>Formulários e contatos</li></ul></article></div></section>
        <section id="contato" className="wrap"><div className="contact"><div><h2>Tem uma ideia?<br/>Eu quero ver.</h2><p>Me conta o que você tem em mente. A gente transforma sua ideia em um site bonito, profissional e com personalidade.</p></div><a className="btn" href="mailto:contato@beatrizwebstudio.com">Falar sobre meu projeto →</a></div></section>
      </main>
      <footer className="wrap footer"><strong>© 2026 Beatriz Web Studio</strong><span>Sites com personalidade.</span></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
