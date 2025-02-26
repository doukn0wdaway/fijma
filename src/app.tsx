import "./app.css";

export function App() {
  return (
    <div className="flex gap-8 flex-col">
      <h1>Вы уверены шо таки туда попали?</h1>
      <iframe
        src="https://www.youtube.com/embed/FKrZKOlN7QE?si=NUv-nsIOnKMa5ygS"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="h-[600px] w-auto aspect-video"
      ></iframe>

      <div className="flex flex-col ">
        <p>
          можете посмотреть на наш аналог <a>фижмы</a>
        </p>
        <a>оригинальная</a>
      </div>
    </div>
  );
}
