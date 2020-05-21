
import * as React from "react";
import * as ReactDOM from "react-dom";
import {FaDev, FaTwitterSquare, FaGithubSquare} from "react-icons/fa"
import "../../styles/Contents.scss";

interface IProps {}
const  iconSize = 32

export default class Contents extends React.Component<IProps> {
  public render() {
    return (
      <React.Fragment>
        <section className="contents">
        </section>
      </React.Fragment>
    );
  }
}
