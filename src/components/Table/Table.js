import React from "react";
import { useContext } from "react";
import DataGrid from "react-data-grid";
import { useAuth } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";

const Table = () => {
  const columns = [
    { key: "id", name: "ID" },
    { key: "name", name: "NOMBRE" },
    { key: "surname", name: "APELLIDO" },
    { key: "category", name: "CATEGORIA" },
    { key: "ranking", name: "CLASIFICACIÓN" },
  ];

  const { contextTheme } = useContext(ThemeContext);
  
  const {loading} = useAuth();

  const rows = [
    { id: 0, name: "Luciano", surname: "Solari", category: "Junior", ranking: "10" },
    { id: 1, name: "Santiago", category: "Pro", ranking: "1" },
    { id: 2, name: "Manuel", category: "Junior", ranking: "158" },
    { id: 3, name: "Matias", category: "Junior", ranking: "81" },
  ];

  if (loading) return <h1>Cargando página principal...</h1>

  return (
    <section id={contextTheme}>
      <div className="container vh-100">
        <div>
          <DataGrid columns={columns} rows={rows} />
        </div>
      </div>
    </section>
  );
};

export default Table;
