import ProductCard from './components/ProductCard';
import './App.css';
import image from '../public/assets/coffee.jpg';

function App() {
  return (
      <ProductCard
        title="Кофе в зернах 'Эфиопия Иргачиф'"
        origin="Эфиопия"
        price={34900}
        currency="RUB"
        imageUrl={image}
      />
  );
}

export default App;