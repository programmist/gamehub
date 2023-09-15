import { SortOrder } from "../components/SortSelector";
import { GameQuery } from "../services/game-service";
import { create } from "zustand";

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
