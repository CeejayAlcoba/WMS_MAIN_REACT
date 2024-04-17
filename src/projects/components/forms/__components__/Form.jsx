import Button from "../../Button";

export default function Form({
  onSubmit,
  children,
  className,
  footerElement,
  headerElement,
}) {
  return (
    <>
      <form className={className} onSubmit={onSubmit}>
        {headerElement}
        {children}
        {footerElement}
      </form>
    </>
  );
}
