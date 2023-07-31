/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page, Selection, Sort } from '@syncfusion/ej2-react-grids';

import { AnnonceursData, AnnonceursGrid } from '../data/dummy';
import { Header } from '../components';

const Annonceurs = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Search', 'Delete', 'Edit', 'Update', 'Cancel', 'Add'];

  const editing = { allowDeleting: true, allowEditing: true, allowAdding: true, allowSorting: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Annonceurs" />
      <GridComponent
        dataSource={AnnonceursData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {AnnonceursGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search, Page, Selection, Sort]} />

      </GridComponent>
    </div>
  );
};
export default Annonceurs;
