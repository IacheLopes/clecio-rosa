import { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    q: 'Quem tem direito ao Minha Casa Minha Vida?',
    a: 'Famílias com renda bruta de até R$13.000/mês podem participar do programa, organizadas em faixas. Cada faixa tem condições específicas de subsídio e taxa de juros. Faço uma análise gratuita do seu perfil para identificar exatamente qual é a sua situação e as melhores oportunidades disponíveis.',
  },
  {
    q: 'Preciso ter dinheiro para dar entrada?',
    a: 'Não necessariamente. Dependendo da sua faixa de renda, o subsídio do governo pode cobrir parte ou toda a entrada. Além disso, é possível usar o FGTS para complementar. Em muitos casos, o valor das parcelas é igual ou inferior ao que você paga de aluguel hoje.',
  },
  {
    q: 'Posso usar meu FGTS na compra?',
    a: 'Sim! O FGTS pode ser utilizado de três formas: para pagar parte da entrada, para amortizar o saldo devedor ou para reduzir o valor das parcelas mensais. É uma das maiores vantagens do Minha Casa Minha Vida — e eu te ajudo a aproveitar esse benefício ao máximo.',
  },
  {
    q: 'Minha renda é informal. Ainda consigo financiar?',
    a: 'Sim. Autônomos, MEIs e trabalhadores informais podem participar do MCMV comprovando renda por meio de extratos bancários dos últimos meses, declaração de imposto de renda ou outros documentos aceitos pelos bancos. Cuido de todo esse processo para deixá-lo simples para você.',
  },
  {
    q: 'Quanto tempo leva até eu ter as chaves?',
    a: 'A depender do empreendimento, você já consegue receber as chaves entre 15 e 30 dias. Para outros casos, o prazo pode variar conforme a construtora e a aprovação do financiamento. Acompanho cada etapa do processo e garanto que tudo avance com a máxima agilidade possível.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="faq">
      <div className="faq__container">
        <div className="faq__header">
          <span className="faq__label">Dúvidas frequentes</span>
          <h2 className="faq__title">Perguntas que todo mundo faz</h2>
          <p className="faq__subtitle">
            Tire suas dúvidas sobre o Minha Casa Minha Vida antes de dar o primeiro passo.
          </p>
        </div>

        <div className="faq__list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${open === i ? ' faq-item--open' : ''}`}>
              <button
                className="faq-item__trigger"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <span className="faq-item__chevron" aria-hidden="true">
                  <ChevronIcon />
                </span>
              </button>
              <div className="faq-item__body">
                <div className="faq-item__body-inner">
                  <p className="faq-item__answer">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="faq__footer">
          <p>Ainda tem dúvidas?</p>
          <a
            href={'https://wa.me/5583998642873?text=' + encodeURIComponent('Olá Clécio! Tenho uma dúvida sobre o Minha Casa Minha Vida.')}
            target="_blank"
            rel="noopener noreferrer"
            className="faq__footer-link"
          >
            Pergunte direto no WhatsApp
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default FAQ;
