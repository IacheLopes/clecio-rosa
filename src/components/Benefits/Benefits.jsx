import './Benefits.css';
import clecioPhoto from '../../assets/clecio.jpeg';

const WA_URL = 'https://wa.me/5583998642873?text=' + encodeURIComponent(
  'Olá Clécio! Vim pelo site e quero saber mais sobre o Minha Casa Minha Vida em João Pessoa.'
);

const differentials = [
  'CRECI 18724-F regularizado pelo COFECI',
  'Especialista em financiamento Minha Casa Minha Vida',
  'Parceiro de construtoras e bancos em João Pessoa',
  'Atendimento 100% personalizado e gratuito',
  'Aprovação de crédito para renda formal e informal',
  'Acompanhamento do início até a entrega das chaves',
];

const Benefits = () => (
  <section id="sobre" className="authority">
    <div className="authority__container">
      {/* Photo */}
      <div className="authority__photo-col">
        <div className="authority__photo-wrap">
          <img
            src={clecioPhoto}
            alt="Clécio Rosa — Corretor de Imóveis"
            className="authority__photo"
          />
          <div className="authority__creci-badge">
            <ShieldIcon />
            <span>CRECI 18724-F</span>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="authority__text">
        <span className="authority__label">Por que me escolher</span>
        <h2 className="authority__title">
          Você merece um corretor que realmente entende do que está fazendo
        </h2>
        <p className="authority__bio">
          Sou Clécio Rosa, corretor especialista no programa Minha Casa Minha
          Vida em João Pessoa. Meu trabalho é transformar o sonho da casa
          própria em realidade para famílias paraibanas — sem enrolação,
          sem surpresas e com toda a segurança que você merece.
        </p>

        <div className="authority__list">
          {differentials.map((item, i) => (
            <div key={i} className="authority__item">
              <div className="authority__item-check">
                <CheckIcon />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="authority__cta">
          <WppIcon />
          Falar com Clécio agora
        </a>
      </div>
    </div>
  </section>
);

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" width="13" height="13" aria-hidden="true">
      <polyline points="13 4 6 11 3 8" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
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

export default Benefits;
