import './App.css'
import heroImage from './assets/atleta_pngg.png'
import productUniformes from './assets/631669572_17958948093048731_4145554032629558268_n.jpg'
import productCamisetas from './assets/622873817_17957635086048731_3258676304482113367_n.jpg'
import productLogo from './assets/WhatsApp Image 2026-01-18 at 20.51.08.jpeg'
import "@fortawesome/fontawesome-free/css/all.min.css";
import type { JSX } from 'react'
import React, { useState } from 'react';
import axios from 'axios';

const whatsappLink =
  'https://wa.me/5551998688767?text=Quero%20um%20orcamento%20para%20uniformes%20personalizados%20GRYN%20Sports.'

type CardItem = {
  title: string
  description: string
  icon: JSX.Element
}

const benefitItems: CardItem[] = [
  {
    title: 'Personalizacao total',
    description: 'Cores, escudos, nomes e detalhes sob medida para a sua identidade.',
    icon: <i className="fas fa-paint-brush"></i>,
  },
  {
    title: 'Entrega agil',
    description: 'Processo rapido do layout a entrega, com comunicacao direta.',
    icon: <i className="fas fa-shipping-fast"></i>,
  },
  {
    title: 'Alta durabilidade',
    description: 'Costura reforcada e impressao de alta resistencia.',
    icon: <i className="fas fa-tools"></i>,
  },
  {
    title: 'Tecido Dry Fit',
    description: '100% poliester com respirabilidade profissional.',
    icon: <i className="fas fa-tshirt"></i>,
  },
  {
    title: 'Para times e empresas',
    description: 'Produzimos para clubes, escolas, eventos e equipes corporativas.',
    icon: <i className="fas fa-users"></i>,
  },
]

const audienceItems = [
  'Times de futebol',
  'Empresas e equipes comerciais',
  'Eventos esportivos',
  'Escolas e universidades',
  'Torcidas organizadas',
]

const productItems = [
  {
    title: 'Uniformes esportivos',
    image: productUniformes,
    alt: 'Uniforme esportivo personalizado GRYN Sports',
  },
  {
    title: 'Uniformes corporativos',
    image: productCamisetas,
    alt: 'Uniforme corporativo personalizado GRYN Sports',
  },
  {
    title: 'Faixas e paineis',
    image: productLogo,
    alt: 'Faixas e paineis personalizados GRYN Sports',
  },
  {
    title: 'Wind banners',
    image: productUniformes,
    alt: 'Wind banner personalizado GRYN Sports',
  },
  {
    title: 'Bandeiras personalizadas',
    image: productCamisetas,
    alt: 'Bandeira personalizada GRYN Sports',
  },
]

const processItems = [
  'Voce envia sua ideia',
  'Criamos o layout',
  'Produzimos com qualidade premium',
  'Entregamos com rapidez',
]

const testimonials = [
  {
    name: 'Rafael Alves',
    role: 'Coordenador de equipe',
    text: 'A GRYN entregou um uniforme impecavel e a equipe ficou impressionada.',
  },
  {
    name: 'Fernanda Costa',
    role: 'Marketing esportivo',
    text: 'Processo rapido, comunicacao clara e acabamento premium.',
  },
]

