export default function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="strekoza">{"{ strekoza }"}</div>
        
        <div className="roles">
          <span>{"{ graphic-designer }"}</span>
          <span>{"{ web-designer }"}</span>
        </div>
      </div>
      
      {/* Добавленное изображение */}
      <div className="portfolio-image">
        <img 
          src={require('../assets/image/strekoza_1.png')} 
          alt="strekoza" 
        />
      </div>
    </div>
  );
}