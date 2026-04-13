import './Hero.css';
import joaoPessoaBg from '../../assets/joao-pessoa.jpg';
import clecioPhoto from '../../assets/clecio.jpeg';

const WA_URL = 'https://wa.me/5583998642873?text=' + encodeURIComponent(
  'Olá Clécio! Vim pelo site e quero saber mais sobre imóveis pelo Minha Casa Minha Vida em João Pessoa.'
);

const Hero = () => (
  <section id="inicio" className="hero">
    <div className="hero__bg" aria-hidden="true">
      <img src={joaoPessoaBg} alt="" className="hero__bg-img" />
      <div className="hero__overlay" />
    </div>

    <div className="hero__inner">
      {/* Text column */}
      <div className="hero__text">
        <div className="hero__eyebrow">
          <span className="hero__eyebrow-dot" />
          CRECI 18724-F &nbsp;·&nbsp; Especialista Minha Casa Minha Vida
        </div>

        <h1 className="hero__h1">
          Do aluguel para{' '}
          <span className="hero__h1-accent">a casa própria.</span>
          <br />
          Eu cuido de tudo.
        </h1>

        <p className="hero__subtitle">
          Sou Clécio Rosa, corretor especialista em Minha Casa Minha Vida em
          João Pessoa. Análise de perfil gratuita — cuido de toda a burocracia,
          do início ao fim, para você realizar esse sonho com segurança.
        </p>

        <div className="hero__actions">
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="hero__btn hero__btn--gold">
            <WppIcon />
            Quero minha casa própria
          </a>
          <a href="#como-funciona" className="hero__btn hero__btn--ghost">
            Como funciona?
          </a>
        </div>

        <div className="hero__tags">
          {['Minha Casa Minha Vida', 'FGTS Aceito', 'Análise Gratuita'].map(tag => (
            <span key={tag} className="hero__tag">
              <CheckIcon />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Photo column */}
      <div className="hero__photo-col">
        <div className="hero__photo-wrap">
          <img
            src={clecioPhoto}
            alt="Clécio Rosa — Corretor de Imóveis CRECI 18724-F"
            className="hero__photo"
          />
          <div className="hero__photo-card">
            <div className="hero__card-top">
              <div className="hero__card-name">Clécio Rosa</div>
              <div className="hero__card-role">Corretor · CRECI 18724-F</div>
            </div>
            <div className="hero__card-stats">
              <div className="hero__card-stat">
                <strong>200+</strong>
                <span>Famílias Atendidas</span>
              </div>
              <div className="hero__card-stat-sep" />
              <div className="hero__card-stat">
                <strong>João Pessoa</strong>
                <span>Especialista Local</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Stats bar */}
    <div className="hero__statsbar">
      <div className="hero__statsbar-item">
        <strong>200+</strong>
        <span>Famílias Realizadas</span>
      </div>
      <div className="hero__statsbar-sep" />
      <div className="hero__statsbar-item">
        <strong>CRECI 18724-F</strong>
        <span>Regularizado · Ativo</span>
      </div>
      <div className="hero__statsbar-sep" />
      <div className="hero__statsbar-item">
        <strong>João Pessoa · PB</strong>
        <span>Especialista Local</span>
      </div>
    </div>
  </section>
);

function WppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" width="12" height="12" aria-hidden="true">
      <polyline points="13 4 6 11 3 8" />
    </svg>
  );
}

export default Hero;
