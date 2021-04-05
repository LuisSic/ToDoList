interface DropdownItemProps {
  text: string;

  Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export function DropdownItem({ text, Svg }: DropdownItemProps) {
  return (
    <>
      <Svg className="icon-small menu-space" />
      <span>{text}</span>
    </>
  );
}
