import { SortOrder } from "../components/SortSelector";
import { create } from "zustand";

interface GameQuery {
  search: string;
  genreId?: number;
  platformId?: number;
  order: SortOrder;
  pageSize: number;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  updateGenre: (genreId: number) => void;
  updatePlatform: (platformId: number) => void;
  updateSearch: (search: string) => void;
  updateSort: (order: SortOrder) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {
    order: { value: "", label: "Relevance" },
    search: "",
    pageSize: 10,
  },
  updateGenre: (genreId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  updatePlatform: (platformId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  updateSearch: (search: string) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, search } })),
  updateSort: (order: SortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, order } })),
}));

export default useGameQueryStore;
