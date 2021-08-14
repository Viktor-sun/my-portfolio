import Background from './components/Background';
import Header from './components/Header';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Background>
        <Header />
        <span style={{ fontSize: '60px' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
          tempora repellat repudiandae, reprehenderit cupiditate, id explicabo
          corrupti hic, at iusto fugit assumenda sit esse laudantium.
          Repellendus debitis rerum deleniti sunt soluta impedit possimus odio,
          quis hic beatae. Minima quod assumenda fuga architecto optio, cumque,
          ratione qui vel modi aut fugiat animi tenetur aperiam, amet dolores!
          Porro consectetur quasi fugiat accusamus incidunt, inventore,
          voluptatem quas eius consequatur adipisci deserunt maxime illum neque
          dolores praesentium ab! Harum inventore tempora iusto molestiae
          officiis maxime, eum nihil nisi fugit cupiditate quisquam voluptas
          ipsam ut in, quis deserunt reprehenderit soluta facilis nesciunt
          corrupti. Ea, reprehenderit!
        </span>
      </Background>
    </div>
  );
}
