import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ElContext} from '../Contexto/ElContexto';
import {useContext} from 'react';


const Lista = () => {
  const {wishList, eliminar} = useContext(ElContext);
  return ( 
    <div className="Lista">
      <h4 style={{marginBottom:'5vmin' }}>Lista de deseos</h4>
      {
        wishList.length===0   
        ? 
        <p>No tienes deseos agregados</p>
        :
        <Table>
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Titulo</th>
              <th>Idioma</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {
            wishList.map((a,b)=>{      
            return(<tr key={b}>
              <td>{a.codigo}</td>
              <td>{a.titulo}</td>
              <td>{a.idioma}</td>
              <td>{<Button variant="dark" onClick={()=>eliminar(a)}>Cumplido</Button>}</td>
            </tr>)
            })
          }
          </tbody>
        </Table>
      }
    </div>
  );
}
 
export default Lista;