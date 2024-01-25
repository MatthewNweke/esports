// Table.jsx
import TableRows from './TableRows';

const TransactionTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="mx-auto max-md:text-[0.8rem] my-0 w-[100%] max-lg:w-[90%] px-5 bg-white border-0 rounded-lg overflow-hidden h-[80vh]">
        <thead className="text-center">
          <tr className="h-12">
            <th className="py-2 px-4 bg-blue-600  text-gray-100 font-semibold border-b">
              Name
            </th>
            <th className="py-2 px-4 bg-blue-600  text-gray-100 font-semibold border-b">
              Date
            </th>
            <th className="py-2 px-4 bg-blue-600  text-gray-100 font-semibold border-b">
              Amount
            </th>
            <th className="py-2 px-4 bg-blue-600  text-gray-100 font-semibold border-b">
              Gateway
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200 text-gray-700 text-center">
          <TableRows names={'Pat Fale'} date={'2023-08-23'} amount={'$ 1000'} />
          <TableRows
            names={'David Rothberg'}
            date={'2023-05-17'}
            amount={'$ 352'}
          />
          <TableRows
            names={'David Rothberg'}
            date={'2023-05-17'}
            amount={'$ 352'}
          />
          <TableRows
            names={'Dean Morse'}
            date={'2023-05-15'}
            amount={'$ 15000'}
          />
          <TableRows
            names={'Avlin Josh'}
            date={'2023-05-17'}
            amount={'$ 58000'}
          />
          <TableRows
            names={'David Rothberg'}
            date={'2023-05-17'}
            amount={'$ 352'}
          />
          <TableRows
            names={'Ashley Vivi'}
            date={'2023-03-29'}
            amount={'$ 15000'}
          />
          <TableRows
            names={'David Rothberg'}
            date={'2023-05-17'}
            amount={'$ 352'}
          />
          <TableRows
            names={'Fallon Mc Elligot'}
            date={'2023-01-27'}
            amount={'$ 1000'}
          />
          <TableRows
            names={'Edgar Pepito'}
            date={'2023-01-07'}
            amount={'$ 302.56'}
          />
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
