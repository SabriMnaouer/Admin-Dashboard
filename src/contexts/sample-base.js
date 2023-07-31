/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
import * as React from 'react';

export class SampleBase extends React.PureComponent {
  rendereComplete() {
  }

  componentDidMount() {
    setTimeout(() => {
      this.rendereComplete();
    });
  }
}
