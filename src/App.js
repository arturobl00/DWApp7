import React from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
//import Pdf from 'react-to-pdf';
import './App.css';
import MiDataSet from './Componentes/dataset';

//const ref = React.createRef();

function App() {
  return (
    <div>
      <div className="container mt-2">
        <h1>Proyecto React Exportar Datos</h1>
        <h2>Ejemplo Simple 1</h2>
        <hr/>
        <table className="table" id="tabletoxls">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Firs</th>
              <th scope="col">Last</th>
              <th scope="col">Handke</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@nd0</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Aice</td>
              <td>Alidd</td>
              <td>@ald</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Jacob</td>
              <td>Larry</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Larry</td>
              <td>he Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Denny</td>
              <td>Den</td>
              <td>@dkl</td>
            </tr>
          </tbody>
        </table>

        <table>
          <tr>
            <td><h2>Excel</h2></td>
            <td><h2>PDF</h2></td>
          </tr>
          <tr>
            <td>
              <ReactHTMLTableToExcel
                      id="table1"
                      className="btn btn-success"
                      table="tabletoxls"
                      filename="reactApp7"
                      sheet="miTablaDatos"
                      buttonText="Download as XLS"/>
            </td>
            <td><button className="btn btn-danger">PDF</button></td>
          </tr>
        </table>
      </div>
      <hr/>
      <MiDataSet />
    </div>
  );
}

export default App;
