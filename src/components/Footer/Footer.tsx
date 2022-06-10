import React, { FC } from 'react';
import cx from 'classnames';

import FooterSocialMenu from './FooterSocialMenu';
import LinkSecondary from '../links/LinkSecondary';

import huaweideveloperslogo from '../../images/hd-logo.png';

import './c-footer.scss';
import LinkLightAsAnchor from '../links/LinkLight/LinkLightAsAnchor';
import LinkSecondaryAsAnchor from '../links/LinkSecondary/LinkSecondaryAsAnchor';

interface Props {
  className?: string;
}

const Footer: FC<Props> = ({ className }) => (
  <footer className={cx('c-footer', className)}>
    <div className="container-layout">
      <div className="row">
        <div className="col col--sm-6 u-padding-ends">
          <LinkLightAsAnchor
            className="c-footer__brand-logo-link"
            href="https://developer.huawei.com/consumer/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="c-footer__brand-logo" src={huaweideveloperslogo} alt="Huawei Developers" />
          </LinkLightAsAnchor>

          <div className="u-font-weight-500">
            Leading New ICT Building  <br />
            a Better Connected World
          </div>
          <nav className="c-footer__social-nav" aria-labelledby="social-menu-label">
            <h2 className="u-visually-hidden" id="social-menu-label">
              Huawei Developers Social Menu
            </h2>
            <FooterSocialMenu />
          </nav>
        </div>
        <div className="col col--sm-6 col--md-3 u-padding-ends">
          <nav aria-labelledby="atolye15-menu-label">
            <h6 className="c-footer__title" id="atolye15-menu-label">
              HUAWEI Developers
            </h6>
            <ul className="c-footer__menu">
              <li className="u-margin-top-2xsmall">
                <LinkSecondaryAsAnchor
                  href="https://developer.huawei.com/consumer/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get to Know Us
                </LinkSecondaryAsAnchor>
              </li>
              <li className="u-margin-top-2xsmall">
                <LinkSecondaryAsAnchor
                  href="https://developer.huawei.com/consumer/en/programs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Our Programs
                </LinkSecondaryAsAnchor>
              </li>
              <li className="u-margin-top-2xsmall">
                <LinkSecondaryAsAnchor
                  href="https://developer.huawei.com/consumer/en/activity/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Our Events
                </LinkSecondaryAsAnchor>
              </li>

              <li className="u-margin-top-2xsmall">
                <LinkSecondaryAsAnchor
                  href="https://developer.huawei.com/consumer/en/support/contactUs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </LinkSecondaryAsAnchor>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col col--sm-6 col--md-3 u-padding-ends">
          <nav aria-labelledby="checklist-menu-label">
            <h6 className="c-footer__title" id="checklist-menu-label">
              Checklist
            </h6>
            <ul className="c-footer__menu">
              <li className="u-margin-top-2xsmall">
                <LinkSecondary to="/about">About</LinkSecondary>
              </li>
              <li className="u-margin-top-2xsmall">
                <LinkSecondaryAsAnchor
                  href={`${process.env.GATSBY_GITHUB_LINK}/blob/master/CODE_OF_CONDUCT.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code of Conduct
                </LinkSecondaryAsAnchor>
              </li>
              <li className="u-margin-top-2xsmall">
                <LinkSecondaryAsAnchor
                  href={`${process.env.GATSBY_GITHUB_LINK}/blob/master/CONTRIBUTING.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contributing
                </LinkSecondaryAsAnchor>
              </li>
              <li className="u-margin-top-2xsmall">
                <LinkSecondary to="/checklist/checklist-checklist">
                  Checklist Checklist
                </LinkSecondary>
              </li>
              <li className="u-margin-top-2xsmall">
                <LinkSecondary to="/checklist/improvement-checklist">
                  Improvement Checklist
                </LinkSecondary>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
