import { v4 as uuidV4 } from "uuid";

export class ColumnContent {
  readonly id: string = uuidV4();
  title: string;
  ContainedItemsId: string[];

  constructor(title: string, ContainedItems?: string[]) {
    this.title = title;
    this.ContainedItemsId = ContainedItems || [];
  }
}

export const KanbanColumn = (props: { columnContent: ColumnContent }) => {
  return (
    <div>
      <h1>{props.columnContent.title}</h1>
      column !!
    </div>
  );
};
