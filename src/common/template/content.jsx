import React from 'react';
import { ContentHeader } from '../elements/content';

export default props => {
  return (
    <div className='content-wrapper'>
      <ContentHeader title={props.titlePage} home={props.homePage} />
      {props.children}
    </div>
  )
}