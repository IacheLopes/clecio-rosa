import './Footer.css';
import logo from '../../assets/logo.png';

const WA_URL = 'https://wa.me/5583998642873?text=' + encodeURIComponent(
  'Olá Clécio! Vim pelo site e quero saber mais sobre imóveis em João Pessoa.'
);

const Footer = () => (
  <footer className="footer">
    <div className="footer__inner">
      <div className="footer__brand">
        <a href="#inicio" className="footer__logo-link">
          <img src={logo} alt="Clécio Rosa Imóveis" className="footer__logo" />
        </a>
        <p className="footer__desc">
          Especialista em Minha Casa Minha Vida em João Pessoa — PB.
          Realizando o sonho da casa própria para famílias paraibanas.
        </p>
        <div className="footer__creci">
          <span className="footer__creci-dot" />
          CRECI 18724-F · Regularizado
        </div>
      </div>

      <div className="footer__links-col">
        <h4 className="footer__col-title">Navegação</h4>
        <nav className="footer__links">
          <a href="#inicio">Início</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#sobre">Sobre Clécio</a>
          <a href="#faq">Dúvidas</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>

      <div className="footer__contact-col">
        <h4 className="footer__col-title">Contato</h4>
        <div className="footer__contact-list">
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="footer__contact-item">
            <WppIcon />
            (83) 99864-2873
          </a>
          <div className="footer__contact-item">
            <LocationIcon />
            João Pessoa, Paraíba
          </div>
        </div>
        <div className="footer__hours">
          <span>Seg–Sex: 8h às 20h</span>
          <span>Sábado: 9h às 14h</span>
        </div>
      </div>
    </div>

    <div className="footer__bottom">
      <p className="footer__copy">
        © {new Date().getFullYear()} Clécio Rosa Imóveis. Todos os direitos reservados.
      </p>
      <p className="footer__legal">
        CRECI 18724-F · João Pessoa - PB
      </p>
    </div>
  </footer>
);

function WppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default Footer;
