import Button from "../../Button";

export default function Form({ onSubmit, children,style,footer,header }) {
  return (
    <>
      <form
        style={style&&style}
        onSubmit={onSubmit&&onSubmit}
      >
        {header&&header}
        {children}
        {footer&&footer}
      </form>
    </>
  );
}
