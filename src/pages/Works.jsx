import "../works.css";

export default function Works() {
  return (
    <div className="works-parent">
      <h3>Click to go</h3>
      <div className="work-childs">
        <div className="work-item">
          <a
            href="https://imtiaz101325.github.io/hyf-c48-w2-browsers-quiz-app-coffee-break/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coffee Break have a quiz
          </a>
            <video src="/media/work4.mp4" autoPlay loop muted playsInline></video>
        </div>

        <div className="work-item">
          <a
            href="https://azizsigar.github.io/personal-recipe-project/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Recipe from the world
          </a>
          <video src="/media/work1.mp4" autoPlay loop muted playsInline></video>
        </div>

        <div className="work-item">
          <a
            href="https://azizsigar.github.io/randomquickmath/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Random Quick Math Game
          </a>
          <video src="/media/work3.mp4" autoPlay loop muted playsInline></video>
        </div>

        <div className="work-item">
          <a
            href="https://www.youtube.com/playlist?list=PLx1wRpHvwJABzF2BOSbtf8-fBJXQriqc0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Video Editing Projects
          </a>
<video src="/media/work2.mp4" autoPlay loop muted playsInline></video>
        </div>
      </div>
    </div>
  );
}
