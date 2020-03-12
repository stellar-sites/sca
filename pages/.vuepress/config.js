const path = require("path");

var baseURL = process.env.NODE_ENV === 'production' ? '/sca/' : '/';
var withBase = function (s) { return baseURL + s; }
console.log('BaseURL: ' + baseURL);

module.exports = {
  title: 'Shrewsbury Christian Academy',
  description: "Shrewsbury Christian Academy Online",
  dest: '../docs',
  base: baseURL,
  themeConfig: {
    logo: 'assets/img/logo.jpg',
    search: true,
    searchPlaceholder: 'Search...',
    searchMaxSuggestions: 5,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Info', link: '/info/' },
      { text: 'Admissions', link: '/admissions/' },
      { text: 'Tuition', link: '/tuition/' },
      { text: 'Staff', link: '/staff/' },
      { text: 'Academics', link: '/academics/' },
      { text: 'Support', link: '/support/' },
      { text: 'Contact', link: '/contact/' },
      { 
        text: 'External',
        ariaLabel: '',
        items: [
          { text: 'Sycamore', link: 'https://app.sycamoreeducation.com/index.php?task=newlogin&schoolid=1494', target: '_blank', rel: '' },
          { text: 'e-Funds', link: 'https://eps.mvpbanking.com/cgi-bin/efs/login.pl?access=55719', target: '_blank', rel: '' },
          { text: 'FAST Financial Aid', link: 'https://www.ismfast.com/FastPage.php?id=35b15545fc1db0bbc5276f5962513c25', target: '_blank', rel: '' }
        ]
      }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname,"../assets")
      }
    }
  }
}
