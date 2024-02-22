export function addFontBoldJSX(str: string) {
  const parts = str.split('*');
  const formattedParts = parts.map((part, index) => {
    if (index % 2 === 1) {
      return (
        <span key={index} className="font-bold">
          {part}
        </span>
      );
    } else {
      return part;
    }
  });
  return <>{formattedParts}</>;
}
