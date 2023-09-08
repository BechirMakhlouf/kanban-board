import { v4 as uuidV4 } from "uuid";
// import { useStore } from "../App";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export class ItemContent {
  readonly id = uuidV4();
  noteContent: string;

  constructor(noteContent: string) {
    this.noteContent = noteContent;
  }
}

export function KanbanItem(props: { itemContent: ItemContent }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.itemContent.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="p-2 m-2 border rounded bg-slate-800 hover:cursor-grab active:cursor-grabbing text-gray-400"
    >
      {props.itemContent.noteContent}
    </div>
  );
}
