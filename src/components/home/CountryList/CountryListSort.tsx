type Props = {
  ascending: boolean;
  onToggle: (ascending: boolean) => void;
};

export default function CountryListSort({ ascending, onToggle }: Props) {
  return (
    <div
      className="cursor-pointer rounded-full bg-blue-100 px-4 py-1 text-sm text-blue-800"
      onClick={() => onToggle(!ascending)}>
      Sort by Name {ascending ? " ▲" : " ▼"}
    </div>
  );
}
