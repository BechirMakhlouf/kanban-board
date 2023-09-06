import { v4 as uuidV4 } from "uuid";
import { useStore } from "../App";

export class ItemContent {
  readonly id = uuidV4();
  noteContent: string;

  constructor(noteContent: string) {
    this.noteContent = noteContent;
  }
}

export function KanbanItem(props: { itemContent: ItemContent }) {
  return (
    <div className="p-2 m-2 border rounded bg-slate-800 hover:cursor-grab active:cursor-grabbing text-gray-400">
      {props.itemContent.noteContent}
    </div>
  );
}
