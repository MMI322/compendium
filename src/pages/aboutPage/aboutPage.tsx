import "./style.css";

export const AboutPage = () => {
  return (
    <div className="about-page__container">
      <div className="about-page__content">
        <div style={{fontSize: "20px"}}>Информация о проекте</div>
        <div>
          Данный проект создан для упрощения работы студентов и преподавателей,
          а также для повышения эффективности преподавания предметов, связанных
          с трехкомпонентными сплавами.
        </div>
        <div>
          Проект разработан студентами-магистрами РТУ МИРЭА, кафедры
          компьютерного дизайна.
        </div>
      </div>
    </div>
  );
};
