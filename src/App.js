import Directory from './components/directory/directory';

const App = () => {

  const categories = [
    {
      id:1,
      title: 'Garden Plants',
      imageUrl: 'https://images.unsplash.com/photo-1597201278257-3687be27d954?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      id:2,
      title: 'Flowering House Plants',
      imageUrl: 'https://images.unsplash.com/photo-1525247862234-30193931fdf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80'
    },
    {
      id:3,
      title: 'Foliage Plants',
      imageUrl: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=891&q=80'
    },
    {
      id:4,
      title: 'Garden Herbs',
      imageUrl: 'https://images.unsplash.com/photo-1582012107971-5aae799a70f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      id:5,
      title: 'Vegetables',
      imageUrl: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
    }
  ]

  return (
     <Directory categories={ categories }/>
  )   
}

export default App;
