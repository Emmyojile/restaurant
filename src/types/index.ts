export type Menutypes = {
  id: String;
  slug: String;
  title: String;
  desc: String;
  img: String;
  color: String;
}[];

export type ProductTypes = {
  id: String;
  title: String;
  desc?: String;
  img?: String;
  price: Number;
  optons?: { title: String; additionalPrice: Number }[];
};
