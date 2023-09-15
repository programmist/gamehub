import { SortOrder } from "../components/SortSelector";
import { create } from "zustand";

interface GameQuery {
  searchText?: string;
  genreId?: number;
  platformId?: number;
  order?: SortOrder;
  pageSize?: number;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  updateGenre: (genreId: number) => void;
  updatePlatform: (platformId: number) => void;
  updateSearch: (search: string) => void;
  updateSort: (order: SortOrder) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  updateSearch: (searchText) => set(() => ({ gameQuery: { searchText } })),
  updateGenre: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  updatePlatform: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  updateSort: (order) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, order } })),
}));

export default useGameQueryStore;
