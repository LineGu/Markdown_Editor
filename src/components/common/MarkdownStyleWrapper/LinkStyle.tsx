import React, { ReactElement } from 'react';
import { ILinkProps } from '@types';

const LinkRenderer = (props: ILinkProps): ReactElement => {
  const { children: linkName, href: linkUrl } = props;

  return (
    <a href={`https://${linkUrl}`} target="_blank" rel="external nofollow noopener noreferrer">
      {linkName}
    </a>
  );
};

export default LinkRenderer;
