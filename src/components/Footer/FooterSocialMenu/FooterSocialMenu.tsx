import React, { FC } from 'react';
import cx from 'classnames';

import Icon from '../../Icon';
import LinkSecondaryAsAnchor from '../../links/LinkSecondary/LinkSecondaryAsAnchor';

import './c-footer-social-menu.scss';

interface Props {
  className?: string;
}

const FooterSocialMenu: FC<Props> = ({ className }) => (
  <ul className={cx('c-footer-social-menu', className)}>
    <li className="c-footer-social-menu__item">
      <LinkSecondaryAsAnchor
        href="https://www.instagram.com/"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="u-display-block" name="instagram" ariaHidden />
      </LinkSecondaryAsAnchor>
    </li>
    <li className="c-footer-social-menu__item">
      <LinkSecondaryAsAnchor
        href="https://www.linkedin.com/company/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <Icon className="u-display-block" name="linkedin" ariaHidden />
      </LinkSecondaryAsAnchor>
    </li>
    <li className="c-footer-social-menu__item">
      <LinkSecondaryAsAnchor
        href="https://www.github.com/"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="u-display-block" name="github" ariaHidden />
      </LinkSecondaryAsAnchor>
    </li>
  </ul>
);

export default FooterSocialMenu;
