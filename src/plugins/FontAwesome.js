import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import FontAwesomeIcon from "../components/FontAwesomeIcon.vue";

library.add(fas, faTwitter, faFacebook);

export { FontAwesomeIcon };