// types.ts
export type Image = {
  id: number;
  attributes: {
    url: string;
  };
};

export type Event = {
  id: number;
  attributes: {
    Title: string;
    slug: string;
    description: string;
    images: {
      data: Image[];
    };
  };
};