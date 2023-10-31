export type Iblog = {
  image: {
    url: string;
    public_id: string;
  };
  title: string;
  description: string;
};
export type IFaq = {
  image: {
    url: string;
    publicLink: string;
  };
  title: string;
  description: string;
};
export type IAboutUs = {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};
