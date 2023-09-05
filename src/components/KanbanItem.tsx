import { v4 as uuidV4 } from "uuid";

export class ItemContent {
  readonly id = uuidV4();
  noteContent: string;

  constructor(noteContent: string) {
    this.noteContent = noteContent;
  }
}

export function KanbanItem(props: { itemContent: ItemContent }) {
  return (
    <div>
      {props.itemContent.noteContent}
    </div>
  );
}
