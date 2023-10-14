export type Navigation = {
  navigate: (scene: string) => void;
  openDrawer: () => void;
  goBack: () => void;
  reset: (route: ResetType) => void;
};

type ResetType = {
  index: number;
  routes: {
    name: string;
  }[];
};
