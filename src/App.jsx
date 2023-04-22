import { useQuery } from '@tanstack/react-query'

import './App.css'

function App() {

  const url = 'https://64361a378205915d34ec0e89.mockapi.io/api/products';

  const { data } = useQuery({
    queryKey: ['product'],
    queryFn: () => fetch( url ).then( res => res.json() ),    
    refetchInterval:3000,    
    refetchIntervalInBackground: true
  })

     

 
  return (
    <div className="App">
     <h1>fake store</h1>
     <table>
       <thead>
         <tr>
           <th>Product</th>
           <th>Price</th>          
         </tr>   
       </thead>   
       <tbody>
         {
         data?.map( (product ,key) =>
         <tr key={key}>
             <td className='table-data'>{ product.name  }</td>            
             <td className='table-data'>${ product.price }</td>
         </tr>
         )
       }
       
       </tbody>
     </table>      
   </div>
  )
}

export default App
