import React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Filter, Page, Inject } from '@syncfusion/ej2-react-grids';
import { MissionData, MissionGrid } from '../data/dummy';
import { SampleBase } from '../contexts/sample-base';
import { Header } from '../components';

export class Mission extends SampleBase {
  MissionGrid;
  filterType = [
    { text: 'Menu', value: 'Menu' },
    { text: 'Checkbox', value: 'CheckBox' },
  ];
  filterSettings = { type: 'Menu' };
  fields = { text: 'text', value: 'value' };
  format = { type: 'datetime', format: 'M/d/y hh:mm a' };
  onChange(sel) {
    this.MissionGrid.filterSettings.type = sel.itemData.value;
    this.MissionGrid.clearFiltering();
  }
  render() {
    return (<div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
              <Header category="Page" title="Mission" />
      <div className='control-section row'>
        <div style={{ padding: '14px' }}>
          <DropDownListComponent id="ddlelement" dataSource={this.filterType} fields={this.fields} change={this.onChange.bind(this)} index={0} popupHeight="150px" width="200px" />
        </div>
        <GridComponent dataSource={MissionData} allowSorting={true} allowPaging={true} ref={grid => this.MissionGrid = grid} pageSettings={{ pageCount: 5 }} allowFiltering={true} filterSettings={this.filterSettings}>
          <ColumnsDirective>
                     {MissionGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          </ColumnsDirective>
          <Inject services={[Filter, Page, Sort]} />
        </GridComponent>
      </div>
    </div>);
  }
}
