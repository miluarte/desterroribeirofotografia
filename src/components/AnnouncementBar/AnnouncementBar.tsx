import "./AnnouncementBar.css";

const REPEAT = 8;

function Item() {
  return (
    <span className="announcement-bar__item">
      AGENDA DE AGOSTO ABERTA:&nbsp;
      <strong>ÚLTIMAS VAGAS</strong>
      <span className="announcement-bar__sep" aria-hidden="true">&nbsp;&nbsp;·&nbsp;&nbsp;</span>
    </span>
  );
}

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar" aria-label="AGENDA DE AGOSTO ABERTA: ÚLTIMAS VAGAS">
      <div className="announcement-bar__track" aria-hidden="true">
        {Array.from({ length: REPEAT }).map((_, i) => (
          <Item key={i} />
        ))}
      </div>
    </div>
  );
}
