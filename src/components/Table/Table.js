import React from "react";
import DataGrid from "react-data-grid";
import { useAuth } from "../../context/AuthContext";

const Table = () => {
  const columns = [
    { key: "id", name: "NUMERO NADADOR" },
    { key: "name", name: "NOMBRE" },
    { key: "category", name: "CATEGORIA" },
    { key: "ranking", name: "CLASIFICACIÓN" },
  ];
  
  const {loading} = useAuth();

  const rows = [
    { id: 0, name: "Lucho", category: "Junior", ranking: "10" },
    { id: 1, name: "Santiago", category: "Pro", ranking: "1" },
    { id: 2, name: "Manuel", category: "Junior", ranking: "158" },
    { id: 3, name: "Matias", category: "Junior", ranking: "-81" },
  ];

  if (loading) return <h1>Cargando página principal...</h1>

  return (
    <div>
      <DataGrid columns={columns} rows={rows} />
    </div>
  );
};

export default Table;
