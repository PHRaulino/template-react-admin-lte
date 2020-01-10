import React from 'react';
import { Grid } from '../layout';
export default props => {
  return (
    <Grid cols={props.cols}>
      <div className='small-box bg-info'>
        <div className='inner text-center'>
          <h3>{props.value}</h3>

          <p>{props.indicador}</p>
        </div>
        <div className='icon'>
          <i className={props.icon}></i>
        </div>
        {props.link ?
          <a href={props.link} className='small-box-footer'>More info <i className='fas fa-arrow-circle-right'></i></a>
          : ''}

      </div>
    </Grid>
  )
}