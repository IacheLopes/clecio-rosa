import './Features.css';

const WA_URL = 'https://wa.me/5583998642873?text=' + encodeURIComponent(
  'Olá Clécio! Vim pelo site e quero saber mais sobre o Minha Casa Minha Vida em João Pessoa.'
);

const steps = [
  {
    number: '01',
    icon: <ChatIcon />,
    title: 'Análise Gratuita',
    desc: 'Você me conta sua situação. Analiso seu perfil, renda e documentos para identificar a melhor oportunidade no Minha Casa Minha Vida para você.',
  },
  {
    number: '02',
    icon: <HomeIcon />,
    title: 'Imóvel Ideal',
    desc: 'Seleciono opções no programa que combinam com o seu perfil, localização desejada e faixa de renda. Você só visita o que realmente faz sentido.',
  },
  {
    number: '03',
    icon: <DocIcon />,
    title: 'Burocracia Zero',
    desc: 'Cuido de toda a documentação, aprovação do financiamento e acompanho junto ao banco. Você não precisa se preocupar com nada.',
  },
  {
    number: '04',
    icon: <KeyIcon />,
    title: 'Chaves na Mão',
    desc: 'Você realiza o sonho da casa própria com total segurança. Fico ao seu lado até a entrega das chaves — e mesmo depois.',
  },
];

const Features = () => (
  <section id="como-funciona" className="process">
    <div className="process__container">
      <div className="process__header">
        <span className="process__label">Como funciona</span>
        <h2 className="process__title">4 passos para a sua casa própria</h2>
        <p className="process__subtitle">
          Simples, seguro e sem burocracia. Você só precisa dar o primeiro passo.
        </p>
      </div>

      <div className="process__grid">
        {steps.map((step) => (
          <div key={step.number} className="process-card">
            <div className="process-card__top">
              <span className="process-card__num">{step.number}</span>
              <div className="process-card__icon">{step.icon}</div>
            </div>
            <h3 className="process-card__title">{step.title}</h3>
            <p className="process-card__desc">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="process__bottom">
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="process__cta">
          <WppIcon />
          Começar agora — é gratuito
        </a>
        <p className="process__cta-note">Sem compromisso. Análise em até 24h.</p>
      </div>
    </div>
  </section>
);

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24" aria-hidden="true">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24" aria-hidden="true">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24" aria-hidden="true">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  );
}

function WppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default Features;
