import { columns } from "@/components/tables/user-table-columns";
import UserTable from "@/components/ui/makeshift/data-table";
import getUsers from "@/data/getUsers";

const TablePage = async () => {
  const users = await getUsers();
  // ↓ to achieve simple pagination.
  //   Customize pagination: https://tanstack.com/table/v8/docs/api/features/pagination
  const users2 = await getUsers();
  const doubled = users.concat(
    users2.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5)
  );

  return (
    <main className="container mt-5 mb-10">
      <UserTable columns={columns} data={doubled} />

      <div className=" mt-10 space-y-4">
        <p>
          This table was created by following shadcn&apos;s{" "}
          <a
            href="https://ui.shadcn.com/docs/components/data-table"
            className="link"
          >
            Data Table Tutorial
          </a>
          . What&apos;s amazing is it is responsive by default. Unless my other
          tables were being affected by flex/grid parent layouts, I had trouble
          with the table overflowing off the page (horizontal body scrollbar)
          and had to do some crazy css fixes. I first experienced this a while
          ago using{" "}
          <a href="https://mui.com/x/react-data-grid/" className="link">
            MUI&apos;s Data Grid
          </a>
          . I had the same issue with react-table after migrating from MUI.
        </p>

        <p>
          Added a shadcn <code>{`<ScrollArea />`}</code> for horizontal
          scrolling. I also went ahead and helped myself to the reusable
          component examples. These include the{" "}
          <code>{`<DataTableColumnHeader />`}</code> for column sorting and
          hiding, the <code>{`<DataTablePagination />`}</code> for nice
          pagination features, and the{" "}
          <code>{`<DataTableViewOptionsProps />`}</code> to toggle column
          visibiliy.
        </p>
        <p>
          The pagination could be improved by using cursors, currently all the
          data is fetched at once. The <code>{`<Checkbox />`}</code> column also
          has no functionality.
        </p>
      </div>
    </main>
  );
};

export default TablePage;
