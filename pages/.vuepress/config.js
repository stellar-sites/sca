const path = require("path");

var baseURL = process.env.BASE_URL || '/';
var withBase = function (s) { return baseURL + s; }
console.log('BaseURL: ' + baseURL);

module.exports = {
  title: 'Shrewsbury Christian Academy',
  description: "Shrewsbury Christian Academy Online",
  dest: './docs',
  base: baseURL,
  plugins: {
    'vue-plugin-load-script': {},
    '@vuepress/google-analytics': {'ga': 'UA-166125087-1' },
    'seo': {},
    'tabs': {}
  },
  themeConfig: {
    logo: '/assets/img/logo.jpg',
    search: true,
    searchPlaceholder: 'Search...',
    searchMaxSuggestions: 5,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Info', link: '/info/' },
      { text: 'Admissions', link: '/admissions/' },
      { text: 'Tuition', link: '/tuition/' },
      { text: 'Academics', link: '/academics/' },
      { text: 'STEM', link: '/stem/' },
      { text: 'Events', link: '/events/' },
      { text: 'Contact', link: '/contact/' },
      {
        text: 'More',
        ariaLabel: '',
        items: [
          { text: 'Employment', link: '/employment/' },
          { text: 'Support', link: '/support/' },
          { text: 'Site Issues', link: '/issues/'}
        ]
      },
      { 
        text: 'Links',
        ariaLabel: '',
        items: [
          { text: 'Sycamore', link: 'https://app.sycamoreeducation.com/index.php?task=newlogin&schoolid=1494', target: '_blank', rel: '' },
          { text: 'e-Funds', link: 'https://eps.mvpbanking.com/cgi-bin/efs/login.pl?access=55719', target: '_blank', rel: '' }
//          { text: 'FAST Financial Aid', link: 'https://www.ismfast.com/FastPage.php?id=35b15545fc1db0bbc5276f5962513c25', target: '_blank', rel: '' }
        ]
      }
    ]
  },
  extendPageData ($page) {
    $page.principal = "Mrs. Lippy"
    $page.current_year = "2023-24"
    $page.links = {
      sycamore: "https://app.sycamoreeducation.com/admissions/index.php?schoolid=1494"
    }
    $page.github = {
        owner: "stellar-sites",
        repo: "sca",
        assignee: 'taemon1337',
        auth: {
            id: "Iv1.f95a79a11a564c2c",
            privateKey: "e2e1d9d3c25a4d6d80be63c1860f9fdbe7099b33"
        }
    }
    $page.books = [
      { title: 'Basher Five-Two', link: 'basher-52.jpg' },
      { title: 'Behind Rebel Lines', link: 'behind-rebel-lines.jpg' },
      { title: 'Black Horse for the King', link: 'black-horse-for-the-king.jpg' },
      { title: 'Bronze Bow', link: 'bronze-bow.jpg' },
      { title: 'Call of the Wild', link: 'call-of-the-wild.jpg' },
      { title: 'Charlotte Doyle', link: 'charlotte-doyle.jpg' },
      { title: 'Dragonwings', link: 'dragonwings.jpg' },
      { title: 'Drift House', link: 'drift-house.jpg' },
      { title: 'Edge on the Sword', link: 'edge-on-the-sword.jpg' },
      { title: 'Fire Aprils', link: 'fire-aprils.jpg' },
      { title: 'Fire in their Eyes', link: 'fire-in-their-eyes.jpg' },
      { title: 'Friedrich', link: 'friedrich.jpg' },
      { title: 'Gifted Hands', link: 'gifted-hands.jpg' },
      { title: 'Juan de Pareja', link: 'Juan-de-pareja.jpg' },
      { title: 'The Kings Shadow', link: 'kings-shadow.jpg' },
      { title: 'Lights in the Forest', link: 'lights-in-the-forest.jpg' },
      { title: 'The Lion, Witch, and the Wardrobe', link: 'lion-witch-wardrobe.jpg' },
      { title: 'Lost in Barrens', link: 'lost-in-barrens.jpg' },
      { title: 'The Magician"s Nephew', link: 'magicians-nephew.jpg' },
      { title: 'Mara on the Nile', link: 'mara-of-the-nile.jpg' },
      { title: 'The Master Puppeteer', link: 'master-puppeteer.jpg' },
      { title: 'My Brother Sister and I', link: 'my-brother-sister-and-i.jpg' },
      { title: 'Rifles for Watie', link: 'rifles-for-watie.jpg' },
      { title: 'Roll of Thunder', link: 'roll-of-thunder.jpg' },
      { title: 'The Samurai"s Tale', link: 'samurais-tale.jpg' },
      { title: 'The Slave Dancer', link: 'slave-dancer.jpg' },
      { title: 'Surviving Hitler', link: 'surviving-hitler.jpg' },
      { title: 'The Devil"s Arithmatic', link: 'the-devils-arithmetic.jpg' },
      { title: 'The Hobbit', link: 'the-hobbit.jpg' },
      { title: 'The Horse and his Boy', link: 'the-horse-and-his-boy.jpg' },
      { title: 'The Wrestling Game', link: 'the-wrestling-game.jpg' },
      { title: 'Tremain', link: 'tremain.jpg' }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname,"../assets"),
        '@module': path.resolve(__dirname,"../../node_modules")
      }
    }
  }
}
