import  './AboutProject.css'

export function AboutProject() {
  return(
    <section className="project">
      <h2 className="project__header">О проекте</h2>
      <hr className="project__border"></hr>
      <div className="project__content">
        <div className="project__content-column">
          <h3 className="project__content-title">Дипломный проект включал 5 этапов</h3>
          <p className="project__content-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="project__content-column">
          <h3 className="project__content-title">На выполнение диплома ушло 5 недель</h3>
          <p className="project__content-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="project__table">
        <div className="project__table-block project__table-block_color_white project__table-block_bck_black">1 неделя</div>
        <div className="project__table-block project__table-block_color_black project__table-block_bck_white">4 недели</div>
        <p className="project__table-text">Back-end</p>
        <p className="project__table-text">Front-end</p>
      </div>
    </section>
  )
}