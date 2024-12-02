const Regulation = () => {
  return (
    <div
      className="pdf"
      style={{ width: "100%", height: "200vh", overflow: "hidden" }}
    >
      <iframe
        src="/documents/yeni_yönetmelik.pdf"
        width="100%"
        height="500px"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title="PDF Viewer"
      ></iframe>
    </div>
  );
};

export default Regulation;
