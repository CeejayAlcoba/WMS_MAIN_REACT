import Button from "../../Button";

export default function Form({ onSubmit, children,className,footer,header }) {
  return (
    <>
      <form
        className={className&&className}
        onSubmit={onSubmit&&onSubmit}
      >
        {header&&header}
        {children}
        {footer&&footer}
      </form>
    </>
  );
}
