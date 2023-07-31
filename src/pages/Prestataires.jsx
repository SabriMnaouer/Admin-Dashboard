import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter, Search } from '@syncfusion/ej2-react-grids';

import { PrestatairesData, PrestatairesGrid } from '../data/dummy';
import { Header } from '../components';

const Prestataires = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete', 'Search', 'Edit', 'Update', 'Cancel', 'Add'];
  const editing = { allowDeleting: true, allowEditing: true, allowAdding: true, allowSorting: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Prestataires" />
      <GridComponent
        dataSource={PrestatairesData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {PrestatairesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter, Search]} />
      </GridComponent>
    </div>
  );
};

export default Prestataires;