function App() {
  const [emailData, setEmailData] = useState({ name: '', email: '', subject: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEmailData({ ...emailData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        to: emailData.email, // Map 'email' to 'to'
        name: emailData.name, // Map 'name' to 'name'
        subject: emailData.subject,
        text: emailData.message, // Map 'message' to 'text'
      };
      const response = await axios.post('http://localhost:5000/send-email', payload);
      setResponseMessage(response.data.message);
    } catch (error) {
      setResponseMessage('Failed to send email. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="page">
      <header className="navbar">
        <div className="container nav-content">
          <div className="brand">
            <img src={productLogo} alt="GRYN Sports Logo" />
          </div>
          <nav className="nav-links">
            <a href="#beneficios">Beneficios</a>
            <a href="#publico">Para quem</a>
            <a href="#produtos">Produtos</a>
            <a href="#processo">Processo</a>
          </nav>
          <a className="btn btn-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="topo">
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="eyebrow">Uniformes personalizados premium</span>
              <h1>Uniformes personalizados que destacam sua marca dentro e fora de campo.</h1>
              <p>
                Produzimos uniformes esportivos e corporativos com personalizacao completa,
                tecido Dry Fit profissional e entrega agil para quem quer liderar com atitude.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#cta-final">
                  Solicitar orcamento
                </a>
                <a className="btn btn-ghost" href={whatsappLink} target="_blank" rel="noreferrer">
                  Falar no WhatsApp
                </a>
              </div>
              <div className="hero-badges">
                <div>
                  <strong>100% Poliester Dry Fit</strong>
                  <span>Respirabilidade profissional</span>
                </div>
                <div>
                  <strong>Entrega agil</strong>
                  <span>Do layout a producao sem atrasos</span>
                </div>
              </div>
            </div>
            <div className="hero-media">
              <div className="hero-glow" aria-hidden="true" />
              <img src={heroImage} alt="Atleta com uniforme personalizado GRYN Sports" />
              <div className="hero-card">
                <span>+1200 uniformes produzidos</span>
                <strong>Mais de 180 clientes atendidos</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="beneficios">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Beneficios que geram resultado</span>
              <h2>Performance, estilo e consistencia em cada entrega.</h2>
              <p>
                Criamos uniformes que elevam a presenca da sua marca com materiais premium e
                atencao aos detalhes que fazem a diferenca.
              </p>
            </div>
            <div className="card-grid">
              {benefitItems.map((item) => (
                <article className="card" key={item.title}>
                  <div className="icon" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" id="publico">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Para quem e</span>
              <h2>Projetado para equipes que querem ser lembradas.</h2>
              <p>
                Do campo a sala de reuniao, sua identidade visual se torna um ativo de marca.
              </p>
            </div>
            <div className="audience-grid">
              {audienceItems.map((item) => (
                <div className="audience-card" key={item}>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="produtos">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Produtos GRYN Sports</span>
              <h2>Um portifolio completo para vestir e promover sua marca.</h2>
              <p>Escolha o modelo ideal e fale agora com nosso time.</p>
            </div>
            <div className="product-grid">
              {productItems.map((product) => (
                <article className="product-card" key={product.title}>
                  <div className="product-image">
                    <img src={product.image} alt={product.alt} loading="lazy" />
                  </div>
                  <h3>{product.title}</h3>
                  <a className="btn btn-outline" href={whatsappLink} target="_blank" rel="noreferrer">
                    Quero esse modelo
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" id="prova-social">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Prova social</span>
              <h2>Marcas e equipes que confiam na GRYN Sports.</h2>
            </div>
            <div className="stats-grid">
              <div className="stat-card">
                <strong>+1200</strong>
                <span>uniformes produzidos</span>
              </div>
              <div className="stat-card">
                <strong>+180</strong>
                <span>clientes atendidos</span>
              </div>
              <div className="stat-card">
                <strong>98%</strong>
                <span>recompras e indicacoes</span>
              </div>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <article className="testimonial" key={item.name}>
                  <p>"{item.text}"</p>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </article>
              ))}
            </div>
            <div className="logo-row" aria-label="Logos de clientes">
              <span>Logo Cliente</span>
              <span>Logo Cliente</span>
              <span>Logo Cliente</span>
              <span>Logo Cliente</span>
            </div>
          </div>
        </section>

        <section className="section" id="processo">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Processo simplificado</span>
              <h2>Da ideia ao uniforme pronto em poucos passos.</h2>
            </div>
            <div className="process-grid">
              {processItems.map((step, index) => (
                <div className="process-card" key={step}>
                  <span className="step">0{index + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta" id="cta-final">
          <div className="container cta-grid">
            <div>
              <span className="eyebrow">Transforme sua presenca</span>
              <h2>Seu time merece mais do que um uniforme comum.</h2>
              <p>
                Fale com a GRYN Sports agora e receba um atendimento rapido para criar o uniforme
                ideal. Atendimento via WhatsApp e Instagram.
              </p>
              <div className="cta-actions">
                <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
                  Solicitar orcamento agora
                </a>
                <a className="btn btn-ghost" href="https://instagram.com/grynsports" target="_blank" rel="noreferrer">
                  @grynsports
                </a>
              </div>
            </div>
            <form className="lead-form" onSubmit={handleSubmit}>
              <h3>Pré-orcamento rápido</h3>
              <p>Faça um pré orçamento via e-mail</p>
              <label>
                Nome
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  value={emailData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="voce@email.com"
                  value={emailData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Segmento
                <input
                  type="text"
                  name="subject"
                  placeholder="Time, empresa ou evento"
                  value={emailData.subject}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Mensagem
                <textarea
                  name="message"
                  placeholder="Digite sua mensagem"
                  value={emailData.message}
                  onChange={handleChange}
                  required
                />
              </label>
              {responseMessage && (
                <p className="response-message">{responseMessage}</p>
              )}
              <button className="btn btn-outline" type="submit">
                Enviar solicitação
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="brand">
              <span className="brand-mark">GRYN</span>
              <span className="brand-sub">Sports</span>
            </div>
            <p>Uniformes esportivos e corporativos personalizados com entrega agil.</p>
          </div>
          <div>
            <strong>Contato</strong>
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              WhatsApp: +55 51 99868-8767
            </a>
            <a href="https://instagram.com/grynsports" target="_blank" rel="noreferrer">
              Instagram: @grynsports
            </a>
          </div>
          <div>
            <strong>Institucional</strong>
            <a href="#">Termos</a>
            <a href="#">Privacidade</a>
          </div>
        </div>
        <div className="footer-bottom">© 2026 GRYN Sports. Todos os direitos reservados.</div>
      </footer>
    </div>
  )
}

export default App
