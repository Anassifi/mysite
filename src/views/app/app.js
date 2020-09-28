import Navbar from "@/components/my-navbar/Navbar.vue";
import Arrow from "@/components/arrow/Arrow.vue";
import Sidebar from "@/components/side-bar/Sidebar.vue";
import About from "@/views/about/About.vue";
import Portfolio from "@/views/portfolio/Portfolio.vue";
import Contact from "@/views/contact/contact.vue";
import Footer from "@/components/footer/Footer.vue";
import dashboardNav from "@/components/Dashboard/dashboardNav.vue";

export default {
  name: "App",
  el: ".seen",
  components: {
    Navbar,
    Arrow,
    Sidebar,
    About,
    Portfolio,
    Contact,
    Footer,
    dashboardNav,
  },
  data() {
    return {
      seen: false,
    };
  },
  methods: {
    openDashboard: function() {
      this.seen = true;
    },
  },
};
