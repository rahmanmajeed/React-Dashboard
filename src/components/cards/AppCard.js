function AppCard({ children, hasTitle, Title, bgColor="bg-white", hasDivider, closable }) {
  /**
   * @param children @type {JSX}
   * @param hasTitle @type {boolean}
   * @param Title @type {string}
   * @param bgColor @type {string}
   * @param hasDivider @type {boolean}
   * @param closable @type {boolean}
   */
  return (
    <>
      <div className={`${bgColor} rounded-md shadow-lg p-5`}>{children}</div>
    </>
  );
}

export default AppCard;
