import React from 'react'

import classes from './index.module.scss'

function Filters() {
  return (
    <div className={classes.filters}>
      <h6 className={classes.title}>Product Categories</h6>
      <div className={classes.categories}></div>
    </div>
  )
}

export default Filters
