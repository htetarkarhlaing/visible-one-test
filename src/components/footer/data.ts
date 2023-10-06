interface IFooterData {
  label: string
  list: {
    name: string
    link: string
  }[]
}

const footerData: IFooterData[] = [
  {
    label: 'Quick Links',
    list: [
      {
        name: 'Services',
        link: '/',
      },
      {
        name: 'About Us',
        link: '/',
      },
      {
        name: 'Blog',
        link: '/',
      },
      {
        name: 'Quotation',
        link: '/',
      },
      {
        name: 'Partnership',
        link: '/',
      },
      {
        name: 'Contact Us',
        link: '/',
      },
    ],
  },
  {
    label: 'Our Services',
    list: [
      {
        name: 'Web Development',
        link: '/',
      },
      {
        name: 'Web Design',
        link: '/',
      },
      {
        name: 'Responsive Website Design',
        link: '/',
      },
      {
        name: 'CMS Website Design',
        link: '/',
      },
      {
        name: 'Custom Website design',
        link: '/',
      },
      {
        name: 'UI & UX Website Design',
        link: '/',
      },
      {
        name: '360 Virtual Tour',
        link: '/',
      },
    ],
  },
  {
    label: '',
    list: [
      {
        name: 'Ecommerce development',
        link: '/',
      },
      {
        name: 'WooCommerce Development',
        link: '/',
      },
      {
        name: 'osCommerce Development',
        link: '/',
      },
      {
        name: 'Magento Development',
        link: '/',
      },
      {
        name: 'BigCommerce Development',
        link: '/',
      },
      {
        name: 'SSL Certificate',
        link: '/',
      },
      {
        name: 'Promotion Video',
        link: '/',
      },
    ],
  },
]

export default footerData
