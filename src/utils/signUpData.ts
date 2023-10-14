import {translate} from './i18n';
const checkBoxData = [
  [
    {
      typo: 'normal',
      text: translate('singUp.policyMessage'),
    },
    {
      typo: 'link',
      text: translate('singUp.privacyPolicy'),
    },
  ],

  [
    {
      typo: 'normal',
      text: translate('singUp.accept'),
    },
    {
      typo: 'link',
      text: translate('singUp.termsAndConditions'),
    },
    {
      typo: 'normal',
      text: translate('singUp.and'),
    },
    {
      typo: 'link',
      text: translate('singUp.advices'),
    },
  ],
];

export default checkBoxData;
