import { create } from "zustand";
import { ColumnContent, KanbanColumn } from "./components/KanbanColumn";
import { ItemContent } from "./components/KanbanItem";

export const useStore = create((set) => ({
  items: new Map<string, ItemContent>(),
  columns: new Array<ColumnContent>(),

  addItem: (item: ItemContent) =>
    set((prev: any) => ({
      items: new Map(prev.items).set(item.id, item),
    })),

  addColumn: (column: ColumnContent) =>
    set((prev: any) => ({
      columns: [...prev.columns, column],
    })),

}));

function App() {
  const { columns } = useStore((state) => state.columns);

  return (
    <>
      <h1 className="text-3xl text-center m-2">Kanban Board</h1>
      <div className="m-auto bg-primary-dark">
        {
          columns.map((columnContent: ColumnContent) => <KanbanColumn columnContent={columnContent})
        }
      </div>
    </>
  );
}

export default App;
