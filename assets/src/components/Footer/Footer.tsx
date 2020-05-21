import * as React from "react";
import "../../styles/Footer.scss";

interface IProps {
}

export default class Footer extends React.Component<IProps> {
  public render() {
    return (
      <footer>
              © ProblemaResolt：2015 -{new Date().getFullYear()}
              <a href="//twitter.com/ProblemaResolt" target="blank">
              </a>
              <a href="//github.com/ProblemaResolt" target="blank">
              </a>
      </footer>
    );
  }
}
