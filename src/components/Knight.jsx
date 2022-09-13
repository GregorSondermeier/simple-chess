/**
 * @return {JSX.Element}
 * @constructor
 */
export const Knight = () => {
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <span
        style={{
          display: 'inline-block',
          fontSize: '40px',
          fontWeight: 'bold',
        }}
      >
        ♘
      </span>
    </div>
  );
}
