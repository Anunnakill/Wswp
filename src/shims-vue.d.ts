declare module "*.svg" {
  const filePath: string;
  export default filePath;
}

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
