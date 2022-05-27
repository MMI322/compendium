export const HeaderLogo: React.FC = () => {
  return (
    <div style={{ width: 191, height: 52, fontSize: 26 }}>
      <div>mirea-</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <img src="assets/logo-ellipse.svg" alt="logo.svg" />
        <div>compendium</div>
      </div>
    </div>
  );
};
