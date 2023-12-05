import "./style.css";
import Card from "../Card";

export const Work_experience = (props) => {
  
  const Theme = props.eventType;

  const togglerTheme = (theme) => {
    theme = Theme === "Dark" ? "Contain" : null;
    return theme;
  };

  return (
    <main className={togglerTheme(Theme)}>
      <div className="Work_Experience">
        <h3 className={Theme === "Dark" ? "text" : null}>
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
      <Card changerColor={togglerTheme(Theme)}/>
    </main>
  );
};
