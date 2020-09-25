import { aboutRef } from "../../firebase";

export default {
  el: ".about",
  data() {
    return {
      title: "NASSIFI Abdelhakim",
      lang: "Languages",
      fram: "Frameworks",
      tools: "Tools"
    };
  },
  firebase:{
    aboutMe: aboutRef
  }
};
