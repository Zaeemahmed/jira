///<reference types="react" />

//
// These declares remote modules and the objects they carry.
//

declare module "ui/components" {}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
