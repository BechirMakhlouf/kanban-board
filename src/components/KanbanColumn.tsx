import { useStore } from "../App";
import { useState } from "react";
import DotsVerticalIcon from "../assets/DotsVerticalIcon.svg";
import { v4 as uuidV4 } from "uuid";
import { ItemContent, KanbanItem } from "./KanbanItem";

export class ColumnContent {
  readonly id: string = uuidV4();
  title: string;
  containedItems: ItemContent[];

  constructor(title: string, ContainedItems?: ItemContent[]) {
    this.title = title;
    this.containedItems = ContainedItems || [];
  }
}

export const KanbanColumn = (
  props: { columnIndex: number; columnContent: ColumnContent },
) => {
  const { columns, addItem, updateColumn } = useStore((state) => state as any);
  const [title, setTitle] = useState<string>(columns[props.columnIndex].title);
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const columnContent: ColumnContent = columns[props.columnIndex];

  return (
    <div className="border-2 border-zinc-500 m-4 p-4 min-h-[28rem] min-w-[24rem] max-w-full bg-gray-900 no-scrollbar">
      <div className="flex justify-between">
        <h1
          className="min-w-[150px] text-3xl text-primary w-full"
          onDoubleClick={() => {
            setIsEditingTitle(() => true);
          }}
        >
          {isEditingTitle
            ? (
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  console.log(e.target.value);
                  setTitle(e.target.value);
                }}
                onBlur={(e) => {
                  setTitle(() => e.target.value || "Column Title");
                  setIsEditingTitle(() =>
                    false
                  );
                }}
              />
            )
            : <span className="">{title}</span>}
        </h1>
        <img
          src={DotsVerticalIcon}
          alt=""
          className="w-6 hover:cursor-grab active:cursor-grabbing"
        />
      </div>
      <hr />

      {columnContent.containedItems.map((itemContent) => (
        <KanbanItem key={itemContent.id} itemContent={itemContent} />
      ))}

      <hr />
      <button
        className="m-2"
        onClick={() => {
          const newItemContent = new ItemContent("type here...");
          addItem(newItemContent);
          columnContent.containedItems.push(newItemContent);
          updateColumn(columnContent, props.columnIndex);
        }}
      >
        add Item
      </button>
    </div>
  );
};
