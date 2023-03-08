type Props = {
  pages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export default function CountryListPages({
  pages,
  currentPage,
  onPageChange,
}: Props) {
  return (
    <ul className="flex cursor-pointer justify-center">
      <PreviousButton
        onClick={() => onPageChange(Math.max(currentPage - 1, 0))}
      />
      {[...Array(pages)].map((_, index) => (
        <PageNumber
          key={index}
          value={index}
          selected={index === currentPage}
          onClick={() => onPageChange(index)}
        />
      ))}
      <NextButton
        onClick={() => onPageChange(Math.min(currentPage + 1, pages - 1))}
      />
    </ul>
  );
}

function PreviousButton({ onClick }: { onClick: () => void }) {
  return (
    <li
      onClick={onClick}
      className="ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      Previous
    </li>
  );
}

function PageNumber({
  value,
  selected,
  onClick,
}: {
  value: number;
  selected?: boolean;
  onClick: () => void;
}) {
  const defaultClassNames =
    "bg-white leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
  const activeClassNames =
    "bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-700 dark:text-white";
  return (
    <li
      className={`flex w-10 items-center justify-center border border-gray-300 dark:border-gray-700 ${
        selected ? activeClassNames : defaultClassNames
      }`}
      onClick={onClick}
    >
      {value + 1}
    </li>
  );
}

function NextButton({ onClick }: { onClick: () => void }) {
  return (
    <li
      onClick={onClick}
      className="rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      Next
    </li>
  );
}
