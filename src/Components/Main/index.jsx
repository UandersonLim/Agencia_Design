import "./style.css";

export const Work_experience = (props) => {
  return (
    <main className={props.eventType === "Dark" ? "Contain" : null}>
      <div className="Work_Experience">
        <h3 className={props.eventType === "Dark" ? "text" : null}>
          Experiências De Trabalho
        </h3>
        <div className="box_yellow_line">
          <div className="yellow_line"></div>
        </div>
        <p>
          Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
          Sites e Marketing Digital, nos empenhamos diariamente para entregar
          resultados que tragam impacto aos nossos clientes.
        </p>
      </div>
      <div className="Contain_Section">
        <section className={props.eventType === "Dark" ? "Contain" : null}>
          <time>JUNHO 2012 - 2016</time>
          <h4>Web Designer</h4>
          <label>Pied Piper StartUp.</label>
          <p>
            Criação de Landing pages, sites institucionais e E-commerces
            completamente personalizados e otimizados para buscadores
          </p>
        </section>
        <section className={props.eventType === "Dark" ? "Contain" : null}>
          <time>AGOSTO 2016 - 2019</time>
          <h4>Product Designer</h4>
          <label>E Corp.</label>
          <p>
            Criação de modelos estratégicos de conversão identificando o cliente
            e mapeando toda a sua jornada de compra
          </p>
        </section>
        <section className={props.eventType === "Dark" ? "Contain" : null}>
          <time>FEVEREIRO 2019 - 2021</time>
          <h4>Digital Consulting</h4>
          <label>Arasaka Inc.</label>
          <p>
            Consultoria em estratégias digitais para todas as etapas do ciclo do
            projeto, desde a definição inicial até a execução
          </p>
        </section>
      </div>
    </main>
  );
};
