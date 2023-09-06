import { create } from "zustand";
import { ColumnContent, KanbanColumn } from "./components/KanbanColumn";
import { ItemContent } from "./components/KanbanItem";

export const useStore = create((set) => ({
  items: new Map<string, ItemContent>(),
  columns: new Array<ColumnContent>(
    new ColumnContent("Column 1"),
    new ColumnContent("Column 2"),
    new ColumnContent("Column 3"),
  ),

  addItem: (item: ItemContent) =>
    set((prev: any) => ({
      items: new Map(prev.items).set(item.id, item),
    })),

  addColumn: (column: ColumnContent) =>
    set((prev: any) => ({
      columns: [...prev.columns, column],
    })),

  updateColumn: (column: ColumnContent, columnIndex: number) =>
    set((prev: any) => {
      // const columnIndex: number = prev.columns.findIndex((columnI: ColumnContent) =>
      //   columnI === column
      // );
      prev.columns[columnIndex] = column;
      return {
        columns: [...prev.columns],
      };
    }),
}));

function App() {
  const { columns, addColumn } = useStore((state) => state as any);
  return (
    <>
      <h1 className="text-3xl text-center  m-2">Kanban Board</h1>
      <div className="max-w-full border-zinc-500 border-2 m-8 flex justify-center rounded bg-gray-950 overflow-x-scroll">
        {columns.map((columnContent: ColumnContent, index: number) => (
          <KanbanColumn
            key={columnContent.id}
            columnIndex={index}
            columnContent={columnContent}
          />
        ))}
        <div
          className="p-2 self-center text-4xl cursor-pointer"
          onClick={() => {
            addColumn(new ColumnContent("another"));
          }}
        >
          +
        </div>
      </div>
    </>
  );
}

export default App;
