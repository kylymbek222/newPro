import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import CustomNoRowsOverlay from "./NoRowsOverlay";
import LinearProgress from "@mui/material/LinearProgress";

const CustomDataGrid = ({ rows, columns, pageSize, setPageSize }) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      checkboxSelection
      disableSelectionOnClick
      localeText={{
        toolbarColumns: "Столбцы",
        toolbarDensity: "Плотность",
        toolbarExport: "Экспорт",
        toolbarFilters: "Фильтр",
        toolbarDensityStandard: "Стандарт",
        toolbarDensityCompact: "Компакт",
        toolbarDensityComfortable: "Комфорт",
        toolbarExportPrint: "Печать",
        toolbarExportCSV: "Сохранить в формате CSV",
      }}
      components={{
        Toolbar: GridToolbar,
        NoRowsOverlay: CustomNoRowsOverlay,
      }}
      componentsProps={{
        toolbar: { printOptions: { hideToolbar: true, hideFooter: true } },
      }}
      pagination
    ></DataGrid>
  );
};

export default CustomDataGrid;
