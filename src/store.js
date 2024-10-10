import { create } from "zustand";

const useStore = create((set) => ({

  arr: Array(9).fill(null),
  player: "x",

  setVal: (index) => {
    set((state) => {
      return {
        arr: state.arr.map((val, ind) =>(
           ind===index ? state.player:val
        )),
      }; 
    });
  },

  switchPlayer: () => {
    set((state) => {
      return state.player === "x" ? { player: "y" } : { player: "x" };
    });
  },

}));

export default useStore;
