import { create } from "zustand";

type CartModel = {
  id: String;
  qty: number;
  checkInDate: Date;
  checkOutDate: Date;
};
type StoreCartModel = {
  data: CartModel[];
};
type ActionCartModel = {
  addDataCart: (data: CartModel) => void;
};

export const cartStore = create<StoreCartModel & ActionCartModel>((set) => ({
  data: [],
  addDataCart: (item: CartModel) => set((state) => ({ data: [...state.data, item] })),
}));
