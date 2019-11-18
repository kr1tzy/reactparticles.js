import * as React from "react";

declare global {
  interface Window {
    particlesJS: any;
  }
}

export interface Props extends React.Props<Particles> {
  id: string;
  config?: string;
  style?: any;
  className?: string;
}

export interface State {
  style: any;
}

declare class Particles extends React.Component<Props, State> {}

declare module "reactparticles.js" {}

export default Particles;
