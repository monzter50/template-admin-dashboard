import * as React from 'react';
import classNames from 'classnames';
import styles from './Typhografy.module.css';
import { HeadingProps } from './Typhografy.types';

const fontSizes = {
  s: styles.sm,
  m: styles.md,
};

function Typography(props: HeadingProps) {
  const { as, size = 'm', ...others } = props;

  const Component = as ?? 'p';

  const classes = classNames(fontSizes[size],styles.root)

  return <Component  className={classes} {...others} />;
}

export default Typography;