// utility

type Product = {
	id: number;
	name: string;
	price: string;
	stock: number;
	color?: string;
};

type ProductSummary = Pick<Product, "id" | "name">;
type ProductWithoutStock = Omit<Product, "stock" | "color">;
type ProductWithColor = Required<Product>;

const product: ProductWithColor = {
	id: 2222,
	name: "Mouse",
	price: "22",
	stock: 222,
	color: "red",
};

type OptionalProduct = Partial<Product>;

type ProductReadonly = Readonly<Product>;

type EmptyObj = Record<string, unknown>;

const product1: EmptyObj = {
	id: 222,
	name: "Mouse",
	price: "20",
};
