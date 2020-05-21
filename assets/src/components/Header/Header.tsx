import * as React from "react";
import "../../styles/Header.scss";

interface IProps {
  name: string;
}

export default class Header extends React.Component<IProps> {
  public render() {
    return (
      <h1 className="title">
        <span className="title__text">Problema {this.props.name}</span>
      </h1>
    );
  }
}
