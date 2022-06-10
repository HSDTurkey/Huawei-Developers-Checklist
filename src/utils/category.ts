import { MarkdownRemarkFrontmatter, Maybe } from '../../graphql-types';
import { Theme } from './theme';

export type Category =
  | 'front-end'
  | 'back-end'
  | 'mobile'
  | 'devops'
  | 'design'
  | 'project-management'
  | 'human-resources'
  | 'marketing'
  | 'general'
  | 'default';

export const categoryTheme: { [key in Category]: Theme } = {
  default: 'default',
  'front-end': 'dodger-blue',
  'back-end': 'electric-violet',
  mobile: 'purple-heart',
  devops: 'fuzzy-wuzzy-brown',
  design: 'rose',
  'project-management': 'clementine',
  'human-resources': 'purple',
  marketing: 'gossamer',
  general: 'blue',
};

export const getDescription = (title: string): string => {
  switch (title) {
    case 'Design':
      return 'These checklists ensure that we have standardized both visual design and user experience design principles.';

    case 'Front-End':
      return 'We keep it simple and smart, and these are our checklists mainly used by our front-end developers.';

    case 'Back-End':
      return 'Server related, data-driven and API based checklists that help making our products of hard work stay steady.';

    case 'Mobile':
      return 'Connecting people by covering all the processes from mobile development to roll-out the application.';

    case 'DevOps':
      return 'We love to automate things and have also checklists for that.';

    case 'Project Management':
      return 'They manage the team and act as a bridge between designers, developers and frankly, everyone, with the additional help of these checklists.';

    case 'Human Resources':
      return 'Cabin crew, slides armed and cross check! Here are the checklists to make sure everyone in the crew is happy.';

    case 'Marketing':
      return 'Our marketing checklist is to help supporting our good work by its communication, and has everything marketing team uses for our marketing efforts.';

    case 'General':
      return 'There are some checklists which are hard to categorize. Let’s just call them generals.';

    default:
      return 'A checklist category!';
  }
};

export const getMostUsedTags = (
  nodes?: Array<{ frontmatter?: Maybe<Pick<MarkdownRemarkFrontmatter, 'tags'>> }>,
): string[] => {
  const items: Record<string, number> = {};

  (nodes || []).forEach(node => {
    if (!node.frontmatter) {
      return;
    }

    (node.frontmatter.tags || []).forEach(tag => {
      const tagName = tag || '';
      if (items[tagName]) {
        items[tagName] += 1;
        return;
      }

      items[tagName] = 1;
    });
  });

  return Object.entries(items)
    .sort((i1, i2) => i2[1] - i1[1])
    .map(i => i[0])
    .slice(0, 4);
};
