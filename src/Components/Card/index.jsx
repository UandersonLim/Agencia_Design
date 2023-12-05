import './style.css';

const Card = (props) => {
  return (
    <div className="Card">
      <section className={props.changerColor}>
        <time>JUNHO 2012 - 2016</time>
        <h4>Web Designer</h4>
        <label>Pied Piper StartUp.</label>
        <p>
          Criação de Landing pages, sites institucionais e E-commerces
          completamente personalizados e otimizados para buscadores
        </p>
      </section>
      <section className={props.changerColor}>
        <time>AGOSTO 2016 - 2019</time>
        <h4>Product Designer</h4>
        <label>E Corp.</label>
        <p>
          Criação de modelos estratégicos de conversão identificando o cliente e
          mapeando toda a sua jornada de compra
        </p>
      </section>
      <section className={props.changerColor}>
        <time>FEVEREIRO 2019 - 2021</time>
        <h4>Digital Consulting</h4>
        <label>Arasaka Inc.</label>
        <p>
          Consultoria em estratégias digitais para todas as etapas do ciclo do
          projeto, desde a definição inicial até a execução
        </p>
      </section>
    </div>
  );
};

export default Card;
