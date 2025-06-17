import ProductCard from './components/ProductCard';
import './App.css';

function App() {
  return (
      <ProductCard
        title="Кофе в зернах 'Эфиопия Иргачиф'"
        origin="Эфиопия"
        price={34900}
        currency="RUB"
        imageUrl="../public/assets/coffee.jpg"
      />
  );
}

export default App;