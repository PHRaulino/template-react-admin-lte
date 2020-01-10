import React from 'react';
import CardLink from './cardLink';
import { Grid } from '../../layout';

export default props => {
  const { value, indicator, icon, link, cols, color, textLink } = props;
  return (
    <Grid cols={cols}>
      <div className={`small-box ${color}`}>
        <div className="inner text-center">
          <h3>{value}</h3>
          <p>{indicator}</p>
        </div>
        <div className="icon">
          <i className={icon}></i>
        </div>
        <CardLink link={link} text={textLink} />
      </div>
    </Grid>
  )
}