import { Card, CardVariant } from './components/Card';

const App = () => {
  return (
    <>
      <Card onClick={(num: number) => console.log('click', num)} variant={CardVariant.primary} width='200px' height='200px'>
            <button>Click</button>
      </Card>   
    </>
  )
}

export default App;