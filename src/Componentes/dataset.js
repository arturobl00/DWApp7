import React from "react";
import DataTable from "react-data-table-component";

const MiDataSet = () => {
    const tablaDatos = [
        {id:1, año:"2000", campeon:"Real Madrid CF", subcampeon:"Valencia CF"},
        {id:2, año:"2001", campeon:"FC Bayer Munich", subcampeon:"Valencia CF"},
        {id:3, año:"2002", campeon:"Real Madrid CF", subcampeon:"Bayer 04 Leverkusen"},
        {id:4, año:"2003", campeon:"Milan AC", subcampeon:"Juventus FC"},
        {id:5, año:"2004", campeon:"FC Porto", subcampeon:"AS Monaco"},
        {id:6, año:"2005", campeon:"Liverpool FC", subcampeon:"AC Milan"},
        {id:7, año:"2006", campeon:"FC Barcelona", subcampeon:"Arcenal FC"},
        {id:8, año:"2007", campeon:"FC Internazionale", subcampeon:"Liverpool FC"},
        {id:9, año:"2008", campeon:"FC Barcelona", subcampeon:"Chelsea FC"},
        {id:10, año:"2009", campeon:"Chelsea FC", subcampeon:"Manchester United FC"},
        {id:11, año:"2010", campeon:"FC Bayer Munich", subcampeon:"BV Borussia Dortmund"}
      ];
      
      const columnas = [
        {
          name: 'ID',
          selector: 'id',
          sortable: true  
        },
        {
          name: 'AÑO',
          selector: 'año',
          sortable: true  
        },
        {
          name: 'CAMPEON',
          selector: 'campeon',
          sortable: true  
        },
        {
          name: 'SUBCAMPEON',
          selector: 'subcampeon',
          sortable: true  
        },
      ];

    return ( 
        <div className="container">
            <h2>Ejemplo 2 Tabla con DataSet</h2>
            <DataTable columns={columnas} data={tablaDatos} title="Campeones UCL 2000 - 2010" pagination/>
      </div>
     );
}

export default MiDataSet;